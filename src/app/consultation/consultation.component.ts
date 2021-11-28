import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OpenehrService } from '../openehr.service';
import { ConsultationNote } from './ConsultationNote';

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {

  constructor(private ehrService: OpenehrService) { }

  consultationNote = new ConsultationNote();

  ngOnInit(): void {
  }

  /*
    {
    "ctx/time": "2014-03-19T13:10:00.000Z",
    "ctx/language": "en",
    "ctx/territory": "NO",
    "ctx/composer_name":"Sr. Kristen George",
      "encounter/blood_pressure/any_event/systolic|magnitude": "115",
      "encounter/blood_pressure/any_event/systolic|unit": "mm[Hg]",
      "encounter/blood_pressure/any_event/diastolic|magnitude": "75",
      "encounter/blood_pressure/any_event/diastolic|unit": "mm[Hg]"
    }
  */

  onSubmit(form: NgForm) {
    console.log(JSON.stringify(this.consultationNote));
    console.log("Note: "+this.consultationNote.text_note);

    var postData = { 
        'ctx/time': new Date(),
        'ctx/language': 'nb',
        'ctx/territory': 'NO',
        'ctx/composer_name':'Dr. Dyregod',
        'encounter/blood_pressure/any_event/systolic|magnitude': this.consultationNote.bp_systolic,
        'encounter/blood_pressure/any_event/systolic|unit': "mm[Hg]",
        'encounter/blood_pressure/any_event/diastolic|magnitude': this.consultationNote.bp_diastolic,
        'encounter/blood_pressure/any_event/diastolic|unit': "mm[Hg]"
    };

    this.ehrService.postConsultationNote(postData).subscribe((data: {}) => {
      console.log("Data received on postConsultationNote: "+JSON.stringify(data));
    });
  }
}
