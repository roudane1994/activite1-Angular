import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicePostService {

  private posts:Post[]=[
    {
   
      titre:"aaa",
      contenu:"aaaaaaaaaaaaaaaaaaaaaaaaaa",
      created_at:new Date(),
      loveIts:-7,
      id:0
    },
    {
     
      titre:"bbb",
      contenu:"bbbbbbbbbbbbbbbbbbbbbbbbbbbbb",
      created_at:new Date(),
      loveIts:2,
      id:1
    },
    {
   
      titre:"cccc",
      contenu:"cccccccccccccccccccccccccccc",
      created_at:new Date(),
      loveIts:-4,
      id:2
    },
    {
   
      titre:"dddd",
      contenu:"ddddddddddddddddddddddddddd",
      created_at:new Date(),
      loveIts:2,
      id:3
    }
   
  ];
  postsSubject = new Subject<Post[]>();

  constructor() { 

  }
 
  emitPostsSubject(){

    this.postsSubject.next(this.posts.slice());
  }

  OnchangeLoveIt(i:number,operation){
    if(operation==='plus')this.posts[i].loveIts=++this.posts[i].loveIts;
    if(operation==='moins')this.posts[i].loveIts=--this.posts[i].loveIts;
     
     this.emitPostsSubject();
  }
  addPOst(post:Post){
    this.posts.push(post);
    this.emitPostsSubject();
  }
  supprime(id:number){
    this.posts=this.posts.filter((post)=>post.id!=id);
    this.emitPostsSubject();
  }
}
