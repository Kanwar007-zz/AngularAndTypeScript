
import { Component, OnInit } from '@angular/core';
import { PostserService } from 'src/app/services/postser.service';
import { post } from './posts'; 

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts : post
  constructor(private postService : PostserService) { 
    postService.getPostValue().subscribe(
      (response) => {                           //next() callback
        console.log('response received')
       alert(response)
        this.posts = response; 
      }
      )
   
  }

  ngOnInit(): void {
    
  }




}
