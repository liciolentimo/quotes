import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteshownComponent } from './quoteshown.component';

describe('QuoteshownComponent', () => {
  let component: QuoteshownComponent;
  let fixture: ComponentFixture<QuoteshownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteshownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteshownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
