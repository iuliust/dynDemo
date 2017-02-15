import {
  Component,
  Input,
  ReflectiveInjector,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'jsr-dynamic',
  template: `<div #container></div>`,
  styles: []
})
export class DynamicComponent {
  @ViewChild('container', {read: ViewContainerRef})
  container: ViewContainerRef;

  currentComponent: any = null;

  @Input()
  set componentData(data: {component: any, inputs: any}) {
    if (!data) {
      return;
    }

    if (this.currentComponent) {
      this.currentComponent.destroy();
    }

    const inputProvidersArray = Object.keys(data.inputs)
      .map(inputName => {
        return {
          provide: inputName,
          useValue: data.inputs[inputName]
        };
      });
    const resolvedInputs = ReflectiveInjector.resolve(inputProvidersArray);
    const injector = ReflectiveInjector.fromResolvedProviders(
        resolvedInputs, this.container.injector
      );
    const factory = this.cfr.resolveComponentFactory(data.component);
    const component = factory.create(injector);
    this.currentComponent = this.container.insert(component.hostView);
  }

  constructor(private cfr: ComponentFactoryResolver) { }

}
