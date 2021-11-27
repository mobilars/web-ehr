import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Labdata } from '../labdata';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OpenehrService {

  ehrId = "7f3d15cb-1504-4ab4-9767-cb908a477483";
  private ehrApiUrl = "http://localhost/ehrbase/rest/openehr/v1/ehr/";
  private aqlApiUrl = "http://localhost/lab/ehrbase/rest/openehr/v1/query/aql";

  constructor(private httpClient: HttpClient) { }

  public getEHR(){
    var headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Basic '+btoa("user:secret") });
    return this.httpClient.get(this.ehrApiUrl+this.ehrId, { headers: headers, withCredentials: true});
  }

  public getLabData() {
    var headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Basic '+btoa("user:secret") } );
    var postData = {
      "q": "select c/content[openEHR-EHR-OBSERVATION.blood_pressure.v2]/data[at0001]/origin/value as date, c/content[openEHR-EHR-OBSERVATION.blood_pressure.v2]/data[at0001]/events[at0006]/data[at0003]/items[at0004]/value/magnitude as systolic,   c/content[openEHR-EHR-OBSERVATION.blood_pressure.v2]/data[at0001]/events[at0006]/data[at0003]/items[at0005]/value/magnitude as diastolic from ehr e contains composition c [openEHR-EHR-COMPOSITION.encounter.v1] where e/ehr_id/value='7f3d15cb-1504-4ab4-9767-cb908a477483'"
    };
    return this.httpClient.post(this.aqlApiUrl, postData, { headers: headers, withCredentials: true} );
  }

  getHttpHeaders()
  {

  }

}
