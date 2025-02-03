import { Component } from '@angular/core';
import { SelectOption } from '../../components/select/select-option';

@Component({
  selector: 'app-samples',
  standalone: false,

  templateUrl: './samples.component.html',
  styleUrl: './samples.component.scss'
})
export class SamplesComponent {
  selectedOption = "option1";
  
  options: Array<SelectOption> = [
    {
      label: 'Option 1',
      value: 'option1'
    },
    {
      label: 'Option 2',
      value: 'option2'
    }
  ]
}
