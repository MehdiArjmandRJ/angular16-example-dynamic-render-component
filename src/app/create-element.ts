import {
  Renderer2,
  ElementRef,
  ComponentFactoryResolver,
  Injector,
  ViewContainerRef,
  ApplicationRef,
} from '@angular/core';

export class CreateElement {
  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private viewContainerRef: ViewContainerRef,
    private appRef: ApplicationRef
  ) {}

  creatorElement(
    elementName: string,
    innerHTML: string,
    attr: any,
    parentClassName: string
  ) {
    const creatorElement = this.renderer.createElement(elementName);
    creatorElement.setAttribute(attr.attrName, attr.step);
    creatorElement.innerHTML = innerHTML;
    console.log(this.elementRef.nativeElement);
    this.elementRef.nativeElement.querySelector(parentClassName)
      ? this.renderer.appendChild(
          this.elementRef.nativeElement.querySelector(parentClassName),
          creatorElement
        )
      : console.warn('کلاس مورد نظر پیدا نشد');
  }

  destroyElement(attr: string, parentClassName: string) {
    this.elementRef.nativeElement.querySelector(attr)
      ? this.renderer.removeChild(
          this.elementRef.nativeElement.querySelector(parentClassName),
          this.elementRef.nativeElement.querySelector(attr)
        )
      : console.warn('المنت مورد نظر وجود ندارد');
  }

  appendComponent(
    MyComponent: any,
    parentClassName: string,
    id: string
  ) {
    if (this.elementRef.nativeElement.querySelector(parentClassName)) {
      this.elementRef.nativeElement.querySelector(
        parentClassName
      ).innerHTML = `<div id="${id}"></div>`;
      const factory =
        this.componentFactoryResolver.resolveComponentFactory(MyComponent);
      const componentRef: any = factory.create(
        this.injector,
        undefined,
        `#${id}`
      );
      this.appRef.attachView(componentRef.hostView);
    } else console.warn('کلاس مورد نظر وجود ندارد');
  }

  destroyComponentFromElement(id: string) {
    console.log(document);
    const myComponent = document.querySelector(id);
    console.log(myComponent);
    myComponent
      ? myComponent.remove()
      : console.warn('کامپوننت مورد نظر وجود ندارد');
  }
}
