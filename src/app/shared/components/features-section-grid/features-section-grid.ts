import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';
import {
	LucideBrush,
	LucideCopyright,
	LucideDownload,
	LucideHandCoins,
	LucideIcon,
	LucideRefreshCw,
	LucideRotateCw,
	LucideUserGroup,
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
	imports: [FeatureBlock, OverlayBadgeModule],
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
			icon: LucideCopyright,
			title: 'All Are Under licensed',
			content:
				'The only limitation with these abstract images is that you are not able to sell them in any form, whether digital or hard copy (such as paintings or prints on paper).',
		},
		{
			icon: LucideHandCoins,
			title: 'Cancel Anytime',
			content: "Subscribe at your own pace, and cancel when you feel it's enough.",
		},
		{
			icon: LucideUserGroup,
			title: 'Empowering For Team',
			content: 'We support multiple seats at once, requiring only a single payment.',
		},
		{
			icon: LucideRotateCw,
			title: 'No Limitations',
			content:
				'Use as many as you want, from Dribbble presentations to PowerPoint presentations.',
		},
	];
}
