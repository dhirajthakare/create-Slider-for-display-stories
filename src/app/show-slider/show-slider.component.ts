import { Component, OnInit } from '@angular/core';
import { Subscription, interval, timeout, Subject, takeUntil } from 'rxjs';
import { MatDialogRef } from '@angular/material/dialog'


@Component({
  selector: 'app-show-slider',
  templateUrl: './show-slider.component.html',
  styleUrls: ['./show-slider.component.scss']
})
export class ShowSliderComponent implements OnInit {

  constructor(
    private dialogref :MatDialogRef<ShowSliderComponent>
  ) { }

  ngOnInit(): void {
    this.myobject();
  }

  name = 'Angular';
  imageObject = [{
      image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
      thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/5.jpg',
      title: 'Hummingbirds are amazing creatures'
  }, {
      image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg',
      thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/9.jpg'
  }, {
      image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
      thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/4.jpg',
      title: 'Example with title.'
  },{
      image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
      thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/7.jpg',
      title: 'Hummingbirds are amazing creatures'
  }, {
      image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg',
      thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/1.jpg'
  }, {
      image: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
      thumbImage: 'https://sanjayv.github.io/ng-image-slider/contents/assets/img/slider/2.jpg',
      title: 'Example two with title.'
  }];

  mysrc:any;
  i:any =0 ;
  destroye$: Subject<void> = new Subject<void>();


  myobject(){

    let  length = this.imageObject.length;
    console.log(length);

    let intervaldata = interval(2000);
    this.mysrc = this.imageObject[this.i]
    intervaldata.pipe(takeUntil(this.destroye$)).subscribe((res) => {
      this.i++;
      this.mysrc = this.imageObject[this.i]
      console.log(this.mysrc);
      if(length <= (this.i + 1)){
        this.dialogref.close();
      }

    });
  }

  ngOnDestroy(): void {
    this.destroye$.next();
  }

}
