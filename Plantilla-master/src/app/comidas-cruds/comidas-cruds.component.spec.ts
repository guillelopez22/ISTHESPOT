import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComidasCrudsComponent } from './comidas-cruds.component';

describe('ComidasCrudsComponent', () => {
  let component: ComidasCrudsComponent;
  let fixture: ComponentFixture<ComidasCrudsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComidasCrudsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComidasCrudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
