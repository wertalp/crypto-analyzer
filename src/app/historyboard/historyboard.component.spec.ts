import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryboardComponent } from './historyboard.component';

describe('HistoryboardComponent', () => {
  let component: HistoryboardComponent;
  let fixture: ComponentFixture<HistoryboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
