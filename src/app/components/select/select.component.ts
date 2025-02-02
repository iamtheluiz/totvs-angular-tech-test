import { Component, ElementRef, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { SelectOption, SelectOptionValue } from './select-option';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-select',
  standalone: false,
  templateUrl: './select.component.html',
  styleUrl: './select.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    }
  ]
})
export class SelectComponent implements ControlValueAccessor {
  @Input() name = "";
  @Input() placeholder = "";
  @Input() disabled = false;
  @Input() error?: boolean = false;
  @Input() options: Array<SelectOption> = [];
  @Input() label = "";

  @ViewChild('select', { read: ElementRef, static: true }) selectElement: any;

  selectedValue?: SelectOptionValue;

  onChange: (value: SelectOptionValue | null) => void = () => { }
  onTouched: () => void = () => { }

  writeValue(value: any) {
    this.selectedValue = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled
  }

  handleSelectChange(event: Event) {
    const newSelectedValue = (event.target as HTMLSelectElement).value;

    this.selectedValue = newSelectedValue;
    this.writeValue(newSelectedValue);
    this.onChange(newSelectedValue);
    this.onTouched();
  }
}
