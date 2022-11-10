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

import { FormsModule } from '@angular/forms';
import { MaterialExampleModule } from '../../material.module';
import { MyEmployeeComponent } from './my-employee.component';
import { MyEmploymentsComponent } from './my-employments/my-employments.component';

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
    MyEmployeeComponent,
    MyEmploymentsComponent,
    
  ],
})
export class MyEmployeeModule { }
