import { DevRegisterService } from './services/dev-register.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ds-challenge';

  constructor(private service: DevRegisterService) {}
}
