import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FeedbackLikeService } from 'src/Services/feedback-like.service';
@Component({
  selector: 'app-user-feed',
  templateUrl: './user-feed.component.html',
  styleUrls: ['./user-feed.component.css']
})
export class UserFeedComponent {
  chunk

  constructor(private feed :FeedbackLikeService){

    this.chunk={
      feedback:""
    }


  }
    longText = `Performance /Appearance`;
    // onSubmit(f: NgForm) {
    //   console.log(f.value);  // { first: '', last: '' }
    //   console.log(f.valid);  // false
    // }

    async onSubmit(f: NgForm){
  this.chunk.feedback=f.value
  const response= await this.feed.addFeed(this.chunk)
  console.log(response)
    }


}
