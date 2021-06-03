import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternCodeComponent } from './intern-code.component';

describe('InternCodeComponent', () => {
  let component: InternCodeComponent;
  let fixture: ComponentFixture<InternCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
