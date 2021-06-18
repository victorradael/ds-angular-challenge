import { NewDevComponent } from './new-dev/new-dev.component';
import { DevCardComponent } from './dev-card/dev-card.component';
import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MessageComponent } from './message/message.component';
import { MessageModule } from './message/message.module';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [DashboardComponent, DevCardComponent, NewDevComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MessageModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'pt' }],
  exports: [DashboardComponent],
})
export class DashboardModule {}
