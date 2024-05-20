import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  typedName: string = '';
  name: string = 'I\'m Md Asad Ali Haidar';
  role:string='';

  constructor() { }

  ngOnInit(): void {
    this.typeName();
  }

  typeName() {
    const nameInterval = setInterval(() => {
      if (this.typedName.length < this.name.length) {
        this.typedName += this.name.charAt(this.typedName.length);
      } else {
        clearInterval(nameInterval);
        setTimeout(() => {
          this.role += '- a Full Stack Developer';
        }, 500);
      }
    }, 150);
  }
}
