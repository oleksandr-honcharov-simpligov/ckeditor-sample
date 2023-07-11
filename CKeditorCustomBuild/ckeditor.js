import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';
import SourceEditing from '@ckeditor/ckeditor5-source-editing/src/sourceediting';
import Essentials from "@ckeditor/ckeditor5-essentials/src/essentials";
import Bold from "@ckeditor/ckeditor5-basic-styles/src/bold";
import Italic from "@ckeditor/ckeditor5-basic-styles/src/italic";

export default class ClassicEditor extends ClassicEditorBase {
}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
  Essentials,
  SourceEditing,
  Bold,
  Italic,
];

// Editor configuration.
ClassicEditor.defaultConfig = {
  ...ClassicEditor.defaultConfig,
  toolbar: {
    items: [
      'bold',
      'italic',
      'sourceEditing',
    ]
  },
  // This value must be kept in sync with the language defined in webpack.config.js.
  language: 'en'
};
