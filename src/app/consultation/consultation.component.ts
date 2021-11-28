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
  
  onSubmit(form: NgForm) {
    console.log(JSON.stringify(this.consultationNote));
    console.log("Note: "+this.consultationNote.text_note); 

    var postData = { 
      'ctx/time': new Date(),
      'ctx/language': 'nb',
      'ctx/territory': 'NO',
      'ctx/composer_name':'Dr. Dyregod',
      "klinisk_kontakt/blodtrykk/uspesifisert_hendelse/systolisk|magnitude" : this.consultationNote.bp_systolic,
      "klinisk_kontakt/blodtrykk/uspesifisert_hendelse/diastolisk|magnitude" : this.consultationNote.bp_diastolic,
      "klinisk_kontakt/anamnese/uspesifisert_hendelse/anamnese" : this.consultationNote.text_note
    };

    var postDatax = {
        "ctx/time": new Date(),
        "ctx/language": "en",
        "ctx/territory": "NO",
        "ctx/composer_name":"Sr. Kristen George",
          "encounter/blood_pressure/any_event/systolic|magnitude": this.consultationNote.bp_systolic,
          "encounter/blood_pressure/any_event/systolic|unit": "mm[Hg]",
          "encounter/blood_pressure/any_event/diastolic|magnitude": this.consultationNote.bp_diastolic,
          "encounter/blood_pressure/any_event/diastolic|unit": "mm[Hg]"
    };

    this.ehrService.postConsultationNote(postData).subscribe((data: {}) => {
      console.log("Data received on postConsultationNote: "+JSON.stringify(data));
    });
  }
}
