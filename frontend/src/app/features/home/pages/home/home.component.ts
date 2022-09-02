import { Component, OnInit } from '@angular/core';
import { Category } from '@models/category.model';
import { CategoryService } from '@services/category.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories: Category[];
  titles: string[] = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
        console.log(this.categories);
        this.categories.forEach(el => this.titles.push(el.name));
      },
    });
  }

}
