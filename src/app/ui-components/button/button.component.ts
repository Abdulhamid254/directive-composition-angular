import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  HostListener,
  Input,
} from '@angular/core';
import { CanColorDirective } from '../directives/can-color.directive';
import { CanDisableDirective } from '../directives/can-disable.directive';
import { CanAppearanceDirective } from '../directives/can-appearance.directive';

@Component({
  selector: 'button[dfButton], a[dfButton]',
  standalone: true,
  template: `
    <span class="button-label">
      <ng-content></ng-content>
    </span>
  `,
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  // bringin in the directive composition here in the component instead of in the template
  hostDirectives:[
    {
      directive:  CanColorDirective,
      inputs: ['color']
    },
    {
      directive: CanDisableDirective,
      inputs: ['disabled']
    },
    {
      directive: CanAppearanceDirective,
      // renaming appearance to type
      inputs: ['appearance: type']
      //same applies when we have an output
      // outputs: ['someOutPut']
    }
  ]
})
export class ButtonComponent {
   // all the below code was moved into our directive composition

  // @Input()
  // appearance: 'solid' | 'stroked' = 'solid';

  // @Input()
  // color: 'primary' | 'secondary' = 'primary';

  // @HostBinding('class')
  // protected get computedHostClasses() {
  //   return {
  //     [`df-${[this.appearance]}`]: true,
  //     [`df-${[this.color]}`]: true,
  //   };
  // }

  // @Input()
  // @HostBinding('class.disabled')
  // disabled = false;

  // @HostBinding('attr.disabled')
  // protected get nativeDisabled(): '' | null {
  //   return this.disabled ? '' : null;
  // }

  // @HostListener('click', ['$event'])
  // @HostListener('dblclick', ['$event'])
  // onClick(e: Event) {
  //   if (this.disabled) {
  //     e.preventDefault();
  //     e.stopImmediatePropagation();
  //   }
  // }
}
