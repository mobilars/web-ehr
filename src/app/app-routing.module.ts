import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LauncherComponent } from './launcher/launcher.component';
import { LabComponent } from './lab/lab.component';
import { JournalComponent } from './journal/journal.component';

const routes: Routes = [
  { path: '', redirectTo: '/launcher', pathMatch: 'full' },
  { path: 'launcher', component: LauncherComponent },
  { path: 'lab', component: LabComponent },
  { path: 'journal', component: JournalComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
