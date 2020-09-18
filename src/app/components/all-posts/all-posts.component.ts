import { Component, OnInit } from '@angular/core';
import {PostsService} from '../../services/posts.service';
import {Post} from '../../models/Post';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {
  posts: Post[];

  constructor(private postsService: PostsService) {
    postsService.getAllPost().subscribe(post => {
      this.posts = post;
    });
  }

  ngOnInit(): void {
  }

}
