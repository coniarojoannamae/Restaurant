import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from "./app.component";
import {RestaurantComponent} from "./components/restaurant/restaurant.component";


const routes: Routes = [
  { path: 'restaurant', component: RestaurantComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes, {enableTracing: true}),
    FormsModule,
    NgOptimizedImage
  ],

  declarations: [
    AppComponent,
    RestaurantComponent
  ],

  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

