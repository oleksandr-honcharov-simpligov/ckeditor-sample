import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentWithoutEditorComponent } from './component-without-editor.component';

describe('ComponentWithoutEditorComponent', () => {
  let component: ComponentWithoutEditorComponent;
  let fixture: ComponentFixture<ComponentWithoutEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentWithoutEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentWithoutEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
