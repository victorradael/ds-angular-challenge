import { DevRegisterService } from '../../services/dev-register.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Dev } from 'src/app/models/dev.model';

@Component({
  selector: 'app-new-dev',
  templateUrl: './new-dev.component.html',
  styleUrls: ['./new-dev.component.scss'],
})
export class NewDevComponent {
  newDevForm!: FormGroup;

  constructor(
    private service: DevRegisterService,
    private formBuilder: FormBuilder
  ) {}
  @Output() toRegister = new EventEmitter<any>();

  registerNewDev() {
    if (this.newDevForm.valid) {
      const newDev = this.newDevForm.getRawValue() as Dev;
      this.service.addDev(newDev).subscribe(
        (result) => {
          console.log(result);
          window.location.reload();
        },
        (error) => console.log(error)
      );
    }
  }

  githubGetUserInfo() {
    const newDev = this.newDevForm.getRawValue() as Dev;
    this.service.githubAutomaticFilling(newDev?.githubUsername).subscribe(
      (result) => {
        this.newDevForm.setValue({
          githubUsername: '',
          avatarUrl: result.avatar_url,
          name: result.name,
          email: '',
          city: '',
          formation: '',
          techs: '',
        });
      },
      (error) => console.log(error)
    );
  }

  ngOnInit(): void {
    this.newDevForm = this.formBuilder.group({
      githubUsername: [''],
      avatarUrl: [''],
      name: ['', [Validators.required]],
      email: ['', [Validators.email]],
      city: [''],
      formation: [''],
      techs: ['', [Validators.required]],
    });
  }
}
