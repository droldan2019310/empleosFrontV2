import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { NbAuthModule } from '@nebular/auth';
import { 
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule
} from '@nebular/theme';
import { MaterialExampleModule } from '../material.module';
import { NgxAuthRoutingModule } from './auth-routing.module';
import { LoginComponentComponent } from './login-component/login-component.component';
import { RegisterComponentComponent } from './register-component/register-component.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NgxAuthRoutingModule,
    ReactiveFormsModule,
    NbAuthModule,
    MaterialExampleModule,
  ],
  declarations: [
    // ... here goes our new components
    LoginComponentComponent,
    RegisterComponentComponent
  ],
})
export class NgxAuthModule {
}