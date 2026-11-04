import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule, Toast } from 'primeng/toast';

@Component({
	imports: [ButtonModule, ReactiveFormsModule, Toast,InputTextModule],
	selector: 'app-newsletter-form',
	styleUrl: './newsletter-form.css',
	templateUrl: './newsletter-form.html',
})
export class NewsletterForm {
	private messageService = inject(MessageService);
	newsletterForm = new FormGroup({
		email: new FormControl('', [Validators.required, Validators.email]),
	});

	onSubmit() {
		console.log('submit');
		if (this.newsletterForm.invalid) {
			console.log('submit invalid');
			return;
		}

		console.log('submit messageService');
		this.messageService.add({
			severity: 'success',
			summary: 'Success',
			detail: 'Subscription successful! Please check your email to confirm.',
			key: 'top-center',
		});
	}
}
