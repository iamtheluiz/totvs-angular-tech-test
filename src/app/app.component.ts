import { Component } from '@angular/core';
import { SelectOption, SelectOptionValue } from './components/select/select-option';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  disabled = false;
  error = false;

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

  statusForm = new FormGroup({
    state: new FormControl('action')
  })

  handleSubmitForm() {
    console.log(this.statusForm.value.state)
  }
  handleOnTouched() {
    console.log("salve!")
  }

  toggleDisabled() {
    this.disabled = !this.disabled;
  }

  toggleError() {
    this.error = !this.error;
  }
}
