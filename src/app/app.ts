import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { HeroSection } from './hero-section/hero-section';
import { ButtonDirective } from 'primeng/button';

@Component({
	imports: [RouterOutlet, Navbar, HeroSection],
	selector: 'app-root',
	styleUrl: './app.css',
	templateUrl: './app.html',
})
export class App {
	protected readonly title = signal('gfe-ecomerce-fe');
}
