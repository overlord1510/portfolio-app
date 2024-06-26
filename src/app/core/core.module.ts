import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectComponent } from './project/project.component';
import { CertificatesComponent } from './certificates/certificates.component';




@NgModule({
  declarations: [
    HomeComponent,
    EducationComponent,
    SkillsComponent,
    ProjectComponent,
    CertificatesComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class CoreModule { }
