import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rosem-playground-screen-size',
  templateUrl: './screen-size.component.html',
  styleUrls: ['./screen-size.component.less'],
})
export class ScreenSizeComponent implements OnInit {
  public diagonal: number;
  public diagonal_inch: number;
  public height: number;
  public width: number;
  public ratio_width: number;
  public ratio_height: number;
  public pixel_width: number;
  public pixel_height: number;

  constructor() {}

  ngOnInit(): void {
    this.diagonal_inch = 35; //inch
    this.diagonal = this.diagonal_inch * 2.54; //cm
    this.ratio_width = 21.5;
    this.ratio_height = 9;
    this.pixel_height = 1440;
    this.pixel_width = Math.round(
      (this.ratio_width / this.ratio_height) * this.pixel_height,
    );
    this.height = Math.sqrt(
      this.diagonal ** 2 / (1 + (this.ratio_width / this.ratio_height) ** 2),
    );
    this.width = Math.sqrt(
      this.diagonal ** 2 / (1 + (this.ratio_height / this.ratio_width) ** 2),
    );
  }
}
