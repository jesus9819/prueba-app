import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '../../../shared/services/alert.service';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {
  postForm!: FormGroup;
  isEdit = false;
  postId!: number;

  constructor(
    private fb: FormBuilder,
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.initForm();

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEdit = true;
        this.postId = +id;
        this.loadPost(this.postId);
      }
    });
  }

  initForm(): void {
    this.postForm = this.fb.group({
      userId: ['', [Validators.required]],
      title: ['', [Validators.required, Validators.minLength(5)]],
      body: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  loadPost(id: number): void {
    this.postService.getPostById(id).subscribe({
      next: (post) => {
        this.postForm.patchValue(post);
      },
      error: () => {
        this.alertService.error('No se pudo cargar la publicación');
      }
    });
  }

  onSubmit(): void {
    if (this.postForm.invalid) return;

    const formData: Post = this.postForm.value;

    if (this.isEdit) {
      this.postService.updatePost(this.postId, formData).subscribe({
        next: () => {
          const updatedPost: Post = { ...formData, id: this.postId };
          this.alertService.success('Publicación actualizada');
          this.router.navigate(['/posts'], { state: { updatedPost } });
        },
        error: () => {
          this.alertService.error('Error al actualizar');
        }
      });
    } else {
      this.postService.createPost(formData).subscribe({
        next: (newPost) => {
          newPost.id = Math.floor(Math.random() * 10000); // simular ID
          this.alertService.success('Publicación creada');
          this.router.navigate(['/posts'], { state: { newPost } });
        },
        error: () => {
          this.alertService.error('Error al crear publicación');
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/posts']);
  }
}
