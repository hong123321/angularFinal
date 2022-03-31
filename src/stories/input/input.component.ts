import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'storybook-input',
  template: `
  <label for="test">{{label}}</label>
  <input
  id="test"
  type="search"
  placeholder="Search by Name"
  [ngStyle]="{ 'background-color': backgroundColor, 'color':color }" >`,
  styleUrls: [],
})
export default  class InputComponent {
  /**
   * Is this the principal call to action on the page?
   */
   @Input()
   label: string;

   @Input()
   backgroundColor: string;

  @Input()
  color: string;
}
