import { Component } from '@angular/core';
import { FeaturesSectionGrid } from '../../shared/components/features-section-grid/features-section-grid';
import { HeroSection } from '../../shared/components/hero-section/hero-section';

@Component({
	imports: [FeaturesSectionGrid, HeroSection],
	selector: 'app-storefront',
	styleUrl: './storefront.css',
	templateUrl: './storefront.html',
})
export class Storefront {}
	