import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}

  // only the getPosts method is used in the posts component
  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }
  //only the getPostById method is used in the post-detail component
  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${id}`);
  }
  // only the createPost, updatePost and deletePost methods are used in the post-form component
  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post);
  }
  // only the updatePost method is used in the post-form component
  updatePost(id: number, post: Post): Observable<Post> {
    return this.http.put<Post>(`${this.apiUrl}/${id}`, post);
  }
  //only the deletePost method is used in the post-form component
  deletePost(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
