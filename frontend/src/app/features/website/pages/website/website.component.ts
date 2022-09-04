import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';

import { Website } from '@models/website.model';

import { WebsiteService } from '@services/website.service';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent implements OnInit {
  isLoading: boolean = true;
  website: Website;
  constructor(
    private readonly websiteService: WebsiteService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ websiteId }) => websiteId ? this.loadData(websiteId) : this.router.navigate(['/']));
  }

  loadData(websiteId: string): void {
    forkJoin({
      website: this.websiteService.getWebsite(websiteId),
    }).subscribe({
      next: ({ website }) => {
        this.website = website;
        console.log(this.website);
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

}
