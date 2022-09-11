import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { stepsTour } from '@constants/tour.constant';
import { ITour } from '@interfaces/tour.interface';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit, AfterViewInit {

  @ViewChild('progress') progress: ElementRef;
  @ViewChild('slidePage') slidePage: ElementRef;
  @ViewChild('pages') pagesWrapper: ElementRef;
  @ViewChildren('step') steps: QueryList<ElementRef>;
  @ViewChildren('page') pages: QueryList<ElementRef>;
  private marginLeft: number = 20;
  private currentStep: number = 1;

  itemStepsTour: ITour[];
  firstItemStepTour: ITour;

  prev: boolean = false;
  next: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.firstItemStepTour = stepsTour[0];
    const [ first, ...rest ] = stepsTour;
    this.itemStepsTour = rest;
  }

  ngAfterViewInit() {
    this.pagesWrapper.nativeElement.style.width = ((this.pages.length - 1) * 100).toString().concat("%");
  }

  prevStep(): void {
    this.currentStep--;
    this.slidePage.nativeElement.style.marginLeft = this.getNewMargin(true);
    if(this.currentStep < 1) {
      this.currentStep = 1;
    }
    this.updateSteps();
  }

  nextStep(): void {
    this.slidePage.nativeElement.style.marginLeft = this.getNewMargin();
    this.currentStep++;
    if (this.currentStep > this.steps.length) {
      this.currentStep = this.steps.length;
    }
    this.updateSteps();
  }

  private getNewMargin(prev: boolean = false): string {
    const newCurrent = !prev ? this.currentStep : this.currentStep - 1;
    return (newCurrent * -this.marginLeft).toString().concat('%');
  }

  private updateSteps(): void {
    this.steps.forEach((step, i) => {
      if (i < this.currentStep) step.nativeElement.classList.add('active');
      else step.nativeElement.classList.remove('active');
    });
    const activeSteps = document.querySelectorAll('.active');
    this.progress.nativeElement.style.width =  ((activeSteps.length - 1) / (this.steps.length - 1)) * 100 + "%";
    if (this.currentStep === 1) {
      this.prev = true;
    } else if (this.currentStep === this.steps.length) {
      this.next = true;
    } else {
      this.next = false;
      this.prev = false;
    }

  }

}
