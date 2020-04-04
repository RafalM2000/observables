import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ExampleOneComponent } from './example-one/example-one.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExampleTwoComponent } from './example-two/example-two.component';

export const appRouter: Routes = [
  {path: '', component: ExampleOneComponent},
  {path: 'one', component: ExampleOneComponent},
  {path: 'two', component: ExampleTwoComponent},
  {path: '**', component: ExampleOneComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ExampleOneComponent,
    ExampleTwoComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    RouterModule.forRoot(appRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
