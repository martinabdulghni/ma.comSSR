import { Component, HostListener, OnInit } from '@angular/core';

@Component({
   selector: 'app-custom-cursor',
   standalone: true,
   imports: [],
   templateUrl: './custom-cursor.component.html',
   styleUrl: './custom-cursor.component.scss',
})
export class CustomCursorComponent implements OnInit {
   top: any;
   left: any;
   expand = false;

   constructor() {
      if (typeof window !== 'undefined') {
         this.top = this.top + window.scrollY + 'px';
         this.left = this.left + window.scrollX + 'px';
      }
   }
   ngOnInit(): void {
      if (typeof window !== 'undefined') {
         window.addEventListener('scroll', () => {});
      }
   }

   @HostListener('document:click', ['$event'])
   onClick($event: any) {
      this.expand = true;
      setTimeout(() => {
         this.expand = false;
      }, 500);
   }

   @HostListener('document:mousemove', ['$event'])
   onMousemove($event: any) {
      this.top = $event.pageY - 10 + 'px';
      this.left = $event.pageX - 10 + 'px';
   }
}
