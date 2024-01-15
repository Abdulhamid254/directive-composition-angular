import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCanColor]',
  standalone: true
})
export class CanColorDirective {

  @Input()
  color: 'primary' | 'secondary' = 'primary'

  @HostBinding('class')
  // applies the corresponding css class to the host element
   protected get computedHostClass() {
    return `df-${[this.color]}`
   }

  constructor() { }

}
