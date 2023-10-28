import {NgModule} from '@angular/core';
import {NotFoundComponent} from "./not-found/not-found.component";
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [NotFoundComponent],
  imports: [TranslateModule],
  exports: []
})
export class ComponentsModule {
}
