import { DevInfoComponent } from './dev-info.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevInfoRoutingModule } from './dev-info-routing.module';

@NgModule({
  declarations: [DevInfoComponent],
  imports: [CommonModule, DevInfoRoutingModule],
  exports: [DevInfoComponent],
})
export class DevInfoModule {}
