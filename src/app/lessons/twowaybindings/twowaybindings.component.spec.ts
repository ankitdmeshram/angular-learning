import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwowaybindingsComponent } from './twowaybindings.component';

describe('TwowaybindingsComponent', () => {
  let component: TwowaybindingsComponent;
  let fixture: ComponentFixture<TwowaybindingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwowaybindingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwowaybindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
