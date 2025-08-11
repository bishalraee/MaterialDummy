import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(App, {...appConfig,
  providers:[ //there can be other providers too hence merging is necessary
    ...(appConfig.providers ?? []), //??[] means if appConfig.providers is undefined, use an empty array
    provideHttpClient() //merge exisitng providers with HttpClient provider
  ]
})
  .catch((err) => console.error(err));
