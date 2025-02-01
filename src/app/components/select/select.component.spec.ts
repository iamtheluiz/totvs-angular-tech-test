import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { SelectComponent } from './select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectOption } from './select-option';

describe('SelectComponent', () => {
  let component: SelectComponent;
  let fixture: ComponentFixture<SelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display placeholder when no value is selected', () => {
    const placeholder = "Select a value";

    component.placeholder = placeholder;
    fixture.detectChanges();

    const selectElement = component.selectElement.nativeElement as HTMLSelectElement;

    expect(selectElement.options[0].text).toBe(placeholder);
    expect(selectElement.value).toBe('');
  })

  it('should display the options without a placeholder', () => {
    const options: Array<SelectOption> = [
      { label: "Fist", value: "1" },
      { label: "Second", value: "2" }
    ];

    component.options = options;
    fixture.detectChanges();

    const selectElement = component.selectElement.nativeElement as HTMLSelectElement;

    expect(selectElement.options.length).toBe(2);
    expect(selectElement.options[0].text).toBe(options[0].label);
    expect(selectElement.options[0].value).toBe(options[0].value.toString());
    expect(selectElement.options[1].text).toBe(options[1].label);
    expect(selectElement.options[1].value).toBe(options[1].value.toString());
  })

  it('should display the options with a placeholder', () => {
    const placeholder = "Select a value";
    const options: Array<SelectOption> = [
      { label: "Fist", value: "1" },
      { label: "Second", value: "2" }
    ];

    component.placeholder = placeholder;
    component.options = options;
    fixture.detectChanges();

    const selectElement = component.selectElement.nativeElement as HTMLSelectElement;

    expect(selectElement.options.length).toBe(3);
    expect(selectElement.options[0].text).toBe(placeholder);
    expect(selectElement.value).toBe('');
    expect(selectElement.options[1].text).toBe(options[0].label);
    expect(selectElement.options[1].value).toBe(options[0].value.toString());
    expect(selectElement.options[2].text).toBe(options[1].label);
    expect(selectElement.options[2].value).toBe(options[1].value.toString());
  })

  it('should select an option and emit its value', fakeAsync(() => {
    const options: Array<SelectOption> = [
      { label: "Fist", value: "1" },
      { label: "Second", value: "2" }
    ];
    let selectedValue: any;

    component.options = options;
    component.registerOnChange((value: any) => {
      selectedValue = value;
    });
    fixture.detectChanges();

    const selectElement = component.selectElement.nativeElement as HTMLSelectElement;
    selectElement.value = "2";
    selectElement.dispatchEvent(new Event('change'));
    tick();

    expect(selectedValue).toBe("2");
    expect(component.selectedValue).toBe("2");
  }))

  it('should disable the select component', () => {
    component.disabled = true;

    fixture.detectChanges();

    const selectElement = component.selectElement.nativeElement as HTMLSelectElement;

    expect(selectElement.disabled).toBe(true);
  })

  it('should set error class when error input is true', () => {
    component.error = true;

    fixture.detectChanges();

    const selectElement = component.selectElement.nativeElement as HTMLSelectElement;

    expect(selectElement.classList.contains("error")).toBe(true);
  })

  it('should execute onTouched when the select looses focus', () => {
    const onTouchedSpy = spyOn(component, "onTouched").and.callThrough();

    const selectElement = component.selectElement.nativeElement as HTMLSelectElement;
    selectElement.dispatchEvent(new Event("blur"));

    expect(onTouchedSpy).toHaveBeenCalled();
  })

  it('should set tabindex to -1 when disabled', () => {
    component.disabled = true;

    fixture.detectChanges();

    const switchElement = component.selectElement.nativeElement as HTMLDivElement;

    expect(switchElement.getAttribute('tabindex')).toBe('-1');
  })
});
