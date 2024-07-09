import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { PhotosGalleryComponent } from '../photos-gallery/photos-gallery.component';
import { ProjectsGalleryComponent } from '../projects-gallery/projects-gallery.component';
import { WorkComponent } from '../work/work.component';
import { SchoolComponent } from '../school/school.component';
import { MobilePhotoGalleryComponent } from '../mobile-photo-gallery/mobile-photo-gallery.component';

@Component({
   selector: 'app-mobile-content',
   standalone: true,
   imports: [PhotosGalleryComponent, ProjectsGalleryComponent, WorkComponent, SchoolComponent,MobilePhotoGalleryComponent],
   templateUrl: './mobile-content.component.html',
   styleUrl: './mobile-content.component.scss',
})
export class MobileContentComponent implements AfterViewInit {
   @ViewChild('navBtn', { static: false }) navBtn: ElementRef;
   @ViewChild('sticky-nav', { static: false }) stickyNav: ElementRef;
   @ViewChild('takeOverNav', { static: false }) takeOverNav: ElementRef;

   @Input() isMobile: boolean;

   constructor(private renderer: Renderer2, private el: ElementRef) {}

   ngAfterViewInit() {
      console.log(this.isMobile);
   }

   navBtnClick() {
      if (this.takeOverNav) {
         const takeOvernavEl = this.takeOverNav.nativeElement;

         if (takeOvernavEl.classList.contains('shown')) {
            this.renderer.removeClass(takeOvernavEl, 'shown');
         } else {
            this.renderer.addClass(takeOvernavEl, 'shown');
         }

         const stickyNavEl = this.stickyNav.nativeElement;
         if (stickyNavEl.classList.contains('difference')) {
            this.renderer.removeClass(stickyNavEl, 'difference');
         } else {
            this.renderer.addClass(stickyNavEl, 'difference');
         }
      }
   }
}
