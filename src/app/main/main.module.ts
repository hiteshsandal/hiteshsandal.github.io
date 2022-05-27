import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LocalDBService } from '../SharedServices/local-db.service';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { StringToNumberPipe } from '../Pipe/string-to-number.pipe';
import { EducationTabComponent } from './education-tab/education-tab.component';
import { ExperienceComponent } from './experience/experience.component';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressBarComponent,
    StringToNumberPipe,
    EducationTabComponent,
    ExperienceComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule
  ],
  exports: [DashboardComponent],
  providers: [LocalDBService]
})
export class MainModule { }
