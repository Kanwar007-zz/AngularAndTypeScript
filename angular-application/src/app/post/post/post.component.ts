import { Component, OnInit } from '@angular/core';
import { PostserService } from 'src/app/services/postser.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts : any [];
  constructor(private postService : PostserService) { 
   this.posts = postService.getPostValue();
   console.log(this.posts)
  }

  ngOnInit(): void {
    
  }


}
