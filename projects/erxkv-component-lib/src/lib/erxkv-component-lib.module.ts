import { NgModule } from '@angular/core';
import { ErxkvComponentLibComponent } from './erxkv-component-lib.component';
import { TestButtonComponent } from './test-button/test-button.component';

@NgModule({
  declarations: [
    ErxkvComponentLibComponent,
    TestButtonComponent
  ],
  imports: [
  ],
  exports: [
    ErxkvComponentLibComponent,
    TestButtonComponent
  ]
})
export class ErxkvComponentLibModule { }
