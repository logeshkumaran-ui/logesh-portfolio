import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  educations: any;
  constructor(private service: PortfolioService) { }

  ngOnInit(): void {
    this.service.getEducation().subscribe((education) => {
      this.educations = education;
    });
  }
}
