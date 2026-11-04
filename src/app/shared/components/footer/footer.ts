import { Component } from '@angular/core';
import { NewsletterForm } from './components/newsletter-form/newsletter-form';
import { DividerModule } from 'primeng/divider';
import { Facebook, Github, Instagram, Twitter, Youtube } from '@primeicons/angular';
import { Logo } from '../logo/logo';

@Component({
	imports: [NewsletterForm, DividerModule, Youtube, Instagram, Twitter, Github, Facebook, Logo],
	selector: 'app-footer',
	styleUrl: './footer.css',
	templateUrl: './footer.html',
})
export class Footer {}
