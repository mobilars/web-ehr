import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KJComponent } from './kj.component';

describe('KJComponent', () => {
  let component: KJComponent;
  let fixture: ComponentFixture<KJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KJComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
