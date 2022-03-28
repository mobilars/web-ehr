import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { JournalData } from '../journaldata';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OpenehrService {

  ehrId = "cc61c5d5-96ff-48f5-97a4-afa54a1124bf";
  accessToken = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJHd0x6eHRuVFBENEVFTDNxVEpFMVUtQjkzdW92b28xNjZoSXhxUHgwNnlJIn0.eyJleHAiOjE2NDg0ODUyMzQsImlhdCI6MTY0ODQ0OTIzNCwiYXV0aF90aW1lIjoxNjQ4NDQ5MjM0LCJqdGkiOiI2NzFkNWZkZi0wMTU5LTRiYWUtYTNjNC1iZGE0OGU5NzhhYTciLCJpc3MiOiJodHRwOi8vMTcyLjE3LjI0Ljk6MzIwNDcvcmVhbG1zL2VocmJhc2UiLCJhdWQiOiJhY2NvdW50Iiwic3ViIjoiYmZmZDdhMzItM2FiNy00ODczLWE4MjYtMjEwZWMyMDBmMTFhIiwidHlwIjoiQmVhcmVyIiwiYXpwIjoid2ViZWhyIiwibm9uY2UiOiI3LVRCWXViMXNXeFdkb19HQ19PLUVsSE53R1ZRbHd5VnBQdUpRbTdTWFdRIiwic2Vzc2lvbl9zdGF0ZSI6IjExZWIxODcwLTU3MGQtNGU4OC1hNTIyLWE1YjBlM2RjZGQwNSIsImFjciI6IjEiLCJhbGxvd2VkLW9yaWdpbnMiOlsiaHR0cHM6Ly9vYXV0aC50b29scy8iLCJodHRwOi8vbG9jYWxob3N0OjQyMDAvKiIsImh0dHA6Ly8xNzIuMTcuMjQuOSJdLCJyZWFsbV9hY2Nlc3MiOnsicm9sZXMiOlsiZGVmYXVsdC1yb2xlcy1laHJiYXNlIiwib2ZmbGluZV9hY2Nlc3MiLCJ1bWFfYXV0aG9yaXphdGlvbiJdfSwicmVzb3VyY2VfYWNjZXNzIjp7ImFjY291bnQiOnsicm9sZXMiOlsibWFuYWdlLWFjY291bnQiLCJtYW5hZ2UtYWNjb3VudC1saW5rcyIsInZpZXctcHJvZmlsZSJdfX0sInNjb3BlIjoib3BlbmlkIHBhdGllbnRfaWQgb3JnYW5pemF0aW9uX2lkIHByb2ZpbGUgZW1haWwgcmVhZCIsInNpZCI6IjExZWIxODcwLTU3MGQtNGU4OC1hNTIyLWE1YjBlM2RjZGQwNSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwYXRpZW50X2lkIjoicGF0MSIsIm9yZ2FuaXphdGlvbl9pZCI6IkxlZ2Vrb250b3JldCIsIm5hbWUiOiJMYXJzIEtyaXN0aWFuIFJvbGFuZCIsInByZWZlcnJlZF91c2VybmFtZSI6ImxhcnMiLCJnaXZlbl9uYW1lIjoiTGFycyBLcmlzdGlhbiIsImZhbWlseV9uYW1lIjoiUm9sYW5kIiwiZW1haWwiOiJsYXJzQHJvbGFuZC5ieiJ9.Alf9bsfRzEzpFfsca4_jKfgrxEPbCAsVexSvyDfaLZIdAijSz9WxPtZy3H-ApVgPpemr8MKSmBhMe8pDH13NL77vILaouGk6DneOtM6Cv6ktJuCsuDcWiccqmXdTetuIsAAjWH9pY0wrzR4wa1bmyS68EWPTzDYpKAEFyLx6XAc_RLg1WnTo4hVf15rUKuoF51_bh5_JqGXMkNVpn5VE8OgFtvq8eL9Zp8gvuqyeql-CAS2jePcFGecUN3E4dminVsOYam1iT7flcNtoSUftwAL3kSRbtwEokDv3VjIf18S7ucYcHwjyeH-8_FhP4Jo9ZQjmbTHOQ_JNJKjZ7EgIXA";
  private ehrApiUrl = "/ehrbase/rest/openehr/v1/ehr/";
  private aqlApiUrl = "/ehrbase/rest/openehr/v1/query/aql";
  private postConsultationNoteUrl = "/ehrbase/rest/ecis/v1/composition/?format=FLAT";

  
  constructor(private httpClient: HttpClient) { }

  public getEHR(){
    var headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.accessToken });
    return this.httpClient.get(this.ehrApiUrl+this.ehrId, { headers: headers, withCredentials: true});
  }

  public getLabData() {
    var headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.accessToken });
    var postData = {
      "q": "select c/content[openEHR-EHR-OBSERVATION.blood_pressure.v2]/data[at0001]/origin/value as date, c/content[openEHR-EHR-OBSERVATION.blood_pressure.v2]/data[at0001]/events[at0006]/data[at0003]/items[at0004]/value/magnitude as systolic, c/content[openEHR-EHR-OBSERVATION.blood_pressure.v2]/data[at0001]/events[at0006]/data[at0003]/items[at0005]/value/magnitude as diastolic  from ehr e contains composition c [openEHR-EHR-COMPOSITION.encounter.v1] where e/ehr_id/value='"+this.ehrId+"'"
    };

    return this.httpClient.post(this.aqlApiUrl, postData, { headers: headers, withCredentials: true} );
  }

  public getJournalData() {
    var headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.accessToken });
    var postData = {
      "q": "select e/ehr_id/value, c/uid/value, c/archetype_details/template_id/value, c/feeder_audit, c/context/start_time/value as date, c/content[openEHR-EHR-OBSERVATION.story.v1]/data[at0001]/events[at0002]/data[at0003]/items[at0004]/value/value as note, c/content[openEHR-EHR-OBSERVATION.blood_pressure.v2]/data[at0001]/events[at0006]/data[at0003]/items[at0004]/value/magnitude as systolic, c/content[openEHR-EHR-OBSERVATION.blood_pressure.v2]/data[at0001]/events[at0006]/data[at0003]/items[at0005]/value/magnitude as diastolic  from ehr e contains composition c [openEHR-EHR-COMPOSITION.encounter.v1] where e/ehr_id/value='"+this.ehrId+"' ORDER by c/context/start_time/value DESC"
    };

    return this.httpClient.post(this.aqlApiUrl, postData, { headers: headers, withCredentials: true} );
  }

  public postConsultationNote(postData:any)
  {
    var templateId = "ClinicalContact";
    var url = this.postConsultationNoteUrl+"&ehrId="+this.ehrId+"&templateId="+templateId;
    var headers = new HttpHeaders({'Content-Type': 'application/json', 'Authorization': 'Bearer '+this.accessToken });
    return this.httpClient.post(url, postData, { headers: headers, withCredentials: true} );
  }


}
