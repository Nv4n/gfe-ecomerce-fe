import { Component } from '@angular/core';
import { ButtonDirective, ButtonModule } from 'primeng/button';

@Component({
	imports: [ButtonModule],
	selector: 'app-hero-section',
	styleUrl: './hero-section.css',
	templateUrl: './hero-section.html',
	standalone: true,
})
export class HeroSection {}
