import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BebidasCrudsComponent } from './bebidas-cruds.component';

describe('BebidasCrudsComponent', () => {
  let component: BebidasCrudsComponent;
  let fixture: ComponentFixture<BebidasCrudsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BebidasCrudsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BebidasCrudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
