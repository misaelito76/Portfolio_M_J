import { Injectable } from '@angular/core';
import {Firestore,collection,addDoc, doc, getDoc} from '@angular/fire/firestore'
import Likes from 'src/Interfaces/likes.interface';
import Feedback from 'src/Interfaces/user.interface';
@Injectable({
  providedIn: 'root'
})
export class FeedbackLikeService {

  constructor(private firestore:Firestore, ) {


  }
  addFeed(feed:Feedback){
const feedRef=collection(this.firestore,'Feedback');
return addDoc(feedRef,feed)
  }
  addLike(likes :Likes){
    const likeRef=collection(this.firestore,'Likes');
    return addDoc(likeRef,likes)
      }

async getLike (){
  const docRef = doc(this.firestore, "Likes");
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}
}
