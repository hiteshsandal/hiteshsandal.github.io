import { Injectable } from '@angular/core';
import { NavbarOption, SkillsOption, EducationDetails, ExperienceDetails } from '../model/resume.model';




@Injectable({
  providedIn: 'root'
})
export class LocalDBService {
  navbarOption: NavbarOption[] = [];
  skillsOption: SkillsOption[] = [];
  educationDetails: EducationDetails[] = [];
  experienceDetails: ExperienceDetails[] = [];
  introduction: string;
  about: string;
  skillsWelcomeText: string; 

  constructor() {
    this.setNavbar();
    this.setSkills();
    this.setEducationDetails();
    this.setExperienceDetails();

    this.introduction = "STOP. PLAN. CREATE. I believe in fostering an innovative and creative, approach to fuel engaging experiences that reflect a positive impact on the world."
    this.about = "A fullstack developer at Samsung Data System with experience in technologies like Angular 7+, .NET Framework (ASP.NET Web API), SQL Server etc. Also, good understanding of data structures in C/C++/C#. <br /> <br />I like to make things that make a difference. Innovative, outcome-driven individual looking to further my career in software engineer and work with industries and technologies that inspire change.";
    this.skillsWelcomeText = "I have been collecting these skills right from my college be it professional or personnal skill. These skills ranges from technology stacks that I use in software development to skills that I use for myselfs"
    // this.about = "I am a software engineer and like to make things that make a difference. Innovative, outcome-driven individual looking to further my career in software engineer and work with industries and technologies that inspire change."
  }
  
  
  
  getNavBarOptions(): NavbarOption[]{
    return this.navbarOption;
  }
  getSkills():SkillsOption[]{
    return this.skillsOption;
  }
  getEducationDetails():EducationDetails[]{
    return this.educationDetails;
  }
  getExperienceDetails():ExperienceDetails[]{
    return this.experienceDetails;
  }

  getIntroductionText(){
    return this.introduction;
  }

  getSkillsWelcomeText(){
    return this.skillsWelcomeText;
  }

  getAboutText(){
    return this.about;
  }
  
  setNavbar():void {
    const localNavbarOptions = [
      { id: 0, name: "Home"},
      { id: 1, name: "About"},
      { id: 2, name: "Skills"},
      { id: 3, name: "Education"},
      { id: 4, name: "Experience"}
      // { name: "Facts", href:""}
    ];
    this.navbarOption = localNavbarOptions;
  }
  
  setSkills():void{
    const skills = [
      {name: "Angular7+", progress: 60},
      {name: ".NET (ASP.NET WebAPI)", progress: 70},
      {name: "SQL Server", progress: 60},
      {name: "OOPs", progress: 80},
      {name: "Data Structure & Algorithms", progress: 50},
      {name: "Adobe Photoshop", progress: 50},
      {name: "Prezi", progress: 80},
    ];
    this.skillsOption = skills;
  }

  setEducationDetails(){
    this.educationDetails.push( 
      { educationType: "Bachelor's Degree",
        educationInstitute: "National Institute of Technology Hamirpur",
        educationTimeFrame: "2016-2020",
        educationInfo: "Graduated from NIT Hamirpur on 2020 with major in Electronics and Communication Engineering"
      }
    );
    this.educationDetails.push({
      educationType: "Higher Education",
      educationInstitute: "Adarsh Public Senior Secondary School",
      educationTimeFrame: "2015-2016",
      educationInfo: "Passed from Adarsh Public school with score of 94.6% in my major Physics, Chemistry & Maths. Awarded with laptop from Himachal Pradesh Govt."
    });
    this.educationDetails.push({
      educationType: "Secondary Education",
      educationInstitute: "Kendriya Vidyalaya Yol Cantt",
      educationTimeFrame: "2014-2015",
      educationInfo: "Passed from KV Yol with score of 9.6 CGPI out of 10. Also, I was the house captain representing Raman House out of Shivaji, Tagore, Ashoka & Raman."
    });

    return this.educationDetails;
  }

  setExperienceDetails(){
    this.experienceDetails.push({
      corporateName: "Samsung SDS Pvt. Ltd. India",
      experienceTimeFrame: "2020 - Preset",
      experienceDetails: "Currently working at Samsung Data System as a Senior Executive. Working on technology stack that includes Angular 7+, ASP.NET Web API, SQL Server, JIRA."
    });
  }

}


