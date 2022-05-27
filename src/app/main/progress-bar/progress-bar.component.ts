import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  @Input() skillProgress:string="";
  @Input() skillName: string="";
  @Input() skillsColor: string="";
  constructor() { 
  }

  ngOnInit(): void {}


}
