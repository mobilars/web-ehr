import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { JournalData } from '../journaldata';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OpenehrService {

  ehrId = "4a32b83a-c132-48f5-981c-86d1b50dd43e";
  private ehrApiUrl = "/ehrbase/rest/openehr/v1/ehr/";
  private aqlApiUrl = "/ehrbase/rest/openehr/v1/query/aql";
  private postConsultationNoteUrl = "/ehrbase/rest/ecis/v1/composition/?format=FLAT";

  constructor(private httpClient: HttpClient) { }

  public getEHR(){
    var headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Basic '+btoa("user:secret") });
    return this.httpClient.get(this.ehrApiUrl+this.ehrId, { headers: headers, withCredentials: true});
  }

  public getLabData() {
    var headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Basic '+btoa("user:secret") } );
    var postData = {
      "q": "select c/content[openEHR-EHR-OBSERVATION.blood_pressure.v2]/data[at0001]/origin/value as date, c/content[openEHR-EHR-OBSERVATION.blood_pressure.v2]/data[at0001]/events[at0006]/data[at0003]/items[at0004]/value/magnitude as systolic, c/content[openEHR-EHR-OBSERVATION.blood_pressure.v2]/data[at0001]/events[at0006]/data[at0003]/items[at0005]/value/magnitude as diastolic  from ehr e contains composition c [openEHR-EHR-COMPOSITION.encounter.v1] where e/ehr_id/value='"+this.ehrId+"'"
    };

    return this.httpClient.post(this.aqlApiUrl, postData, { headers: headers, withCredentials: true} );
  }

  public getJournalData() {
    var headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Basic '+btoa("user:secret") } );
    var postData = {
      "q": "select c/context/start_time/value as date, c/content[openEHR-EHR-OBSERVATION.story.v1]/data[at0001]/events[at0002]/data[at0003]/items[at0004]/value/value as note, c/content[openEHR-EHR-OBSERVATION.blood_pressure.v2]/data[at0001]/events[at0006]/data[at0003]/items[at0004]/value/magnitude as systolic, c/content[openEHR-EHR-OBSERVATION.blood_pressure.v2]/data[at0001]/events[at0006]/data[at0003]/items[at0005]/value/magnitude as diastolic  from ehr e contains composition c [openEHR-EHR-COMPOSITION.encounter.v1] where e/ehr_id/value='"+this.ehrId+"' ORDER by c/content[openEHR-EHR-OBSERVATION.blood_pressure.v2]/data[at0001]/origin/value  DESC"
    };

    return this.httpClient.post(this.aqlApiUrl, postData, { headers: headers, withCredentials: true} );
  }

  public postConsultationNote(postData:any)
  {
    var templateId = "ClinicalContact";
    var url = this.postConsultationNoteUrl+"&ehrId="+this.ehrId+"&templateId="+templateId;
    var headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Basic '+btoa("user:secret") } );
    return this.httpClient.post(url, postData, { headers: headers, withCredentials: true} );
  }


}
