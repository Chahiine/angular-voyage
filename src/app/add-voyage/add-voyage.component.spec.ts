import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVoyageComponent } from './add-voyage.component';

describe('AddVoyageComponent', () => {
  let component: AddVoyageComponent;
  let fixture: ComponentFixture<AddVoyageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddVoyageComponent]
    });
    fixture = TestBed.createComponent(AddVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
