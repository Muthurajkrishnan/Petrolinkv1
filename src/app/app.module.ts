import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CareersComponent } from './careers/careers.component';
import { AdminComponent } from './admin/admin.component';
import { ProjectsComponent } from './projects/projects.component';
import { SubsidiariesComponent } from './subsidiaries/subsidiaries.component';
import { ManagejobsComponent } from './careers/managejobs/managejobs.component';
import { ApplyjobsComponent } from './careers/applyjobs/applyjobs.component';
import { ViewjobsComponent } from './careers/viewjobs/viewjobs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactusComponent,
    AboutusComponent,
    CareersComponent,
    AdminComponent,
    ProjectsComponent,
    SubsidiariesComponent,
    ManagejobsComponent,
    ApplyjobsComponent,
    ViewjobsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
