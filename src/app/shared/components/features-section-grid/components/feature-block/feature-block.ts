import { Component, input } from '@angular/core';
import { LucideDynamicIcon, LucideIcon } from '@lucide/angular';
import { OverlayBadgeModule } from 'primeng/overlaybadge';

@Component({
	imports: [OverlayBadgeModule, LucideDynamicIcon],
	selector: 'app-feature-block',
	styleUrl: './feature-block.css',
	templateUrl: './feature-block.html',
})
export class FeatureBlock {
	icon = input.required<LucideIcon>();
	title = input.required<string>();
	content = input.required<string>();
}
