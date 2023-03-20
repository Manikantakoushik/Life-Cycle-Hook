import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';


// import {UxDropdownFieldModule} from "@netcracker/ux-ng2/dropdown-field";
@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    // UxDropdownFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
