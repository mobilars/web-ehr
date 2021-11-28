import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LauncherComponent } from './launcher/launcher.component';

import { SafePipe } from './safe.pipe';
import { LabComponent } from './lab/lab.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { JournalComponent } from './journal/journal.component';

@NgModule({
  declarations: [
    AppComponent,
    LauncherComponent,
    SafePipe,
    LabComponent,
    ConsultationComponent,
    JournalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
