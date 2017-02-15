import { Component } from '@angular/core';

@Component({
  selector: 'jsr-example2',
  template: `
    <template #tem1>
      <p>Je suis le texte du template, tant que je ne suis pas inséré, mon code n'est pas exécuté.</p>
    </template>
    <template #tem2 let-name>
      <p>hello {{ name }}</p>
    </template>

    <div [ngTemplateOutlet]="tem1"></div>
    <div [ngTemplateOutlet]="tem2" [ngTemplateOutletContext]="contextA"></div>
    <div [ngTemplateOutlet]="tem2" [ngTemplateOutletContext]="contextB"></div>
  `
})
export class Example2Component {
  contextA = { $implicit: 'Mr Roboto' };
  contextB = { $implicit: 'Mr Anderson' };
}
