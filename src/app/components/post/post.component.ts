import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../models/Post';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input()
  post: Post;

  constructor(private postsServise: PostsService) { }
  comentToPost(id: number): void {
    this.postsServise.getComentToPost(id).subscribe(coment => {
      console.log(coment);
    });
  }
  ngOnInit(): void {
  }

}
