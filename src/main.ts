import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';

if (environment.production) {
  enableProdMode();
}

const compilerOptions = {
  providers: [
    { provide: 'CompilerOptions', useValue: { interpolation: ['[[', ']]'] }, multi: true },
  ],
};

platformBrowserDynamic([{ provide: 'CompilerOptions', useValue: compilerOptions }]).bootstrapModule(AppModule)
  .catch(err => console.error(err));
