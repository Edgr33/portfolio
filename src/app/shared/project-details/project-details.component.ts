import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Project } from 'src/app/project.model';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  project: Project

  images: any[]

  constructor(
    private activatedRoute: ActivatedRoute,
    private ProjectsService: ProjectsService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .subscribe((params: Params) => {
      let routeId = params.id
      
      this.project = this.ProjectsService.projects.find(({id}) => id === routeId)
      // console.log(this.project)

      this.images = [...this.project.images]
      console.log(this.project.images)
      this.images.splice(0, 1)
      // // console.log(this.images)
    });
  }

  indexToString(num: number) {
    num.toString()
  }

}
