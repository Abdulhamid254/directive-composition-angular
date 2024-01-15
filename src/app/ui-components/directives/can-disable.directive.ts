import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { CanPreventDefaultDirective } from './can-prevent-default.directive';

@Directive({
  selector: '[appCanDisable]',
  standalone: true,
  hostDirectives: [CanPreventDefaultDirective]
})
export class CanDisableDirective {

  @Input()
  @HostBinding('class.disabled')
  disabled = false;


  @HostBinding('attr.disabled')
  // applies the corresponding css class to the host element
   protected get nativeDisabled(): '' | null {
    return this.disabled ? '' : null;

  }
}
