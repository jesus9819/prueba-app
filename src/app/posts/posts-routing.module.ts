import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';

const routes: Routes = [
  { path: '', component: PostListComponent },            // /posts
  { path: 'create', component: PostFormComponent },      // /posts/create
  { path: 'edit/:id', component: PostFormComponent },    // /posts/edit/1
  { path: 'view/:id', component: PostDetailComponent }   // /posts/view/1
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
