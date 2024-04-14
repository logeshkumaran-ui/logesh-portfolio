import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  experience: any;
  constructor(private service: PortfolioService) { }

  ngOnInit(): void {
    this.service.getExperiences().subscribe((experiences) => {
      this.experience = experiences;
    });
  }
}
