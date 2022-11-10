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
import { MyProfileComponent } from './my-profile.component';
import { ProfilePreviewComponent } from './profile-preview/profile-preview.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';

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
    MyProfileComponent,
    ProfilePreviewComponent,
    UpdateProfileComponent
  ],
})
export class MyProfileModule { }
