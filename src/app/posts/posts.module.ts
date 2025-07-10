import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsRoutingModule } from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostFormComponent } from './components/post-form/post-form.component';

import { ReactiveFormsModule } from '@angular/forms';

// Angular Material
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card'; // 🔽 este faltaba

@NgModule({
  declarations: [
    PostsComponent,
    PostListComponent,
    PostDetailComponent,
    PostFormComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    ReactiveFormsModule,

    // Material modules
    MatTableModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule // ✅ ahora puedes usar <mat-card>
  ]
})
export class PostsModule { }
