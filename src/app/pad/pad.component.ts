import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'chaospad-pad',
  templateUrl: './pad.component.html',
  styleUrls: ['./pad.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class PadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
