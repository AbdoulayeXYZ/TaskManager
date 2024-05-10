import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Modulos
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Componentes
import { NavbarComponent } from './components/navbar/navbar.component';
import { TaskListComponent } from './components/tasklist/tasklist.component';
import { AddEditTaskComponent } from './components/add-edit-task/add-edit-task.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TaskListComponent,
    AddEditTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }