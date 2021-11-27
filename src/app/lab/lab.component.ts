import { Component, OnInit } from '@angular/core';
import { OpenehrService } from '../openehr.service';

import { Labdata } from '../../labdata';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.css']
})
export class LabComponent implements OnInit {

  constructor(private ehrService: OpenehrService) { }
   
  labData:Labdata = {
    q: "",
    columns: [{}],
    rows: [] 
  };
  ehr = {};

  ngOnInit(): void {

    this.ehrService.getEHR().subscribe((data: {}) => {
      this.ehr = data;
    })

    this.ehrService.getLabData().subscribe((data: {}) => {
      this.labData = <Labdata>data;
    })
  }

}
