import { CachingInterceptor } from './caching.interceptor';
import { LoggingInterceptor } from './logging.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true }
]; 