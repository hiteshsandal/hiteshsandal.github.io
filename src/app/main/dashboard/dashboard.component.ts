import { Component, OnInit } from '@angular/core';
import { LocalDBService } from '../../SharedServices/local-db.service';
import { NavbarOption, SkillsOption, EducationDetails, ExperienceDetails } from '../../model/resume.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  constructor(private localDB: LocalDBService) { }
  
  navbarOptions: NavbarOption[] = [];
  skills: SkillsOption[] = [];
  educationDetails: EducationDetails[] = [];
  experienceDetails: ExperienceDetails[] = [];
  
  introduction:string = "";
  about: string = "";
  skillsWelcomeText:string = "";
  
  skillsColor: string ="rgb(188,143,143)";
  educationColor: string = "#f8a577";
  educationBodyColor: string = "#fcf7f1";
  experienceColor: string = "#198597";
  experienceBodyColor: string = "#f0deca";
  selectedOption:number = 0;
  
  ngOnInit(): void {
    this.navbarOptions = this.localDB.getNavBarOptions();
    this.skills = this.localDB.getSkills();
    this.educationDetails = this.localDB.getEducationDetails();
    this.experienceDetails = this.localDB.getExperienceDetails();
    this.introduction = this.localDB.getIntroductionText();
    this.about = this.localDB.getAboutText();
    this.skillsWelcomeText = this.localDB.getSkillsWelcomeText();

    // this.skillsColor="rgba(1,1,1,0.5)";
  }
  
  scrollToView(name:string){
    const filter = this.navbarOptions.find(x => x.name === name);
    if(filter){
      this.selectedOption = filter.id;
      document.getElementById(filter.name)?.scrollIntoView();
    }
  }
}
