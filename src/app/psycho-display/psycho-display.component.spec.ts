import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychoDisplayComponent } from './psycho-display.component';

describe('PsychoDisplayComponent', () => {
  let component: PsychoDisplayComponent;
  let fixture: ComponentFixture<PsychoDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychoDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychoDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
