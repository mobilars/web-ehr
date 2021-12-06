import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaksbehandlingComponent } from './saksbehandling.component';

describe('SaksbehandlingComponent', () => {
  let component: SaksbehandlingComponent;
  let fixture: ComponentFixture<SaksbehandlingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaksbehandlingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaksbehandlingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
