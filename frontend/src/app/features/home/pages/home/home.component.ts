import { Component, OnInit } from '@angular/core';

import { Category } from '@models/category.model';
import { Website } from '@models/website.model';

import { CategoryService } from '@services/category.service';
import { WebsiteService } from '@services/website.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories: Category[];
  websites: Website[];
  titles: string[] = [];

  constructor(
    private categoryService: CategoryService,
    private websiteService: WebsiteService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    forkJoin({
      categories: this.categoryService.getCategories(),
      websites: this.websiteService.getWebsites(6)
    }).subscribe({
      next: ({ categories, websites }) => {
        this.categories = categories;
        this.categories.forEach(el => this.titles.push(el.name));
        this.websites = websites;
        console.log(this.websites);
      },
    })
  }

}
