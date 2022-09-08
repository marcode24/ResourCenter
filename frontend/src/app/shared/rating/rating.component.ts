import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  starsArray = [1, 2, 3, 4, 5];
  @Input() bgLight: boolean = false;
  @Input() editable: boolean = false;
  @Input() name: string;
  @Input() stars: number = 0;
  constructor() { }

  ngOnInit(): void {
    for(let i of this.starsArray) {
      console.log(!(this.stars < i));
    }
  }

}
