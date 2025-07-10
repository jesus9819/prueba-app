import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  posts: Post[] = [];
  isLoading = false;
  hasError = false;

  constructor(private postService: PostService) {}
  ngOnInit(): void {
    this.loadPosts();
  }
  loadPosts(): void {
    this.isLoading = true;
  this.postService.getPosts().subscribe({
    next: (data) => {
      this.posts = data;
      this.hasError = false;
    },
    error: (err) => {
      console.error('Error al cargar publicaciones', err);
      this.hasError = true;
    },
    complete: () => {
      this.isLoading = false;
    }
  });
  }

  deletePost(id: number): void {
  if (confirm('¿Estás seguro de que quieres eliminar esta publicación?')) {
    this.postService.deletePost(id).subscribe({
      next: () => {
        this.posts = this.posts.filter(post => post.id !== id);
        alert('Publicación eliminada correctamente');
      },
      error: (err) => {
        console.error('Error al eliminar la publicación', err);
        alert('Error al eliminar la publicación');
      }
    });
  }

  }
  viewPost(id: number): void {}
  editPost(id: number): void {}
}
