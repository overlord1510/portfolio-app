import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './core/education/education.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  {path:"education",component:EducationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
