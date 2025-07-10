import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';
import { AlertService } from '../../../shared/services/alert.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {
  posts: Post[] = [];
  isLoading = false;
  hasError = false;

  constructor(
    private postService: PostService,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.isLoading = true;

    // ✅ Captura lo creado o editado desde el state
    const newPost = history.state.newPost;
    const updatedPost = history.state.updatedPost;

    this.postService.getPosts().subscribe({
      next: (data) => {
        this.posts = data;

        // ✅ Insertar nuevo post
        if (newPost) {
          newPost.id = newPost.id ?? Math.floor(Math.random() * 10000);
          this.posts.unshift(newPost);
        }

        // ✅ Actualizar post editado
        if (updatedPost) {
          const index = this.posts.findIndex(p => p.id === updatedPost.id);
          if (index !== -1) {
            this.posts[index] = { ...updatedPost };
          }
        }

        this.hasError = false;
      },
      error: () => {
        this.hasError = true;
        this.alertService.error('Error al cargar publicaciones');
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  viewPost(id: number): void {
    this.router.navigate(['/posts/view', id]);
  }

  editPost(id: number): void {
    this.router.navigate(['/posts/edit', id]);
  }

  deletePost(id: number): void {
    this.alertService.confirmDelete('¿Eliminar publicación?', 'Esta acción no se puede deshacer.').then(result => {
      if (result.isConfirmed) {
        this.postService.deletePost(id).subscribe({
          next: () => {
            this.alertService.success('Publicación eliminada');
            this.posts = this.posts.filter(p => p.id !== id);
          },
          error: () => {
            this.alertService.error('No se pudo eliminar');
          }
        });
      }
    });
  }
}
