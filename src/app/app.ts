import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Footer } from './shared/components/footer/footer';
import { Navbar } from './shared/components/navbar/navbar';

@Component({
	imports: [RouterOutlet, Navbar, ToastModule, Footer],
	selector: 'app-root',
	styleUrl: './app.css',
	templateUrl: './app.html',
	providers: [MessageService],
})
export class App {
	protected readonly title = signal('gfe-ecomerce-fe');
}
