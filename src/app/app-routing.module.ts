import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberFormService } from '../services/member-form.service';
import { MemberComponent } from './member/member.component';
import { MemberFormComponent } from './member-form/member-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ToolsComponent } from './tools/tools.component';
import { ArticlesComponent } from './articles/articles.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'create',
    pathMatch:'full',
    component:MemberFormComponent,
  },
  {
    path:'member',
    pathMatch:'full',
    component:MemberComponent,
  },
   {
    path:':id/edit',
    pathMatch:'full',
    component:MemberFormComponent,
  },
  {path:'login',
    pathMatch:'full',
    component:LoginComponent,
  },

    {
    path:'dashboard',
    pathMatch:'full',
    component:DashboardComponent,
  },
    {
    path:'tools',
    pathMatch:'full',
    component:ToolsComponent,
  },
      {
    path:'articles',
    pathMatch:'full',
    component:ArticlesComponent,
  },
        {
    path:'events',
    pathMatch:'full',
    component:EventsComponent,
  },
    {
    path:'**',
    component:MemberComponent,
  },
  //programmer le path create ==> Member form
  // programmer le path "" ==> member
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
