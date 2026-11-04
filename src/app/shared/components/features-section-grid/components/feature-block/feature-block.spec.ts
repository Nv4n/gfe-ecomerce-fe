import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeatureBlock } from './feature-block';

describe('FeatureBlock', () => {
	let component: FeatureBlock;
	let fixture: ComponentFixture<FeatureBlock>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [FeatureBlock],
		}).compileComponents();

		fixture = TestBed.createComponent(FeatureBlock);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
