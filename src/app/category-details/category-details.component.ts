import { Component, OnInit } from '@angular/core';
import { categories } from '../categories';
import { skillprojects } from '../skillprojects';
import { projects } from '../projects';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
  category;
  skillprojects = skillprojects;
  projects = projects;
  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('category');
    });
  }
  }

