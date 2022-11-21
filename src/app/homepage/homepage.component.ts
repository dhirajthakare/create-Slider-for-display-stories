import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ShowSliderComponent } from '../show-slider/show-slider.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private mtdialog:MatDialog){

  }

  ngOnInit(): void {
      
  }

  openSilder(){

   this.mtdialog.open(ShowSliderComponent,
    {
      width: '700px',
      panelClass: 'custom-modalbox'
    });

  }

}
