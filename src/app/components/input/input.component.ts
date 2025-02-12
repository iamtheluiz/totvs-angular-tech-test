import { Component, ElementRef, forwardRef, Input, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: false,
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @Input() disabled = false;
  @Input() placeholder = "";
  @Input() label = "";
  @Input() id = "";

  @ViewChild('input', { read: ElementRef, static: true }) inputElement: any;

  value = "";

  onChange = (value: string) => { };
  onTouched = () => { };

  ngOnInit(): void {
    const randomId = Date.now();

    this.id = `input-${randomId}`;
  }

  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  handleInputChange(event: Event) {
    const value = (event.target as HTMLInputElement).value;

    this.writeValue(value);
    this.onChange(value);
    this.onTouched();
  }
}
