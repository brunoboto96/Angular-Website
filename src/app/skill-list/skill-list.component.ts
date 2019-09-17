import { Component, OnInit } from '@angular/core';
import { skills } from '../skills';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {
  skill;

  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.skill = skills [+params.get('skillId')];
    });
  }
  }
