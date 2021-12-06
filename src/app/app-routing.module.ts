import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LauncherComponent } from './launcher/launcher.component';
import { LabComponent } from './lab/lab.component';
import { JournalComponent } from './journal/journal.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ActionsComponent } from './actions/actions.component';
import { CalendarComponent } from './calendar/calendar.component';
import { MedicationComponent } from './medication/medication.component';
import { ReferalComponent } from './referal/referal.component';
import { SaksbehandlingComponent } from './saksbehandling/saksbehandling.component';
import { RequisitionComponent } from './requisition/requisition.component';
import { KJComponent } from './kj/kj.component';

const routes: Routes = [
  { path: '', redirectTo: 'launcher', pathMatch: 'full' },
  { path: 'launcher', component: LauncherComponent },
  { path: 'lab', component: LabComponent },
  { path: 'journal', component: JournalComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'actions', component: ActionsComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'medication', component: MedicationComponent },
  { path: 'referal', component: ReferalComponent },
  { path: 'requisition', component: RequisitionComponent },
  { path: 'kj', component: KJComponent },
  { path: 'saksbehandling', component: SaksbehandlingComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
