import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioCrudsComponent } from './usuario-cruds.component';

describe('UsuarioCrudsComponent', () => {
  let component: UsuarioCrudsComponent;
  let fixture: ComponentFixture<UsuarioCrudsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsuarioCrudsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioCrudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
