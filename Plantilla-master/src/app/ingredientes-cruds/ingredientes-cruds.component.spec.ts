import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientesCrudsComponent } from './ingredientes-cruds.component';

describe('IngredientesCrudsComponent', () => {
  let component: IngredientesCrudsComponent;
  let fixture: ComponentFixture<IngredientesCrudsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientesCrudsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientesCrudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
