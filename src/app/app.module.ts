import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LauncherComponent } from './launcher/launcher.component';

import { SafePipe } from './safe.pipe';
import { LabComponent } from './lab/lab.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { JournalComponent } from './journal/journal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SaksbehandlingComponent } from './saksbehandling/saksbehandling.component';
import { ActionsComponent } from './actions/actions.component';
import { MedicationComponent } from './medication/medication.component';
import { ReferalComponent } from './referal/referal.component';
import { RequisitionComponent } from './requisition/requisition.component';
import { CalendarComponent } from './calendar/calendar.component';
import { KJComponent } from './kj/kj.component';

@NgModule({
  declarations: [
    AppComponent,
    LauncherComponent,
    SafePipe,
    LabComponent,
    ConsultationComponent,
    JournalComponent,
    DashboardComponent,
    SaksbehandlingComponent,
    ActionsComponent,
    MedicationComponent,
    ReferalComponent,
    RequisitionComponent,
    CalendarComponent,
    KJComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
