import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppHeroSection } from './hero-section';

describe('AppHeroSection', () => {
	let component: AppHeroSection;
	let fixture: ComponentFixture<AppHeroSection>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [AppHeroSection],
		}).compileComponents();

		fixture = TestBed.createComponent(AppHeroSection);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
