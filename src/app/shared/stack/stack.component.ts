import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/project.model';
import { ProjectsService } from '../services/projects.service';

@Component({
  selector: 'app-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent implements OnInit {

  projects: Project[] = this.projectService.projects

  constructor(
    private projectService: ProjectsService
  ) { }

  ngOnInit(): void {
  }

}
