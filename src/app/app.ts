import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { Footer } from './components/footer/footer';
import { Navbar } from './components/navbar/navbar';
import { HeroSection } from './hero-section/hero-section';

@Component({
	imports: [RouterOutlet, Navbar, HeroSection, ToastModule, Footer],
	selector: 'app-root',
	styleUrl: './app.css',
	templateUrl: './app.html',
	providers: [MessageService],
})
export class App {
	protected readonly title = signal('gfe-ecomerce-fe');
}
