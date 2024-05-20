import { Component, OnInit } from '@angular/core';

interface Skill {
  name: string;
  level: number; // Skill level percentage (0-100)
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    { name: 'Java', level: 90 },
    { name: 'SQL', level: 85 },
    { name: 'HTML', level: 95 },
    { name: 'CSS', level: 90 },
    { name: 'JavaScript', level: 80 },
    { name: 'Spring Boot', level: 75 },
    { name: 'Spring MVC', level: 70 },
    { name: 'Angular', level: 85 }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
