import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychoAddComponent } from './psycho-add.component';

describe('PsychoAddComponent', () => {
  let component: PsychoAddComponent;
  let fixture: ComponentFixture<PsychoAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychoAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
