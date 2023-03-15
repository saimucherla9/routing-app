import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamsDynamicComponent } from './params-dynamic.component';

describe('ParamsDynamicComponent', () => {
  let component: ParamsDynamicComponent;
  let fixture: ComponentFixture<ParamsDynamicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParamsDynamicComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParamsDynamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
