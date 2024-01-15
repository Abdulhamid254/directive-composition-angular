import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCanAppearance]',
  standalone: true
})
export class CanAppearanceDirective {

  @Input()
  appearance: 'solid' | 'stroked' = 'solid'

  @HostBinding('class')
  // applies the corresponding css class to the host element
   protected get computedHostClass() {
    return `df-${[this.appearance]}`
   }

  constructor() { }

}
