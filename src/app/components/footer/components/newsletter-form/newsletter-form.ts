import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
	imports: [ButtonModule],
	selector: 'app-newsletter-form',
	styleUrl: './newsletter-form.css',
	templateUrl: './newsletter-form.html',
})
export class NewsletterForm {
	onSubmit(){
		
	}
}
