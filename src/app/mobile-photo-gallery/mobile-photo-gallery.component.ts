import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
   selector: 'app-mobile-photo-gallery',
   standalone: true,
   imports: [],
   templateUrl: './mobile-photo-gallery.component.html',
   styleUrl: './mobile-photo-gallery.component.scss',
})
export class MobilePhotoGalleryComponent {
   openXl(content: TemplateRef<any>) {
      this.modalService.open(content, { size: 'xl' });
   }

   @ViewChild('imageModal') imageModal: any;
   modalImageSrc: string = '';
   images = [
      {
         src: '/assets/imgs/martinag11.jpg',
      },
      {
         src: '/assets/imgs/martinag13.JPG',
      },
      {
         src: '/assets/imgs/martinag.png',
      },
      {
         src: '/assets/imgs/martinag2.jpg',
      },
      {
         src: '/assets/imgs/martinag10.JPG',
      },

      {
         src: '/assets/imgs/martinag4.JPG',
      },
      {
         src: '/assets/imgs/martinag5.JPG',
      },
      {
         src: '/assets/imgs/martinag6.JPEG',
      },
      {
         src: '/assets/imgs/martinag7.JPG',
      },
      {
         src: '/assets/imgs/martinag9.JPG',
      },
      {
         src: '/assets/imgs/martinag12.JPG',
      },

      {
         src: '/assets/imgs/martinag14.JPG',
      },
   ];

   constructor(private modalService: NgbModal) {}

   openImageModal(index: number): void {
      this.modalImageSrc = this.images[index].src;
      this.modalService.open(this.imageModal, { size: 'lg' });
   }
}
