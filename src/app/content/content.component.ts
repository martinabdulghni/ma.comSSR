import { AfterViewInit, Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { PhotosGalleryComponent } from '../photos-gallery/photos-gallery.component';
import { ProjectsGalleryComponent } from '../projects-gallery/projects-gallery.component';
import { WorkComponent } from '../work/work.component';
import { SchoolComponent } from '../school/school.component';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';
import { MobilePhotoGalleryComponent } from '../mobile-photo-gallery/mobile-photo-gallery.component';
import { HeroComponent } from '../hero/hero.component';
import { FooterComponent } from '../footer/footer.component';
import { MobileContentComponent } from '../mobile-content/mobile-content.component';

@Component({
   selector: 'app-content',
   standalone: true,
   imports: [PhotosGalleryComponent, ProjectsGalleryComponent, WorkComponent, SchoolComponent, MobilePhotoGalleryComponent, HeroComponent, FooterComponent, MobileContentComponent],
   templateUrl: './content.component.html',
   styleUrl: './content.component.scss',
})
export class ContentComponent implements AfterViewInit {
   @ViewChild('navBtn', { static: false }) navBtn: ElementRef;
   @ViewChild('sticky-nav', { static: false }) stickyNav: ElementRef;
   @ViewChild('takeOverNav', { static: false }) takeOverNav: ElementRef;

   @Input() isMobile: boolean;
   private isBrowser: boolean;
   public displayInfoText: boolean = false;

   constructor(private renderer: Renderer2, private el: ElementRef, @Inject(PLATFORM_ID) private platformId: Object) {
      this.isBrowser = isPlatformBrowser(this.platformId);
   }

   ngAfterViewInit() {
      this.typeWriter();
      if (this.isBrowser) {
         setTimeout(() => {
            this.displayInfoText = true;
            const helloText = document.querySelector('#infoText');
            console.log(helloText);

            if (helloText) {
               helloText.classList.add('fade-in');
            }
         }, 2000);
      }
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

   typeWriter() {
      if (!this.isBrowser) {
         return;
      }

      let i = 0;
      const txt = `Yep, This is me :)<br />`;
      var speed = 70;

      const type = () => {
         if (i < txt.length) {
            const obj = document.getElementById('demo');
            if (obj) {
               if (txt.substr(i, 6) === '<br />') {
                  obj.innerHTML += '<br />';
                  i += 6;
                  speed = 150;
               } else {
                  obj.innerHTML += txt.charAt(i);
                  i++;
               }
               setTimeout(type, speed);
            }
         }
      };

      type();
   }
}
