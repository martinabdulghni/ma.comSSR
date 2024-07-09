import { Component } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare, faMailBulk, faMailReply } from '@fortawesome/free-solid-svg-icons';
@Component({
   selector: 'app-floating',
   standalone: true,
   imports: [FontAwesomeModule],
   templateUrl: './floating.component.html',
   styleUrl: './floating.component.scss',
})
export class FloatingComponent {
   constructor(library: FaIconLibrary) {
      library.addIcons(faGithub, faLinkedin, faMailBulk, faMailReply, faArrowUpRightFromSquare);
   }
}
