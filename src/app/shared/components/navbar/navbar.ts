import { Component, input } from '@angular/core';
import { ShoppingCart } from '../../../features/shopping-cart/shopping-cart';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { Logo } from '../logo/logo';

@Component({
	imports: [Logo, ShoppingCart, RouterLink, ButtonModule,SidebarModule ],
	selector: 'app-navbar',
	styleUrl: './navbar.css',
	templateUrl: './navbar.html',
})
export class Navbar {}
