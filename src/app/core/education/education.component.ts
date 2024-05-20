import { Component, OnInit } from '@angular/core';

interface EducationItem {
  degree: string;
  institution: string;
  details: string;
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationList: EducationItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.educationList = [
      {
        degree: 'Bachelor of Technology (B.Tech) in Information Technology',
        institution: 'Asansol Engineering College',
        details: 'CGPA: 8.759 (upto 5th semester)'
      },
      {
        degree: 'Higher Secondary(C.B.S.E)',
        institution: 'Green Point Academy',
        details: 'Percentage : 77.4%'
      },
      {
        degree: 'Matriculation(C.B.S.E)',
        institution: 'Green Point Academy',
        details: 'Percentage : 90.8%'
      }
    ];
  }
}
