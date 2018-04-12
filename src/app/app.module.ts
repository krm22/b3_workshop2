import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { AddProjectPage} from '../pages/addproject/addproject';
import { ProfilePage } from '../pages/profile/profile';
import { ProjectPage} from '../pages/project/project';
import { StudentQuestionPage } from '../pages/studentquestion/studentquestion';
import { StudentAppointmentPage } from '../pages/studentappointment/studentappointment';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    WelcomePage,
    SignupPage,
    LoginPage,
    AddProjectPage,
    ProfilePage,
    ProjectPage,
    StudentQuestionPage,
    StudentAppointmentPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    WelcomePage,
    SignupPage,
    LoginPage,
    AddProjectPage,
    ProfilePage,
    ProjectPage,
    StudentQuestionPage,
    StudentAppointmentPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
