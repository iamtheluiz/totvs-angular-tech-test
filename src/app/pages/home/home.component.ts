import { Component } from '@angular/core';
import { SelectOption, SelectOptionValue } from '../../components/select/select-option';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  disabled = false;
  genre?: SelectOptionValue;  // Select Component ngModel Definition
  autoPlay = false; // Switch Component ngModel Definition
  randomOrder = false;  // Switch Component Event Definition

  submittedReactiveFormValues: any; // Store the form values when the form is submitted

  readonly stateOptions: Array<SelectOption> = [
    {
      label: "São Paulo",
      value: "SP"
    },
    {
      label: "Rio de Janeiro",
      value: "RJ",
      disabled: true
    },
    {
      label: "Santa Catarina",
      value: "SC"
    }
  ]

  readonly genreOptions: Array<SelectOption> = [
    {
      label: "Ação",
      value: "action"
    },
    {
      label: "Aventura",
      value: "adventure"
    },
    {
      label: "Terror",
      value: "horror"
    }
  ]

  statusForm = new FormGroup({
    state: new FormControl('', [
      Validators.required,
      Validators.minLength(1)
    ]),
    active: new FormControl(false)
  }, {
    updateOn: "blur"
  });

  get state() {
    return this.statusForm.get('state');
  }

  handleSubmitForm() {
    if (this.statusForm.valid) {
      this.submittedReactiveFormValues = this.statusForm.value;
    } else {
      this.statusForm.markAllAsTouched();
    }
  }

  handleRandomOrdemChange(value: boolean) {
    this.randomOrder = value;
  }

  toggleDisabled() {
    const newDisabledValue = !this.disabled;

    this.disabled = newDisabledValue;

    if (newDisabledValue) {
      this.statusForm.get('state')?.disable();
      this.statusForm.get('active')?.disable();
    } else {
      this.statusForm.get('state')?.enable();
      this.statusForm.get('active')?.enable();
    }
  }
}
