import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { RouterModule } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { SkillListComponent } from './skill-list/skill-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { SkillprojectDetailsComponent } from './skillproject-details/skillproject-details.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProjectListComponent,
    SkillListComponent,
    CategoryListComponent,
    SkillprojectDetailsComponent,
    CategoryDetailsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: ProjectListComponent },
      { path: 'skills/:skillId', component: SkillListComponent },
      { path: 'skillsp/:skillprojectId', component: SkillprojectDetailsComponent },
      { path: 'categories', component: CategoryListComponent },
      { path: 'categories/:category', component: CategoryDetailsComponent },
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
