import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BlogpostComponent} from './blogpost/blogpost.component';


const routes: Routes = [
  {path : '', component: HomeComponent},
  {path : 'blogPost/:id', component: BlogpostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
