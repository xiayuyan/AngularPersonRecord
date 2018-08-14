import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PRecordDisplayComponent } from './p-record-display.component';

describe('PRecordDisplayComponent', () => {
  let component: PRecordDisplayComponent;
  let fixture: ComponentFixture<PRecordDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PRecordDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PRecordDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
