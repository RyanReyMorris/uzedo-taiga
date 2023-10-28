import {Injectable} from '@angular/core';
import {Subject} from "rxjs";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root',
})
export class LocaleService {

  /**
   * Выбранная локализация.
   */
  private selectedLocale: string;
  public selectedLocaleSubject: Subject<string> = new Subject<string>();

  /**
   * Все существующие локализации.
   */
  private locales: Array<string>;
  public localesSubject: Subject<Array<string>> = new Subject<Array<string>>();

  constructor(private translateService: TranslateService) {
    console.log('LocaleService')
    this.selectedLocaleSubject.subscribe((value) => {
      this.selectedLocale = value
    });
    this.localesSubject.subscribe((value) => {
      this.locales = value
    });
    this.localesSubject.next(['ru', 'en']);
    this.changeLocale('ru');
  }

  /**
   * Смена локализации приложения.
   * @param language - передаваемый язык: ru или en
   */
  public changeLocale(language: string): void {
    this.translateService.use(language);
    this.selectedLocaleSubject.next(language);
  }
}
