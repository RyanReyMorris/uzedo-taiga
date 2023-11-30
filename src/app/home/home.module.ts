import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from "./home.component";
import {TranslateModule} from "@ngx-translate/core";
import {RouterModule} from "@angular/router";
import {ComponentsModule} from "../components/components.module";
import {HomeRoutingModule} from "./home-routing.module";
import {TuiAppBarModule} from "@taiga-ui/addon-mobile";
import {TuiButtonModule, TuiLabelModule, TuiSvgModule} from "@taiga-ui/core";
import {TuiTabsModule} from "@taiga-ui/kit";

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
    ComponentsModule,
    HomeRoutingModule,
    TuiAppBarModule,
    TuiButtonModule,
    TuiLabelModule,
    TuiSvgModule,
    TuiTabsModule
  ]
})
export class HomeModule {
}
