import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  panelOpenState = false;
  @Input() bodyColor: string = "";
  @Input() sectionColor: string = "";
  @Input() experienceTimeFrame: string = "";
  @Input() experienceDetails: string = "";
  @Input() corporateName: string = "";
  constructor() { }

  ngOnInit(): void {
    this.sectionColor = "#fff";
  }

}
