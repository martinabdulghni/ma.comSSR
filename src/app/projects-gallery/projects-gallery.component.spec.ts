import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsGalleryComponent } from './projects-gallery.component';

describe('ProjectsGalleryComponent', () => {
  let component: ProjectsGalleryComponent;
  let fixture: ComponentFixture<ProjectsGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
