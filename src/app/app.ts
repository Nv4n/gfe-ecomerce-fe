import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { FeaturesSectionGrid } from './shared/components/features-section-grid/features-section-grid';
import { Navbar } from './shared/components/navbar/navbar';
import { HeroSection } from './shared/components/hero-section/hero-section';
import { Footer } from './shared/components/footer/footer';

@Component({
	imports: [RouterOutlet, Navbar, HeroSection, ToastModule, Footer, FeaturesSectionGrid],
	selector: 'app-root',
	styleUrl: './app.css',
	templateUrl: './app.html',
	providers: [MessageService],
})
export class App {
	protected readonly title = signal('gfe-ecomerce-fe');
}
