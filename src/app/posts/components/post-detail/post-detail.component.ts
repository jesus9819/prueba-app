import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Post } from '../../models/post.model';
import { AlertService } from '../../../shared/services/alert.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post!: Post;
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private alertService: AlertService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.loadPost(+id);
    } else {
      this.alertService.error('ID de publicación no válido');
      this.router.navigate(['/posts']);
    }
  }

  loadPost(id: number): void {
    this.isLoading = true;
    this.postService.getPostById(id).subscribe({
      next: (data) => {
        this.post = data;
      },
      error: () => {
        this.alertService.error('No se encontró la publicación');
        this.router.navigate(['/posts']);
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  goBack(): void {
    this.router.navigate(['/posts']);
  }
}
