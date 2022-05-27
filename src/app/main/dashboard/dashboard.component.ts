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

  ngOnInit(): void {
    this.navbarOptions = this.localDB.getNavBarOptions();
    this.skills = this.localDB.getSkills();
    this.educationDetails = this.localDB.getEducationDetails();
    this.experienceDetails = this.localDB.getExperienceDetails();
    
    // this.skillsColor="rgba(1,1,1,0.5)";
    this.introduction = "STOP. PLAN. CREATE. I believe in fostering an innovative and creative, approach to fuel engaging experiences that reflect a positive impact on the world."
    this.about = "A fullstack developer at Samsung Data System with experience in technologies like Angular 7+, .NET Framework (ASP.NET Web API), SQL Server etc. Also, good understanding of data structures in C/C++/C#. <br /> <br />I like to make things that make a difference. Innovative, outcome-driven individual looking to further my career in software engineer and work with industries and technologies that inspire change.";
    this.skillsWelcomeText = "I have been collecting these skills right from my college be it professional or personnal skill. These skills ranges from technology stacks that I use in software development to skills that I use for myselfs"
    // this.about = "I am a software engineer and like to make things that make a difference. Innovative, outcome-driven individual looking to further my career in software engineer and work with industries and technologies that inspire change."
  }

}
