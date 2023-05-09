import {
  Component,
  OnInit,
  computed,
  effect,
  signal,
  Renderer2,
  ElementRef,
  ComponentFactoryResolver,
  ViewContainerRef,
  ViewChild,
  ApplicationRef,
  Injector,
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { ModalService } from './stand-alone/test/modal.service';
import { CreateElement } from './create-element';
import { MyComponentComponent } from './my-component/my-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular';
  firstName = signal('Mehdi');
  lastName = signal('Arjmand');
  fullName = computed(() => `${this.firstName()}  ${this.lastName()}`);
  count = signal(0);
  counter: number = 0;
  count$ = toObservable(this.count);
  createElementClass!: CreateElement;

  @ViewChild('container', { static: true, read: ViewContainerRef })
  container!: ViewContainerRef;

  constructor(
    private modalService: ModalService,
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private viewContainerRef: ViewContainerRef,
    private ApplicationRef: ApplicationRef
  ) {
    this.createElementClass = new CreateElement(
      renderer,
      elementRef,
      componentFactoryResolver,
      injector,
      viewContainerRef,
      ApplicationRef
    );
    effect(() => console.log('Name changed:', this.fullName()));
  }

  ngOnInit(): void {
    this.count$.subscribe(() => {
      console.log('Hi again');
    });
  }

  public setName(newName: string) {
    this.firstName.set(newName);
  }

  setLastName(newLastName: string) {
    this.lastName.set(newLastName);
  }

  setNewCount() {
    this.count.set(this.count() + 1);
  }

  createElement() {
    this.createElementClass.creatorElement(
      'div',
      '<app-my-component></app-my-component>',
      {
        attrName: 'attr-step',
        step: this.counter,
      },
      '.hello'
    );
    this.counter++;
  }

  destroyElement() {
    this.createElementClass.destroyElement(`[attr-step="0"]`, '.hello');
  }

  appendComponent() {
    this.createElementClass.appendComponent(
      MyComponentComponent,
      '.hello',
      'container'
    );
  }

  removeComponentElement() {
    this.createElementClass.destroyComponentFromElement('#container');
  }
}
