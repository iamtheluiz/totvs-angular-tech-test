import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display placeholder', () => {
    const placeholder = "Ex: Input Value";

    component.placeholder = placeholder;

    fixture.detectChanges();

    const inputElement = component.inputElement.nativeElement as HTMLInputElement;

    expect(inputElement.getAttribute("placeholder")).toBe(placeholder);
  });

  it('should display label', () => {
    const label = "Input Label";

    component.label = label;

    fixture.detectChanges();

    const inputElement = component.inputElement.nativeElement as HTMLInputElement;
    const parentElement = inputElement.parentElement;
    const labelElement = parentElement?.querySelector("label");

    expect(labelElement).toBeTruthy();
    expect(labelElement?.innerText).toBe(label);
  });

  it('should disable the input', () => {
    component.disabled = true;

    fixture.detectChanges();

    const inputElement = component.inputElement.nativeElement as HTMLInputElement;

    expect(inputElement.disabled).toBeTrue();
  });

  it('should call onTouched when input loses focus', () => {
    const onTouchedSpy = spyOn(component, "onTouched").and.callThrough();

    const inputElement = component.inputElement.nativeElement as HTMLInputElement;
    inputElement.dispatchEvent(new Event("blur"));

    expect(onTouchedSpy).toHaveBeenCalled();
  });

  it('should change value', () => {
    const value = "Input Value";

    const inputElement = component.inputElement.nativeElement as HTMLInputElement;
    inputElement.value = value;
    inputElement.dispatchEvent(new Event("change"));

    expect(component.value).toBe(value);
  });
});
