import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: any;
  constructor(private service: PortfolioService) { }

  ngOnInit(): void {
    this.service.getSkills().subscribe((skills) => {
      this.skills = skills;
    });
  }

}
