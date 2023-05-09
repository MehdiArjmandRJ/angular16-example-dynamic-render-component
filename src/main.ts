import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { bootstrapApplication, provideClientHydration } from '@angular/platform-browser';
import { StandAloneComponent } from './app/stand-alone/stand-alone.component';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

