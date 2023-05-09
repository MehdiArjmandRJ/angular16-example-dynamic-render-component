import {
  ComponentRef,
  Injectable,
  ComponentFactoryResolver,
} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  createComponent(element: any, componentName: any) {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(componentName);
    const componentRef = element.createComponent(componentFactory);
    console.log(componentRef);
  }

  removeComponent(element: any, componentName: any) {
    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(componentName);
    const componentRef = element.createComponent(componentFactory);
    componentRef!.destroy();
  }

  createCreatorElement(
    elementName: string,
    innerHTML: string,
    attr: any
  ): HTMLElement {
    const creatorElement = document.createElement(elementName);
    creatorElement.setAttribute(attr.attrName, attr.step);
    creatorElement.innerHTML = innerHTML;
    return creatorElement;
  }
}
