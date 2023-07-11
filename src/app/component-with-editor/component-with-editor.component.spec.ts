import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentWithEditorComponent } from './component-with-editor.component';

describe('ComponentWithEditorComponent', () => {
  let component: ComponentWithEditorComponent;
  let fixture: ComponentFixture<ComponentWithEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentWithEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentWithEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
