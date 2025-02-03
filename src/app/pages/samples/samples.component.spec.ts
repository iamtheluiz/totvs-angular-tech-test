import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamplesComponent } from './samples.component';
import { SelectComponent } from '../../components/select/select.component';
import { SwitchComponent } from '../../components/switch/switch.component';
import { FormsModule } from '@angular/forms';

describe('SamplesComponent', () => {
  let component: SamplesComponent;
  let fixture: ComponentFixture<SamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SamplesComponent,
        SelectComponent,
        SwitchComponent
      ],
      imports: [
        FormsModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
