import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home.component";
import {TranslateModule} from "@ngx-translate/core";
import {RouterModule} from "@angular/router";
import {ComponentsModule} from "../components/components.module";
import {HomeRoutingModule} from "./home-routing.module";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    ComponentsModule,
    HomeRoutingModule
  ]
})
export class HomeModule {
}
