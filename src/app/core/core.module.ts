import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';



@NgModule({
  declarations: [
    HomeComponent,
    EducationComponent,
    SkillsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
