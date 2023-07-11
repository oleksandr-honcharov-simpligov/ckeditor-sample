import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import SourceEditing from "@ckeditor/ckeditor5-source-editing/src/sourceediting";

ClassicEditor
    .create(document.querySelector( '#editor' ), {
        plugins: [ Essentials, Paragraph, Bold, Italic, SourceEditing ],
        toolbar: [ 'bold', 'italic', 'sourceEditing', ]
    } )
    .then((editor) => {
        console.log( 'Editor was initialized', editor );
        setTimeout(() => {
            console.log(123);
            editor.destroy()
        }, 5000)
    } )
    .catch((error) => {
        console.error( error.stack );
    } );
