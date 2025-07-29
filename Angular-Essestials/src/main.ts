import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { Header } from './header/header';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));

bootstrapApplication(Header)
  .catch((err) => console.error(err));
