import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartseiteComponent } from './startseite/startseite.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DiagramComponent } from './diagram/diagram.component';
import { NavComponent } from './nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './footer/footer.component';
import { StartComponent } from './components/start/start.component';



@NgModule({
  declarations: [
    AppComponent,
    StartseiteComponent,
    DiagramComponent,
    NavComponent,
    FooterComponent,

    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    RouterModule.forRoot([
      { path: '', component: StartseiteComponent },

      { path: 'diagram', component: DiagramComponent },
      { path: 'startseite', component: StartComponent }
    ]),
    MatToolbarModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
