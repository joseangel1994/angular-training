import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecipeTemplateDrivenComponent } from './add-recipe-template-driven.component';

describe('AddRecipeTemplateDrivenComponent', () => {
  let component: AddRecipeTemplateDrivenComponent;
  let fixture: ComponentFixture<AddRecipeTemplateDrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRecipeTemplateDrivenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRecipeTemplateDrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
