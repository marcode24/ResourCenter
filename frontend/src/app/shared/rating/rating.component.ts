import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() bgLight: boolean = false;
  @Input() editable: boolean = false;
  @Input() name: string;
  constructor() { }

  ngOnInit(): void {}

}
