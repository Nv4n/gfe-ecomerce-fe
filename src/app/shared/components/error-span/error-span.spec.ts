import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorSpan } from './error-span';

describe('ErrorSpan', () => {
	let component: ErrorSpan;
	let fixture: ComponentFixture<ErrorSpan>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ErrorSpan],
		}).compileComponents();

		fixture = TestBed.createComponent(ErrorSpan);
		component = fixture.componentInstance;
		await fixture.whenStable();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
