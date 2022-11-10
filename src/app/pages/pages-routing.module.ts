import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AvailableEmployeeComponent } from './available-employee/available-employee.component';
import { AddEmploymentComponent } from './add-employment/add-employment.component';
import { MyEmployeeComponent } from './my-employee/my-employee.component';
import { MyProfileComponent } from './my-profile/my-profile.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path:'employments',
      component: AvailableEmployeeComponent
    },
    {
      path:'employments/add',
      component:AddEmploymentComponent
    },
    {
      path:'myEmployments',
      component:MyEmployeeComponent
    },
    {
      path: 'myAccount',
      component:MyProfileComponent
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
  
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
   
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
