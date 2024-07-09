import { Component, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
   selector: 'app-photos-gallery',
   standalone: true,
   imports: [],
   templateUrl: './photos-gallery.component.html',
   styleUrl: './photos-gallery.component.scss',
})
export class PhotosGalleryComponent {
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
   ];

   images2 = [
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
   ];

   images3 = [
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

   openImageModal(index: number, col: number): void {
      this.modalService.open(this.imageModal, { size: 'lg' });
      if (col === 0) {
         this.modalImageSrc = this.images[index].src;
      } else if (col === 1) {
         this.modalImageSrc = this.images2[index].src;
      } else {
         this.modalImageSrc = this.images3[index].src;
      }
   }
}
