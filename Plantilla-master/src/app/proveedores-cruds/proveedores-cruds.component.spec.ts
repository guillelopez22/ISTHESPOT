import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProveedoresCrudsComponent } from './proveedores-cruds.component';

describe('ProveedoresCrudsComponent', () => {
  let component: ProveedoresCrudsComponent;
  let fixture: ComponentFixture<ProveedoresCrudsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProveedoresCrudsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProveedoresCrudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
