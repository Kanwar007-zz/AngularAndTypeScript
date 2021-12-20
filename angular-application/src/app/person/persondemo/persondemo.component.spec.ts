import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersondemoComponent } from './persondemo.component';

describe('PersondemoComponent', () => {
  let component: PersondemoComponent;
  let fixture: ComponentFixture<PersondemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersondemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersondemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
