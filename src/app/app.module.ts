import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ExampleOneComponent } from './example-one/example-one.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExampleTwoComponent } from './example-two/example-two.component';
import { ExampleThreeComponent } from './example-three/example-three.component';
import { ExampleFourComponent } from './example-four/example-four.component';
import { ExampleFourDetailsComponent } from './example-four-details/example-four-details.component';
import { ExampleFiveComponent } from './example-five/example-five.component';

export const appRouter: Routes = [
  {path: '', component: ExampleOneComponent},
  {path: 'one', component: ExampleOneComponent},
  {path: 'two', component: ExampleTwoComponent},
  {path: 'three', component: ExampleThreeComponent},
  {path: 'four', component: ExampleFourComponent},
  {path: 'five', component: ExampleFiveComponent},
  {path: 'fourdetails/:id', component: ExampleFourDetailsComponent},
  {path: '**', component: ExampleOneComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ExampleOneComponent,
    ExampleTwoComponent,
    ExampleThreeComponent,
    ExampleFourComponent,
    ExampleFourDetailsComponent,
    ExampleFiveComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
