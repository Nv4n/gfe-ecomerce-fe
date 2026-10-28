import { Component, input } from '@angular/core';
import { Logo } from '../../../shared/components/logo/logo';
import { ShoppingCart } from '../shopping-cart/shopping-cart';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';

@Component({
	imports: [Logo, ShoppingCart, RouterLink, ButtonModule,SidebarModule ],
	selector: 'app-navbar',
	styleUrl: './navbar.css',
	templateUrl: './navbar.html',
})
export class Navbar {}
//
