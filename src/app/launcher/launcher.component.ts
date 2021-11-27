import { Component, OnInit } from '@angular/core';
import { OpenehrService } from '../openehr.service';

@Component({
  selector: 'app-launcher',
  templateUrl: './launcher.component.html',
  styleUrls: ['./launcher.component.css']
})
export class LauncherComponent implements OnInit {

  /* Patient id 
  http://36c3d7a9d475:8080/ehrbase/rest/openehr/v1/ehr/94f534c5-a07a-4be5-ac18-63247f049973

  POST template to localhost:8080/ehrbase/rest/openehr/v1/definition/template/adl1.4
  then
  GET http://localhost:8080/ehrbase/rest/ecis/v1/template/Encounter2

  then POST to http://localhost:8080/ehrbase/rest/ecis/v1/composition/?format=FLAT&ehrId=94f534c5-a07a-4be5-ac18-63247f049973&templateId=Encounter2

  {
  "ctx/time": "2014-03-19T13:10:00.000Z",
  "ctx/language": "en",
  "ctx/territory": "NO",
  "ctx/composer_name":"Sr. Kristen George",
    "encounter/blood_pressure/any_event/systolic|magnitude": "115",
    "encounter/blood_pressure/any_event/systolic|magnitude": "mm[Hg]",
    "encounter/blood_pressure/any_event/systolic|magnitude": "75"
  }

  */

  constructor(private ehrService: OpenehrService) { }

  ehr = {};

  ngOnInit(): void {
    /*
    this.ehrService.getEHR().subscribe((data: {}) => {
      this.ehr = data;
    })
    */
  }

  appUrl1 = "";
  appUrl2 = "http://localhost/lab";
  appUrl3 = "https://launch.smarthealthit.org/launcher?launch_uri=https%3A%2F%2Fexamples.smarthealthit.org%2Fgrowth-chart-app%2Flaunch.html&patient=smart-1482713%2Csmart-7777703%2Csmart-7777705%2Csmart-7777701%2Csmart-7777704%2Csmart-99912345%2Csmart-7777702&fhir_ver=2";//http://localhost:4300/launch?launch=eyJhIjoiMSIsImIiOiIxIiwiZSI6IjMiLCJmIjoiMSJ9&iss=http://localhost:4013/v/r4/fhir&redirectUri=/main";
  appUrl4 = "";//"http://localhost:4013/sample-app/launch.html?launch=eyJhIjoiMSIsImIiOiIxIiwiZSI6IjMiLCJmIjoiMSJ9&iss=http://localhost:4013/v/r4/fhir";

  
  
  //appUrl2 = "http://localhost:4013/sample-app/launch.html?launch=eyJhIjoiMSIsImIiOiIxIiwiZSI6IjMiLCJmIjoiMSJ9&iss=http://localhost:4013/v/r4/fhir";
  //appUrl3 = "http://localhost:8080/sample-app/launch.html?launch=eyJhIjoiMSIsImIiOiIxIiwiZSI6IjMiLCJmIjoiMSJ9&iss=http://localhost:4013/v/r4/fhir";
  //appUrl4 = "http://localhost:4300/launch?launch=eyJhIjoiMSIsImIiOiIxIiwiZSI6IjMiLCJmIjoiMSJ9&iss=http://localhost:4013/v/r4/fhir";
  //appUrl4 = "http://localhost:8080/sample-app2/launch.html?launch=eyJhIjoiMSIsImIiOiIxODEiLCJlIjoiMjIwNyIsImYiOiIxIn0&iss=http://localhost:4013/v/r4/fhir";
  
  /*
  patient 181
  provider 2207
  {"a":"1","b":"181","e":"2207","f":"1"}
  eyJhIjoiMSIsImIiOiIxODEiLCJlIjoiMjIwNyIsImYiOiIxIn0
  */

  showWindowOne = true;
  showWindowTwo = false;
  showWindowThree = false;
  showWindowFour = false;

  //constructor(private patientService: PatientService, private sanitizer:DomSanitizer) {}

  xngOnInit(): void {
    /*
    console.log("DashboardComponent");
    this.ehrService.getEHR().subscribe((data: any[])=>{
      console.log(data);
      //this.products = data;
    })  */


    //this.appUrl1 = this.sanitizer.sanitize(this, this.appUrl1);
    //SafeUrl trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.app1);
    //this.getPatient();
  }

  getPatient(): void {
    //this.patientService.getPatient()
        //.subscribe(patient => this.patient = patient);
  }

  startFirstApp()
  {
    this.showWindowOne = true;
    this.showWindowTwo = false;
    this.showWindowThree = false;
    this.showWindowFour = false;
  }

  startSecondApp()
  {
    this.showWindowOne = false;
    this.showWindowTwo = true;
    this.showWindowThree = false;
    this.showWindowFour = false;
  }

  startThirdApp()
  {
    this.showWindowOne = false;
    this.showWindowTwo = false;
    this.showWindowThree = true;
    this.showWindowFour = false;
  }

  startFourthApp()
  {
    this.showWindowOne = false;
    this.showWindowTwo = false;
    this.showWindowThree = false;
    this.showWindowFour = true;
  }

}
