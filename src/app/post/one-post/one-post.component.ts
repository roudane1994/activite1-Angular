import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/models/post';
import { ServicePostService } from 'src/app/services/service-post.service';

@Component({
  selector: 'app-one-post',
  templateUrl: './one-post.component.html',
  styleUrls: ['./one-post.component.css']
})
export class OnePostComponent implements OnInit {
  ngOnInit(): void {
    
  }

  @Input() post:Post;

  constructor(private postService:ServicePostService) { }

  OnchangeLoveIt(id,operation){
   this.postService.OnchangeLoveIt(id,operation);
  }
  OnSuppPOst(id){
    
    this.postService.supprime(id);
   }

 

}
