import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//const routes: Routes = [{ path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule) }];
const routes: Routes = [
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  {
    path: 'posts',
    loadChildren: () =>
      import('./posts/posts.module').then(m => m.PostsModule)
  },
  { path: '**', redirectTo: 'posts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
