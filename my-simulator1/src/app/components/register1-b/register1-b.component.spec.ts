import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Register1BComponent } from './register1-b.component';

describe('Register1BComponent', () => {
  let component: Register1BComponent;
  let fixture: ComponentFixture<Register1BComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Register1BComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Register1BComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
