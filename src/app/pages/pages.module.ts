import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AvailableEmployeeModule } from './available-employee/availableEmployee.module';
import { AddEmploymentModule } from './add-employment/addEmployment.module';
import { MyProfileModule } from './my-profile/myProfile.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MyEmployeeModule } from './my-employee/myemployee.module';

@NgModule({
  imports: [
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    AvailableEmployeeModule,
    AddEmploymentModule,
    MyProfileModule,
    PagesRoutingModule,
    MyEmployeeModule

  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
