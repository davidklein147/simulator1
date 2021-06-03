import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MienComponent } from './mien.component';

describe('MienComponent', () => {
  let component: MienComponent;
  let fixture: ComponentFixture<MienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
