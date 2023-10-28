import { Component } from '@angular/core';
import {LocaleService} from "./services/locale.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'uzedo-taiga';

  constructor(private localeService: LocaleService) {
    console.log('AppComponent')
  }
}
