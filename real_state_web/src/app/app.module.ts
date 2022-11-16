import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';  
import { MatExpansionModule } from '@angular/material/expansion'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact&support/contact/contact.component';
import { IndexComponentComponent } from './Index/index-component/index-component.component';
import { RentComponentComponent } from './rent/rent-component/rent-component.component';
import { ResultsComponentComponent } from './results/results-component/results-component.component';
import { RoomComponentComponent } from './room/room-component/room-component.component';
import { ToolbarComponent } from './auxComponents/toolbar/toolbar.component';
import { MatStepperModule } from '@angular/material/stepper';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button'; 

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginComponent } from './login/login.component';
import { StepperComponent } from './rent/rent-component/stepper/stepper/stepper.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    IndexComponentComponent,
    RentComponentComponent,
    ResultsComponentComponent,
    RoomComponentComponent,
    ToolbarComponent,
    LoginComponent,
    StepperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
