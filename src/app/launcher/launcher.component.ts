import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-launcher',
  templateUrl: './launcher.component.html',
  styleUrls: ['./launcher.component.css']
})
export class LauncherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  appUrl1 = "https://launch.smarthealthit.org/launcher?launch_uri=https%3A%2F%2Fexamples.smarthealthit.org%2Fgrowth-chart-app%2Flaunch.html&patient=smart-1482713%2Csmart-7777703%2Csmart-7777705%2Csmart-7777701%2Csmart-7777704%2Csmart-99912345%2Csmart-7777702&fhir_ver=2";//http://localhost:4300/launch?launch=eyJhIjoiMSIsImIiOiIxIiwiZSI6IjMiLCJmIjoiMSJ9&iss=http://localhost:4013/v/r4/fhir&redirectUri=/main";
  appUrl2 = "";//"http://localhost:4013/sample-app/launch.html?launch=eyJhIjoiMSIsImIiOiIxIiwiZSI6IjMiLCJmIjoiMSJ9&iss=http://localhost:4013/v/r4/fhir";
  appUrl3 = "";
  appUrl4 = "";
  
  
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
    console.log("DashboardComponent");
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
