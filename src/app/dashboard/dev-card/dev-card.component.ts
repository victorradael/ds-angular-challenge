import { DevRegisterService } from '../../services/dev-register.service';
import { Component, Input, OnInit } from '@angular/core';
import { Dev } from '../../models/dev.model';

@Component({
  selector: 'app-dev-card',
  templateUrl: './dev-card.component.html',
  styleUrls: ['./dev-card.component.scss'],
})
export class DevCardComponent implements OnInit {
  @Input() devs: any[] = [];

  constructor(private service: DevRegisterService) {}

  ngOnInit(): void {
    this.devs = this.service.devs;
    this.service.allDevs().subscribe((devsList: Dev[]) => {
      this.devs = devsList;
    });
  }
}
