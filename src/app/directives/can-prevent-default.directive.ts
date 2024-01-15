//A SOLUTION WITHOUT USING DEPENDANCY INJECTION
import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCanPreventDefault]',
  standalone: true
})
export class CanPreventDefaultDirective {
  @Input()
  disabled = false;

  @HostListener('click', ['$event'])
  @HostListener('dblclick', ['$event'])
  onClick(e: Event) {
    if (this.disabled) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
    // console.log(e.defaultPrevented);
  }
}






 // **tHE GRAYED OUT CODE WE USE HOSTDIRECTIVES INSIDE DIRECTIVE HENCE BRINGING IN  BIDIRECTIONAL DEPENDANCY***
 // **BASICALLY MEANS WE ARE USING DEPENDANCY INJECTION

// import { Directive, HostListener, inject } from '@angular/core';
// import { CanDisableDirective } from './can-disable.directive';

// @Directive({
//   selector: '[appCanPreventDefault]',
//   standalone: true
// })
// export class CanPreventDefaultDirective {

//    // using dependancy injection the  canPreventDefaultDirective can be able to read the value/state of canDisableDirecetive
//      canDisableDir = inject(CanDisableDirective);

//      // depending on the fitting use cases we can make the injected directive it optional
//     //  {
//     //   optional: true
//     //  }

//   @HostListener('click', ['$event'])
//   @HostListener('dbclick', ['$event'])
//   onClick(e: Event) {
//     if (this.canDisableDir.disabled) {
//       e.preventDefault();
//       e.stopImmediatePropagation();
//     }

//     console.log(e.defaultPrevented);

//   }

//   // constructor() {
//   //   console.log(this.canDisableDir);

//   // }

// }
