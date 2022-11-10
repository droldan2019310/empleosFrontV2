import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService, NbRegisterComponent, NB_AUTH_OPTIONS } from '@nebular/auth';
import { RestCategoryService } from '../../services/restCategory/rest-category.service';
import { NotificationsService, NotificationType } from 'angular2-notifications';
import { configNotification } from '../../@core/data/ConfigNotification';

@Component({
  selector: 'ngx-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.scss']
})
export class RegisterComponentComponent extends NbRegisterComponent implements OnInit {

  public categories:[];
  ngOnInit(): void {
  }


  constructor(protected service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    protected cd: ChangeDetectorRef,
    protected router: Router, private restCategory:RestCategoryService, private notification:NotificationsService){
    super(service,options,cd,router);
    this.getCategories();
  }


  public getCategories(){
    this.restCategory.getCategories().subscribe((res:any)=>{
      if(res.category){
        this.categories = res.category;
      }else{
        this.notification.create("NO SE HAN ENCONTRADO CATEGORÍAS", "VUELVE A INTENTARLO",
        NotificationType.Info, configNotification);
      }
    }, error=>{
      this.notification.create("HA OCURRIDO UN ERROR", "VUELVE A INTENTARLO",
        NotificationType.Error, configNotification);
    })
  }
  

}
