/* tslint:disable max-line-length */
import {
  FileFormat,
  IFolderCollection,
} from '../models';

export const extensions: IFolderCollection = {
  default: {
    folder: { icon: 'folder', format: FileFormat.svg },
  },
  supported: [
    { icon: 'aurelia', extensions: ['aurelia_project'], format: FileFormat.svg },
    { icon: 'aws', extensions: ['aws', '.aws'], format: FileFormat.svg },
    { icon: 'bower', extensions: ['bower_components'], format: FileFormat.svg },
    { icon: 'css', extensions: ['css'], format: FileFormat.svg },
    { icon: 'dist', extensions: ['dist', 'out', 'export', 'build'], format: FileFormat.svg },
    { icon: 'docs', extensions: ['docs'], format: FileFormat.svg },
    { icon: 'elasticbeanstalk', extensions: ['.elasticbeanstalk', '.ebextensions'], format: FileFormat.svg },
    { icon: 'flow', extensions: ['flow'], format: FileFormat.svg },
    { icon: 'fonts', extensions: ['fonts', 'font', 'fnt'], light: true, format: FileFormat.svg },
    { icon: 'git', extensions: ['.github', '.git'], format: FileFormat.svg },
    { icon: 'haxelib', extensions: ['haxelib'], format: FileFormat.svg },
    { icon: 'js', extensions: ['js'], format: FileFormat.svg },
    { icon: 'idea', extensions: ['.idea'], format: FileFormat.svg },
    { icon: 'images', extensions: ['images', 'image', 'img', 'icons', 'icon', 'ico'], format: FileFormat.svg },
    { icon: 'less', extensions: ['less'], format: FileFormat.svg },
    { icon: 'locale', extensions: ['locale', 'locales', 'i18n', 'g11n'], format: FileFormat.svg },
    { icon: 'node', extensions: ['node_modules'], light: true, format: FileFormat.svg },
    { icon: 'nuget', extensions: ['.nuget'], format: FileFormat.svg },
    { icon: 'paket', extensions: ['.paket'], format: FileFormat.svg },
    { icon: 'meteor', extensions: ['.meteor'], light: true, format: FileFormat.svg },
    { icon: 'sass', extensions: ['sass', 'scss'], light: true, format: FileFormat.svg },
    { icon: 'script', extensions: ['script', 'scripts'], format: FileFormat.svg },
    { icon: 'src', extensions: ['src', 'source', 'sources'], format: FileFormat.svg },
    { icon: 'style', extensions: ['style', 'styles'], format: FileFormat.svg },
    { icon: 'test', extensions: ['tests', 'test', '__tests__', '__test__', 'spec', 'specs'], format: FileFormat.svg },
    { icon: 'typings', extensions: ['typings'], format: FileFormat.svg },
    { icon: 'typings2', extensions: ['typings'], format: FileFormat.svg, disabled: true },
    { icon: 'view', extensions: ['view', 'views'], format: FileFormat.svg },
    { icon: 'vs', extensions: ['.vs'], format: FileFormat.svg },
    { icon: 'vscode', extensions: ['.vscode'], format: FileFormat.svg },
    { icon: 'webpack', extensions: ['webpack'], format: FileFormat.svg },
  ],
};
