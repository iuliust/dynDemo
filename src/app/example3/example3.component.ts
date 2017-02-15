import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jsr-greeter',
  template: `<div>Hello {{name}}</div>`
})
export class GreeterComponent {
  @Input() name;
}

@Component({
  selector: 'jsr-example3',
  template: `
    <jsr-dynamic *ngFor="let item of components"
      [componentData]="item"></jsr-dynamic>
  `,
  styles: [],
  entryComponents: [GreeterComponent]
})
export class Example3Component {

  components: any[] = [
    { component: GreeterComponent, inputs: {'name': 'Mr Roboto'} }
  ];

  constructor() { }

}
