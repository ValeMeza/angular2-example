import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { enableProdMode } from '@angular/core';

//enableProdMode(); enable on demo or when you have confidenc in the site.
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);