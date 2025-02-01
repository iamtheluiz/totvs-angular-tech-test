import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchComponent } from './switch.component';

describe('SwitchComponent', () => {
  let component: SwitchComponent;
  let fixture: ComponentFixture<SwitchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwitchComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set "aria-checked" attribute', () => {
    component.checked = true;

    fixture.detectChanges();

    const switchElement = component.switchElement.nativeElement as HTMLDivElement;

    expect(switchElement.getAttribute("aria-checked")).toBe("true");
  })

  it('should set "aria-disabled" attribute', () => {
    component.disabled = true;

    fixture.detectChanges();

    const switchElement = component.switchElement.nativeElement as HTMLDivElement;

    expect(switchElement.getAttribute("aria-disabled")).toBe("true");
  })

  it('should ignore "Enter" keydown code', () => {
    const spaceKeydownEvent = new KeyboardEvent('keydown', {
      key: ' ',
      code: 'Enter'
    });
    const handleSwitchToggleSpy = spyOn(component, 'handleSwitchToggle').and.callThrough();

    component.checked = false;
    component.handleKeyDown(spaceKeydownEvent);

    fixture.detectChanges();

    expect(handleSwitchToggleSpy).not.toHaveBeenCalled();
    expect(component.checked).toBe(false);
  })

  it('should receive "Space" keydown code and set "checked" to true', () => {
    const spaceKeydownEvent = new KeyboardEvent('keydown', {
      key: ' ',
      code: 'Space'
    });
    const handleSwitchToggleSpy = spyOn(component, 'handleSwitchToggle').and.callThrough();

    component.checked = false;
    component.handleKeyDown(spaceKeydownEvent);

    fixture.detectChanges();

    expect(handleSwitchToggleSpy).toHaveBeenCalled();
    expect(component.checked).toBe(true);
  })

  it('should not toggle checked value when disabled', () => {
    component.disabled = true;
    component.checked = false;
    const handleSwitchToggleSpy = spyOn(component, 'handleSwitchToggle').and.callThrough();

    const switchElement = component.switchElement.nativeElement as HTMLDivElement;
    
    switchElement.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(handleSwitchToggleSpy).toHaveBeenCalled();
    expect(component.checked).toBe(false);
  })

  it('should execute onTouched when the switch looses focus', () => {
    const onTouchedSpy = spyOn(component, "onTouched").and.callThrough();

    const switchElement = component.switchElement.nativeElement as HTMLDivElement;
    switchElement.dispatchEvent(new Event("blur"));

    expect(onTouchedSpy).toHaveBeenCalled();
  })

  it('should set tabindex to -1 when disabled', () => {
    component.disabled = true;

    fixture.detectChanges();

    const switchElement = component.switchElement.nativeElement as HTMLDivElement;
    
    expect(switchElement.getAttribute('tabindex')).toBe('-1');
  })
});
