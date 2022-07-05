import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './lessons/forms/forms.component';
import { BasicFormsComponent } from './lessons/forms/basic-forms/basic-forms.component';
import { TodoAppComponent } from './projects/todo-app/todo-app.component';


@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    BasicFormsComponent,
    TodoAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
