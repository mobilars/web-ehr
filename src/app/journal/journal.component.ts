import { Component, OnInit } from '@angular/core';
import { OpenehrService } from '../openehr.service';

import { Labdata } from '../../labdata';


@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {

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
