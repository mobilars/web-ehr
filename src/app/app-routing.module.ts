import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LauncherComponent } from './launcher/launcher.component';
import { LabComponent } from './lab/lab.component';

const routes: Routes = [
  { path: '', redirectTo: '/launcher', pathMatch: 'full' },
  { path: 'launcher', component: LauncherComponent },
  { path: 'lab', component: LabComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
