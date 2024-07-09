import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilePhotoGalleryComponent } from './mobile-photo-gallery.component';

describe('MobilePhotoGalleryComponent', () => {
  let component: MobilePhotoGalleryComponent;
  let fixture: ComponentFixture<MobilePhotoGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobilePhotoGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobilePhotoGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
