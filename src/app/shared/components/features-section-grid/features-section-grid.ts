import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import {
	LucideBrush,
	LucideCopyright,
	LucideDownload,
	LucideHandCoins,
	LucideIcon,
	LucideRefreshCw,
	LucideUserRoundGroup,
} from '@lucide/angular';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { FeatureBlock } from './components/feature-block/feature-block';

interface Feature {
	icon: LucideIcon;
	title: string;
	content: string;
}

@Component({
	imports: [
		LucideDownload,
		LucideBrush,
		LucideCopyright,
		LucideUserRoundGroup,
		LucideRefreshCw,
		LucideHandCoins,
		FeatureBlock,
		OverlayBadgeModule,
		NgTemplateOutlet,
	],
	selector: 'app-features-section-grid',
	styleUrl: './features-section-grid.css',
	templateUrl: './features-section-grid.html',
})
export class FeaturesSectionGrid {

	features: Feature[] = [
		{
			icon: LucideDownload,
			title: 'Infinite Download',
			content:
				"Once you subscribe to our plans, they're all yours.Download as many as you want and use them for work presentations, wallpapers, and much more.",
		},
		{
			icon: LucideBrush,
			title: 'Purely Handcrafted',
			content:
				'No AI, no generic images. Crafted from various chemicals, fabrics, clouds, or even particles as small as dust.',
		},
				{
			icon: LucideBrush,
			title: 'Purely Handcrafted',
			content:
				'No AI, no generic images. Crafted from various chemicals, fabrics, clouds, or even particles as small as dust.',
		},
				{
			icon: LucideBrush,
			title: 'Purely Handcrafted',
			content:
				'No AI, no generic images. Crafted from various chemicals, fabrics, clouds, or even particles as small as dust.',
		},
				{
			icon: LucideBrush,
			title: 'Purely Handcrafted',
			content:
				'No AI, no generic images. Crafted from various chemicals, fabrics, clouds, or even particles as small as dust.',
		},
				{
			icon: LucideBrush,
			title: 'Purely Handcrafted',
			content:
				'No AI, no generic images. Crafted from various chemicals, fabrics, clouds, or even particles as small as dust.',
		},
	];
}
