import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';

import { ResourceService } from '@services/resource.service';
import { WebsiteService } from '@services/website.service';

import { Website } from '@models/website.model';
import { Resource } from '@models/resource.model';

@Component({
  selector: 'app-resource',
  templateUrl: './resource.component.html',
  styleUrls: ['./resource.component.css']
})
export class ResourceComponent implements OnInit {

  websites: Website[];
  resource: Resource;
  resources: Resource[];

  isLoading: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private websiteService: WebsiteService,
    private resourceService: ResourceService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ resourceId }) => resourceId ? this.loadData(resourceId) : this.router.navigate(['/']));
  }

  loadData(resourceID: string): void {
    forkJoin({
      resources: this.resourceService.getResources(7),
      resource: this.resourceService.getResource(resourceID),
      websites: this.getWebsites(resourceID),
    }).subscribe({
      next: ({ resources, resource, websites }) => {
        this.resource = resource;
        this.websites = websites;
        this.resources = resources;
        console.log(this.resources);
      },
      complete: () => {
        this.isLoading = false;
      }
    })
  }

  private getWebsites(resourceID: string): Observable<Website[]> {
    return this.websiteService.getWebsitesByResource(resourceID);
  }

}