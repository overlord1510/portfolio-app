import { Component } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.css']
})
export class CertificatesComponent {
  certificateImageUrls: string[] = [
    'assets/certificates/Advanced Styling with Responsive Design_page-0001.jpg',
    'assets/certificates/Interactivity with JavaScript_page-0001.jpg',
    'assets/certificates/IntroductionToCSS3_page-0001.jpg',
    'assets/certificates/IntroductionToOperatingSystem_page-0001.jpg',
    'assets/certificates/JavaMasterClass_page-0001.jpg',
    'assets/certificates/TCS CodeVita Season 11 Certificate - mdasadali_page-0001.jpg',
  ];

  currentIndex = 0;

  constructor() { }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.certificateImageUrls.length;
  }

  prev() {
    this.currentIndex = this.currentIndex > 0 ? this.currentIndex - 1 : this.certificateImageUrls.length - 1;
  }
}
