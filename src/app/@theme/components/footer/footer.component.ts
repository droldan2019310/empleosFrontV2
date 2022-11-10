import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created with  by <b>Davis Roldan</b> 2019
    </span>
    <div class="socials">
      <a href="https://github.com/droldan2019310/empleosFront" target="_blank" class="ion ion-social-github"></a>
    </div>
  `,
})
export class FooterComponent {
}
