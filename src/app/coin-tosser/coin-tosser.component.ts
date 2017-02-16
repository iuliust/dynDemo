import { Component,
  OnInit,
  AfterViewInit,
  ComponentFactoryResolver,
  ComponentFactory,
  ViewChild,
  ViewRef,
  ViewContainerRef
} from '@angular/core';

@Component({
  template: '<span>pile </span>'
})
export class PileComponent {}

@Component({
  template: '<span>face </span>'
})
export class FaceComponent {}





@Component({
  selector: 'jsr-coin-tosser',
  template: `
    <button (click)="tossNTimes(1000)">lancer la pièce</button>
    <div #target></div>
  `,
  styles: [`
    :host { display: block; }
    jsr-pile, jsr-face { display: inline-block; }
  `],
  entryComponents: [PileComponent, FaceComponent]
})
export class CoinTosserComponent implements AfterViewInit {
  @ViewChild('target', {read: ViewContainerRef}) target: ViewContainerRef;

  pileFactory: ComponentFactory<PileComponent>;
  faceFactory: ComponentFactory<FaceComponent>;

  constructor(private cfr: ComponentFactoryResolver) { }

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

  tossNTimes(iterations: number) {
    while (--iterations) {
      this.tossCoin();
    }
  }

  addPileComponent() {
    this.target.createComponent(this.pileFactory);
  }

  addFaceComponent() {
    this.target.createComponent(this.faceFactory);
  }

}
