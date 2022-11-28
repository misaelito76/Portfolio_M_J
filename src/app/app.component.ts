import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { DialogSkillsComponent } from './dialog-skills/dialog-skills.component';
import { SchoolComponent } from './school/school.component';
import { collection, addDoc, getFirestore, setDoc, doc,deleteDoc, query, getDocs } from "firebase/firestore";
import { environment } from 'src/environments/environment';
import { initializeApp } from "firebase/app";
import { FeedbackLikeService } from 'src/Services/feedback-like.service';
import { UserFeedComponent } from './user-feed/user-feed.component';
import Likes from 'src/Interfaces/likes.interface';
import { Firestore } from '@angular/fire/firestore';
import { MyAppsComponent } from './my-apps/my-apps.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

show
likesObj
db
user
  constructor(public dialog: MatDialog, private likeService: FeedbackLikeService,private firestore:Firestore) {
this.db=firestore
this.user=Math.random()
console.log(this.user)
    this.likesObj={
      likes:0
    }
    this.show=true
    this.getDocs()
  }
async getDocs(){
  let idArr=[]
  const querySnapshot = await getDocs(collection(this.db, "Likes"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
idArr.push(doc)
  });
  this.likesObj.likes=idArr.length;

}



  openDialog() {
    const dialogRef = this.dialog.open(DialogSkillsComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openMyAppsDialog() {
    const dialogMyAppsRef = this.dialog.open(MyAppsComponent);

    dialogMyAppsRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openSchoolDialog() {
    const dialogRefSchool = this.dialog.open(SchoolComponent);

    dialogRefSchool.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openFeedDialog() {
    const dialogRefFeed = this.dialog.open(UserFeedComponent);

    dialogRefFeed.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  shareData = {
    title : 'My Portfolio',
    text: 'Thank you for sharing',
    url: 'https://portfoliodb-f9e0d.web.app/'
  }
  async share(){
try{
  await navigator.share(this.shareData)

}
catch (err){
  console.log(err)
}

  }
   app = initializeApp(environment.firebase);
async  likeFunc(){
this.likesObj.likes++
this.show=false
const response= await this.likeService.addLike(this.likesObj)
console.log(response)

  }

 async dislike(){
  this.show=true;

    this.likesObj.likes--
    await deleteDoc(doc(this.db, "Likes"));

      }

}

