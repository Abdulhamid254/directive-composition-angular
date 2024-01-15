import { Directive, HostBinding, Input } from "@angular/core";
import { CanPreventDefaultDirective } from "./can-prevent-default.directive";

@Directive({
  selector: '[canDisable]',
  standalone: true,
  hostDirectives: [{
    directive: CanPreventDefaultDirective,
    inputs: ['disabled']
  }]
})
export class CanDisableDirective {

  @Input()
  @HostBinding('class.disabled')
  disabled = false;

  @HostBinding('attr.disabled')
  protected get nativeDisabled(): '' | null {
    return this.disabled ? '' : null;
  }

}




 // **tHE GRAYED OUT CODE WE USE HOSTDIRECTIVES INSIDE DIRECTIVE HENCE BRINGING IN  BIDIRECTIONAL DEPENDANCY***

// import { Directive, HostBinding, HostListener, Input } from '@angular/core';
// import { CanPreventDefaultDirective } from './can-prevent-default.directive';

// @Directive({
//   selector: '[appCanDisable]',
//   standalone: true,
//   hostDirectives: [CanPreventDefaultDirective]
// })
// export class CanDisableDirective {

//   @Input()
//   @HostBinding('class.disabled')
//   disabled = false;


//   @HostBinding('attr.disabled')
//   // applies the corresponding css class to the host element
//    protected get nativeDisabled(): '' | null {
//     return this.disabled ? '' : null;

//   }
// }

// ***HERE BELOW WE ARE NOT USING DEPENDANCY INJECTION***//


