import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturesSectionGrid } from './features-section-grid';

describe('FeaturesSectionGrid', () => {
	let component: FeaturesSectionGrid;
	let fixture: ComponentFixture<FeaturesSectionGrid>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [FeaturesSectionGrid],
		}).compileComponents();

		fixture = TestBed.createComponent(FeaturesSectionGrid);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
