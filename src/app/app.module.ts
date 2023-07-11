import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import {RouterModule} from '@angular/router';
import { ComponentWithEditorComponent } from './component-with-editor/component-with-editor.component';
import { ComponentWithoutEditorComponent } from './component-without-editor/component-without-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentWithEditorComponent,
    ComponentWithoutEditorComponent
  ],
  imports: [
    BrowserModule,
    CKEditorModule,
    RouterModule.forRoot([
      {path: '', component: ComponentWithEditorComponent},
      {path: 'without-editor', component: ComponentWithoutEditorComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
