import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { LucideShoppingBag, provideLucideIcons } from '@lucide/angular';
import Aura from '@primeuix/themes/aura';
import { MessageService } from 'primeng/api';
import { providePrimeNG } from 'primeng/config';
import { environment } from '../environments/environment.development';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
	providers: [
		provideBrowserGlobalErrorListeners(),
		provideRouter(routes),
		providePrimeNG({
			license: environment.primeNgKey,
			theme: {
				preset: Aura,
				options: {
					prefix: 'p',
					cssVariables: true,
					darkModeSelector: '.my-app-dark',
					cssLayer: {
						name: 'primeng',
						order: ' base,theme, primeng',
					},
				},
			},
		}),
		provideLucideIcons(LucideShoppingBag),
		MessageService
	],
};
