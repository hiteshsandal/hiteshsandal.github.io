import { Injectable } from '@angular/core';
import { NavbarOption,SkillsOption, EducationDetails, ExperienceDetails } from '../model/resume.model';




@Injectable({
  providedIn: 'root'
})
export class LocalDBService {
  navbarOption: NavbarOption[] = [];
  skillsOption: SkillsOption[] = [];
  educationDetails: EducationDetails[] = [];
  experienceDetails: ExperienceDetails[] = [];

  constructor() {
    this.setNavbar();
    this.setSkills();
    this.setEducationDetails();
    this.setExperienceDetails();
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
  
  setNavbar():void {
    const localNavbarOptions = [
      { name: "Home", href: "https://www.google.com" },
      { name: "About", href:""},
      { name: "Profile", href:""},
      { name: "Experience", href:""},
      { name: "Cover Letter", href:""},
      { name: "Skills", href:""},
      { name: "Education", href:""},
      { name: "Facts", href:""},
      { name: "Contact", href:""}
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


