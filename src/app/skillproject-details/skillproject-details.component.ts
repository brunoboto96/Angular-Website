import { Component, OnInit } from '@angular/core';
import { skillprojects } from '../skillprojects';

@Component({
  selector: 'app-skillproject-details',
  templateUrl: './skillproject-details.component.html',
  styleUrls: ['./skillproject-details.component.css']
})
export class SkillprojectDetailsComponent implements OnInit {
  skillprojects = skillprojects;
  constructor() { }

  ngOnInit() {
  }

}
