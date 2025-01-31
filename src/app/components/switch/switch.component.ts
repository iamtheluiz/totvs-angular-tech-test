import { Component, ElementRef, EventEmitter, forwardRef, Input, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-switch',
  standalone: false,
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitchComponent),
      multi: true
    }
  ]
})
export class SwitchComponent implements ControlValueAccessor {
  @Input() checked = false;
  @Input() disabled = false;

  @Output() checkedChange = new EventEmitter<boolean>();

  @ViewChild('switch', { read: ElementRef, static: true}) switchElement: any;

  onChange: (value: boolean) => void = () => { };
  onTouched = () => { };

  writeValue(value: any): void {
    this.checked = value;
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

  handleSwitchToggle() {
    if (this.disabled) return;

    const newValue = !this.checked;

    this.writeValue(newValue);
    this.onChange(newValue);
    this.checkedChange.emit(newValue);
    this.onTouched();
  }

  handleKeyDown(event: Event) {
    if (!(event instanceof KeyboardEvent)) return;

    if (event.code === "Space") {
      this.handleSwitchToggle();
    }
  }
}
