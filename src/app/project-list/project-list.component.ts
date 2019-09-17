import { Component, OnInit } from '@angular/core';
import { projects } from '../projects';
import { skills } from '../skills';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  title="Main Page";
  projects = projects;
  skills = skills;
  constructor() { }

  ngOnInit() {
  }

}
