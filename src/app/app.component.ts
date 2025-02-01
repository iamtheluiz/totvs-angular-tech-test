import { Component } from '@angular/core';
import { SelectOption, SelectOptionValue } from './components/select/select-option';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  disabled = false;

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

  /* Reactive Form Definitions */
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

  statusForm = new FormGroup({
    state: new FormControl('', [
      Validators.required,
      Validators.minLength(1)
    ]
    ),
    active: new FormControl(false)
  }, {
    updateOn: "blur"
  });

  get state() {
    return this.statusForm.get('state');
  }

  submittedReactiveFormValues: any;

  handleSubmitForm() {
    if (this.statusForm.valid) {
      this.submittedReactiveFormValues = this.statusForm.value;
    } else {
      this.statusForm.markAllAsTouched();
    }
  }

  /* Select Component ngModel Definitions */
  genre?: SelectOptionValue;
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

  /* Switch Component ngModel Definition */
  autoPlay = false;

  /* Switch Component Event Definitions */
  randomOrder = false;

  handleRandomOrdemChange(value: boolean) {
    this.randomOrder = value;
  }
}
