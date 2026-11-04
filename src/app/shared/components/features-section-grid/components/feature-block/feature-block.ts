import { Component, input, Input, TemplateRef } from '@angular/core';
import { LucideDownload, LucideIcon } from '@lucide/angular';
import { BadgeModule } from 'primeng/badge';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { NgTemplateOutlet } from '@angular/common';

@Component({
	imports: [OverlayBadgeModule, NgTemplateOutlet],
	selector: 'app-feature-block',
	styleUrl: './feature-block.css',
	templateUrl: './feature-block.html',
})
export class FeatureBlock {
	icon = input.required<LucideIcon>();
	title = input.required<string>();
	content = input.required<string>();
}
