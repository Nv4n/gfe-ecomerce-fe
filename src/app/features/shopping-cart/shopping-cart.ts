import { Component } from '@angular/core';
import { ButtonDirective } from 'primeng/button';
import { LucideShoppingBag } from '@lucide/angular';

@Component({
	imports: [LucideShoppingBag, ButtonDirective],
	selector: 'app-shopping-cart',
	styleUrl: './shopping-cart.css',
	templateUrl: './shopping-cart.html',
})
export class ShoppingCart {}
