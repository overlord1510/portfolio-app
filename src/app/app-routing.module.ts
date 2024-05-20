import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducationComponent } from './core/education/education.component';
import { HomeComponent } from './core/home/home.component';
import { SkillsComponent } from './core/skills/skills.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  {path:"education",component:EducationComponent},
  {path:'skills',component:SkillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
