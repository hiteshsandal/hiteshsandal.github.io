import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'education-tab',
  templateUrl: './education-tab.component.html',
  styleUrls: ['./education-tab.component.css']
})
export class EducationTabComponent implements OnInit {
  @Input() educationType: string = "";
  @Input() educationInstitute: string = "";
  @Input() educationTimeFrame: string = "";
  @Input() educationInfo: string = "";
  @Input() bodyColor: string = "";
  constructor() { 
  }

  ngOnInit(): void {
  }

}
