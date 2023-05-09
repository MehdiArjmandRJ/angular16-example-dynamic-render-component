import {
  OnInit,
  Injector,
  Component,
  Renderer2,
  ElementRef,
  ApplicationRef,
  ViewContainerRef,
  ComponentFactoryResolver,
} from '@angular/core';
import { ModalService } from '../stand-alone/test/modal.service';
import { CreateElement } from '../create-element';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
})
export class MyComponentComponent implements OnInit {
  hello: string = 'Hey';
  myNumber: number = 125;
  createElementClass!: CreateElement;

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
  }

  ngOnInit() {
    setTimeout(() => {
      this.createElementClass.destroyComponentFromElement('#container')
    }, 2000);
  }

  test() {
    return this.myNumber * 50;
  }
}
