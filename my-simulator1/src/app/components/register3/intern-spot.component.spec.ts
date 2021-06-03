import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternSpotComponent } from './intern-spot.component';

describe('InternSpotComponent', () => {
  let component: InternSpotComponent;
  let fixture: ComponentFixture<InternSpotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InternSpotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InternSpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
