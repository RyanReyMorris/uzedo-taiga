/**
 * Данный файл предназначен для того, чтобы не городить логику локализации в app.component.ts.
 */
import {HttpClient} from "@angular/common/http";
import {MissingTranslationHandler, MissingTranslationHandlerParams, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

/**
 * Загрузчик файлов локализации.
 * @param http HttpClient
 * @constructor
 */
export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http, '/assets/i18n/', '.json');
}

/**
 * Класс-наследник MissingTranslationHandler.
 * Необходим для вывода ошибки в лог, если не вышло найти указанную локализацию.
 */
export class MissingTranslationService implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    return `WARN: '${params.key}' is missing in '${params.translateService.currentLang}' locale`;
  }
}

