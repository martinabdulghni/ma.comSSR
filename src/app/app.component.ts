import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { FloatingComponent } from './floating/floating.component';
import { ContentComponent } from './content/content.component';
import { CustomCursorComponent } from './custom-cursor/custom-cursor.component';
import { RouterModule } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
   selector: 'app-root',
   standalone: true,
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss'],
   imports: [FloatingComponent, ContentComponent, CustomCursorComponent, RouterModule],
})
export class AppComponent implements OnInit {
   title = 'Martin Abdulghni';
   description = 'Martin Abdulghni - Portfolio showcasing projects, skills, and experience.';
   mobileQuery: MediaQueryList;

   constructor(private mediaMatcher: MediaMatcher, private meta: Meta) {
      this.mobileQuery = mediaMatcher.matchMedia('(max-width: 600px)');
   }

   ngOnInit() {
      this.addMetaTags();
   }

   addMetaTags() {
      const metaTags = [
         { name: 'title', content: this.title },
         { name: 'description', content: this.description },
         { name: 'viewport', content: 'width=device-width, initial-scale=1' },
         { name: 'robots', content: 'index, follow' },
         { name: 'author', content: 'Martin Abdulghni' },
         { name: 'keywords', content: 'Martin Abdulghni, Portfolio, Web Developer, Projects, Skills, Experience' },
         { name: 'og:title', content: this.title },
         { name: 'og:description', content: this.description },
         { name: 'og:type', content: 'website' },
         { name: 'og:url', content: 'https://yourwebsite.com' }, // Replace with your actual URL
         { name: 'og:image', content: 'https://yourwebsite.com/assets/images/profile.jpg' }, // Replace with your actual image URL
         { name: 'og:site_name', content: 'Martin Abdulghni' },
         { name: 'twitter:card', content: 'summary_large_image' },
         { name: 'twitter:title', content: this.title },
         { name: 'twitter:description', content: this.description },
         { name: 'twitter:image', content: 'https://yourwebsite.com/assets/images/profile.jpg' }, // Replace with your actual image URL
         { name: 'twitter:site', content: '@yourtwitterhandle' }, // Replace with your actual Twitter handle
         { name: 'twitter:creator', content: '@yourtwitterhandle' }, // Replace with your actual Twitter handle
      ];
      metaTags.forEach((tag) => this.meta.addTag(tag));
   }

   isMobile(): boolean {
      return this.mobileQuery.matches;
   }
}
