import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileContentComponent } from './mobile-content.component';

describe('MobileContentComponent', () => {
  let component: MobileContentComponent;
  let fixture: ComponentFixture<MobileContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
