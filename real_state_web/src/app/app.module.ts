import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button'; 
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card'; 
// LOGICA DEL PROYECTO
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact&support/contact/contact.component';
import { IndexComponentComponent } from './Index/index-component/index-component.component';
import { RentComponentComponent } from './rent/rent-component/rent-component.component';
import { ResultsComponentComponent } from './results/results-component/results-component.component';
import { RoomComponentComponent } from './room/room-component/room-component.component';
import { ToolbarComponent } from './auxComponents/toolbar/toolbar.component';
import { LoginComponent } from './login/login.component';
import { StepperComponent } from './rent/rent-component/stepper/stepper/stepper.component';
import { FAQComponent } from './auxComponents/faq/faq.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    FAQComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
