import { SubsidiariesComponent } from './subsidiaries/subsidiaries.component';
import { ProjectsComponent } from './projects/projects.component';
import { CareersComponent } from './careers/careers.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    }, {
        path: 'aboutus',
        component: AboutusComponent
    }, {
        path: 'contactus',
        component: ContactusComponent
    }, {
        path: 'careers',
        component: CareersComponent
    }, {
        path: 'projects',
        component: ProjectsComponent
    }, {
        path: 'subsidiaries',
        component: SubsidiariesComponent
    }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
