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

  }

  appList = [
    {id: 1, name: 'dashboard', show: true, url:'/dashboard'},
    {id: 2, name: 'saksbehandling', show: false, url:'/saksbehandling'},
    {id: 3, name: 'journal', show: false, url:'/journal'},
    {id: 4, name: 'actions', show: false, url:'/actions'},
    {id: 5, name: 'kj', show: false, url:'/kj'},
    {id: 6, name: 'medication', show: false, url:'/medication'},
    {id: 7, name: 'lab', show: false, url:'/lab'},
    {id: 8, name: 'referal', show: false, url:'/referal'},
    {id: 9, name: 'requisition', show: false, url:'/requisition'},
    {id: 10, name: 'calendar', show: false, url:'/calendar'},
    {id: 11, name: 'growth', show: false, url:'https://launch.smarthealthit.org/launcher?launch_uri=https%3A%2F%2Fexamples.smarthealthit.org%2Fgrowth-chart-app%2Flaunch.html&patient=smart-1482713%2Csmart-7777703%2Csmart-7777705%2Csmart-7777701%2Csmart-7777704%2Csmart-99912345%2Csmart-7777702&fhir_ver=2";//http://localhost:4300/launch?launch=eyJhIjoiMSIsImIiOiIxIiwiZSI6IjMiLCJmIjoiMSJ9&iss=http://localhost:4013/v/r4/fhir&redirectUri=/main'}
    ];

  getAppUrl(appName:string)
  {
    for (var j in this.appList) {
      if (this.appList[j].name === appName) {
        console.log("Returning appName "+ appName);
        return this.appList[j].url;
      }
    }
    return '';
  }

  getShowWindow(appName:string)
  {
    for (var j in this.appList) {
      if (this.appList[j].name === appName) {
        console.log("Returning appName "+ appName);
        return this.appList[j].show;
      }
    }
    return false;
  } 

  startApp(appName:string)
  {
    for (var j in this.appList) {
      this.appList[j].show = false;
    }
    for (var j in this.appList) {
      if (this.appList[j].name === appName) {
        console.log("Returning appName "+ appName);
        this.appList[j].show = true;
      }
    }
  }

  appUrl1 = "/dashboard.html";
  appUrl2 = "/lab";
  appUrl3 = "/journal";
  appUrl4 = "https://launch.smarthealthit.org/launcher?launch_uri=https%3A%2F%2Fexamples.smarthealthit.org%2Fgrowth-chart-app%2Flaunch.html&patient=smart-1482713%2Csmart-7777703%2Csmart-7777705%2Csmart-7777701%2Csmart-7777704%2Csmart-99912345%2Csmart-7777702&fhir_ver=2";//http://localhost:4300/launch?launch=eyJhIjoiMSIsImIiOiIxIiwiZSI6IjMiLCJmIjoiMSJ9&iss=http://localhost:4013/v/r4/fhir&redirectUri=/main";
  appUrl5 = "";//"http://localhost:4013/sample-app/launch.html?launch=eyJhIjoiMSIsImIiOiIxIiwiZSI6IjMiLCJmIjoiMSJ9&iss=http://localhost:4013/v/r4/fhir";

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

  getPatient(): void {
    /*
    this.ehrService.getEHR().subscribe((data: {}) => {
      this.ehr = data;
    })
    */
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
