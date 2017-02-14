import { Component, OnInit, AfterViewInit, ComponentFactoryResolver, ComponentFactory, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'jsr-pile',
  template: '<span>pile </span>'
})
export class PileComponent {
  constructor() {}
}

@Component({
  selector: 'jsr-face',
  template: '<span>face </span>'
})
export class FaceComponent {
  constructor() {}
}

@Component({
  selector: 'jsr-dynamic',
  template: `
    <h1>I’m a dynamic component</h1>
    <button (click)="tossCoin()">lancer la pièce</button>
    <div #target></div>
  `,
  styles: [`
  :host {
    width:90vw;
  }
  jsr-pile, jsr-face {
    display: inline-block;
  }
  `],
  entryComponents: [PileComponent, FaceComponent]
})
export class DynamicComponent implements OnInit, AfterViewInit {
  @ViewChild('target', {read: ViewContainerRef}) target: ViewContainerRef;
  pileFactory: ComponentFactory<PileComponent>;
  faceFactory: ComponentFactory<FaceComponent>;

  constructor(private cfr: ComponentFactoryResolver) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.pileFactory = this.cfr.resolveComponentFactory(PileComponent);
    this.faceFactory = this.cfr.resolveComponentFactory(FaceComponent);
  }

  tossCoin() {
    if (Math.random() > .5) {
      this.addPileComponent();
    } else {
      this.addFaceComponent();
    }
  }

  addPileComponent() {
    this.target.createComponent(this.pileFactory);
  }

  addFaceComponent() {
    this.target.createComponent(this.faceFactory);
  }

}
