import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditCitasComponent } from './add-edit-citas.component';

describe('AddEditCitasComponent', () => {
  let component: AddEditCitasComponent;
  let fixture: ComponentFixture<AddEditCitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditCitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
