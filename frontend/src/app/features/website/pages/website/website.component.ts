import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';

import { Comment } from '@models/comment.model';
import { Website } from '@models/website.model';

import { CommentService } from '@services/comment.service';
import { WebsiteService } from '@services/website.service';

@Component({
  selector: 'app-website',
  templateUrl: './website.component.html',
  styleUrls: ['./website.component.css']
})
export class WebsiteComponent implements OnInit {
  isLoading: boolean = true;
  website: Website;
  comments: Comment[];
  private skip: number = 0;
  private limit: number = 10;
  constructor(
    private readonly websiteService: WebsiteService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly commentService: CommentService,
    private readonly router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ websiteId }) => websiteId ? this.loadData(websiteId) : this.router.navigate(['/']));
  }

  loadData(websiteId: string): void {
    forkJoin({
      website: this.websiteService.getWebsite(websiteId),
      comments: this.getComments(websiteId),
    }).subscribe({
      next: ({ website, comments }) => {
        this.website = website;
        this.comments = comments;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  private getComments(websiteId: string): Observable<Comment[]> {
    return this.commentService.getComments(websiteId, this.limit, this.skip);
  }

}
