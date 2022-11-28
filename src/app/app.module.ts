import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogSkillsComponent } from './dialog-skills/dialog-skills.component';
import {MatTooltipModule} from '@angular/material/tooltip';
import { SchoolComponent } from './school/school.component';
import {MatDividerModule} from '@angular/material/divider';
import{AngularFireModule}from '@angular/fire/compat';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { UserFeedComponent } from './user-feed/user-feed.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyAppsComponent } from './my-apps/my-apps.component'; // <== add the imports!

@NgModule({
  declarations: [
    AppComponent,
    DialogSkillsComponent,
    SchoolComponent,
    UserFeedComponent,
    MyAppsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatCardModule,
    MatToolbarModule,
    MatDialogModule,
    MatTooltipModule,
    MatDividerModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,

    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
