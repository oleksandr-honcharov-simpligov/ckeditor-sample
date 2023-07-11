import { Component } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// @ts-ignore
import * as CustomEditor from '../ckeditor.js';
import {Router} from '@angular/router';

@Component({
  selector: 'app-component-with-editor',
  templateUrl: './component-with-editor.component.html',
  styleUrls: ['./component-with-editor.component.css']
})
export class ComponentWithEditorComponent {
  CustomEditor = CustomEditor
  editor!: ClassicEditor;
  showEditor = true

  constructor(private router: Router) {
    /** to see first issue uncomment lines below */
    // setTimeout(() => {
      // this.editor.destroy().then(() => {
      //   this.showEditor = false
      // })
    // }, 5000)


    /** to see second issue:
     * 1 open source mode (click on source button), make some changes (write any text)
     * 2 click on "save" button. Wait (10-20 seconds)
     * P.S. Do not leave source edit mode
     */
  }

  onReady(editor: any){
    this.editor = editor
  }

  save(): void {
    const template = this.editor.getData();
    // this.editor.destroy().then(() => { // uncomment this line to see another error
      this.router.navigate(['without-editor'])
    // })

  }
}
