import { Component, OnInit } from '@angular/core';
import { OpenehrService } from '../openehr.service';

import { JournalData } from '../../journaldata';


@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {

  constructor(private ehrService: OpenehrService) { }
   
  journalData:JournalData = {
    q: "",
    columns: [{}],
    rows: [] 
  };
  ehr = {};

  ngOnInit(): void {

    this.ehrService.getEHR().subscribe((data: {}) => {
      this.ehr = data;
    })

    this.ehrService.getJournalData().subscribe((data: {}) => {
      this.journalData = <JournalData>data;
    })
  }
}
