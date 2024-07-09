import { isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, ElementRef, Inject, Input, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';

@Component({
   selector: 'app-hero',
   standalone: true,
   imports: [],
   templateUrl: './hero.component.html',
   styleUrl: './hero.component.scss',
})
export class HeroComponent implements OnInit {
   @Input() isMobile: boolean;
   private isBrowser: boolean;
   public displayInfoText: boolean = false;
   private container: HTMLElement;
   private codeLines: string[] = [
      '<li><span class="monokai-lightgrey">&lt;!-- fetched data --&gt;</span></li>',
      '<li><span class="monokai-white">&lt;<span class="monokai-red">h1</span> <span class="monokai-green">class</span>=<span class="monokai-yellow">"name"</span>&gt;Martin Abdulghni&lt;/<span class="monokai-red">h1</span>&gt;</span></li>',
      '<li><span class="monokai-white">&lt;<span class="monokai-red">h2</span> <span class="monokai-green">class</span>=<span class="monokai-yellow">"bio"</span>&gt;designer & fullstack developer&lt;/<span class="monokai-red">h2</span>&gt;</span></li>',
      '<li><span class="monokai-white">&lt;<span class="monokai-red">h6</span> <span class="monokai-green">class</span>=<span class="monokai-yellow">"age"</span>&gt;22&lt;/<span class="monokai-red">h6</span>&gt;</span></li>',
      '<li><span>&nbsp;</span></li>',
      '<li><span class="monokai-white">&lt;<span class="monokai-red">script</span> <span class="monokai-green">src</span>=<span class="monokai-yellow">"https://code.jquery.com/jquery-3.6.0.min.js"</span>&gt;&lt;/<span class="monokai-red">script</span>&gt;</span></li>',
      '<li><span class="monokai-white">&lt;<span class="monokai-red">script</span>&gt;</span></li>',
      '<li><span class="monokai-white"><span class="monokai-teal">$(document)</span>.<span class="monokai-teal">ready</span>(<span class="monokai-teal">function</span>() &#123;</span></li>',
      '<ul>',
      '   <li><span class="monokai-white"><span class="monokai-teal">$(".name")</span>.<span class="monokai-teal">text</span>(<span class="monokai-yellow">"Martin Abdulghni"</span>);</span></li>',
      '   <li><span class="monokai-white"><span class="monokai-teal">$(".bio")</span>.<span class="monokai-teal">text</span>(<span class="monokai-yellow">"designer & fullstack developer"</span>);</span></li>',
      '   <li><span class="monokai-white"><span class="monokai-teal">$(".age")</span>.<span class="monokai-teal">text</span>(<span class="monokai-yellow">"22"</span>);</span></li>',
      '</ul>',
      '<li><span class="monokai-white">&#125;);</span></li>',
      '<li><span class="monokai-white">&lt;/<span class="monokai-red">script</span>&gt;</span></li>',
   ];

   constructor(private renderer: Renderer2, private el: ElementRef, @Inject(PLATFORM_ID) private platformId: Object) {
      this.isBrowser = isPlatformBrowser(this.platformId);
   }
   ngOnInit(): void {
      // this.typeWriter();
      if (this.isBrowser) {
         this.container = document.getElementById('console-box') as HTMLElement;
         this.typeWriter();

         //  this.typeWriter();
         //  setTimeout(() => {
         //     this.displayInfoText = true;
         //     const helloText = document.querySelector('#code-console');
         //     console.log(helloText);

         //     if (helloText) {
         //        helloText.classList.add('fade-in');
         //     }
         //  }, 2000);
      }
   }

   ngAfterViewInit(): void {}

   writeCode(): void {
      let index = 0;

      const codeContainer = this.el.nativeElement.querySelector('#console-box');
      this.codeLines.forEach((line) => {
         const li = this.renderer.createElement('li');
         li.innerHTML = line;
         this.renderer.appendChild(codeContainer, li);
      });

      const writeLine = () => {
         if (index < this.codeLines.length) {
            const line = this.codeLines[index];
            let lineContent = '';
            let charIndex = 0;

            const intervalId = setInterval(() => {
               if (charIndex < line.length) {
                  lineContent += line.charAt(charIndex);
                  codeContainer.innerHTML = lineContent; // Update content gradually
                  charIndex++;
               } else {
                  clearInterval(intervalId);
                  codeContainer.innerHTML += '<br>'; // Move to the next line
                  index++;
                  setTimeout(writeLine, 500); // Delay between lines
               }
            }, 50); // Adjust the typing speed here
         }
      };

      writeLine();
   }

   typeWriter() {
      if (!this.isBrowser) {
         return;
      }

      let currentLine = 0;
      let currentChar = 0;
      let isTag = false;
      let content = '';

      const type = () => {
         if (this.container) {
            if (currentLine < this.codeLines.length) {
               const line = this.codeLines[currentLine];
               if (currentChar < line.length) {
                  content += line[currentChar];
                  this.container.innerHTML = content;
                  currentChar++;
                  setTimeout(type, 3); // Adjust the speed of typing here
               } else {
                  content += '\n';
                  this.container.innerHTML = content;
                  currentLine++;
                  currentChar = 0;
                  setTimeout(type, 300); // Delay between lines
               }
            } else {
               // Apply syntax highlighting after all lines are written

               this.applySyntaxHighlighting();
            }
         }
      };

      type();
   }

   applySyntaxHighlighting() {
      if (this.container) this.container.innerHTML = this.codeLines.join('\n');
   }
}
