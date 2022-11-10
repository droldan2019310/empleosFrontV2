import { NgModule } from '@angular/core';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbTabsetModule,
  NbUserModule,
  NbRadioModule,
  NbSelectModule,
  NbListModule,
  NbIconModule,
} from '@nebular/theme';
import { NgxEchartsModule } from 'ngx-echarts';

import { ThemeModule } from '../../@theme/theme.module';
import { DashboardComponent } from './dashboard.component';

import { FormsModule } from '@angular/forms';
import { ProfilePreviewComponent } from './profile-preview/profile-preview.component';
import { LastEmployeeComponent } from './last-employee/last-employee.component';
import { MaterialExampleModule } from '../../material.module';

@NgModule({
  imports: [
    FormsModule,
    ThemeModule,
    NbCardModule,
    NbUserModule,
    NbButtonModule,
    NbTabsetModule,
    NbActionsModule,
    NbRadioModule,
    NbSelectModule,
    NbListModule,
    NbIconModule,
    NbButtonModule,
    NgxEchartsModule,
    MaterialExampleModule
  ],
  declarations: [
    DashboardComponent,
    
    ProfilePreviewComponent,
    LastEmployeeComponent,
  ],
})
export class DashboardModule { }
