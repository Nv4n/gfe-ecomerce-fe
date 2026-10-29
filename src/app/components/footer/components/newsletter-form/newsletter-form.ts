import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';

@Component({
	imports: [ButtonModule, ReactiveFormsModule],
	selector: 'app-newsletter-form',
	styleUrl: './newsletter-form.css',
	templateUrl: './newsletter-form.html',
})
export class NewsletterForm {
	newsletterForm = new FormGroup({
		email: new FormControl('',[Validators.required,Validators.email]),
	});

	onSubmit() {
		console.log(this.newsletterForm.value);
	}
}
