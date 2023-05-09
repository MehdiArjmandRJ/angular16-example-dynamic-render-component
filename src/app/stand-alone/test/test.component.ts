import {
  Component,
  ComponentRef,
  ViewChild,
  ViewContainerRef,
  Renderer2,
  ElementRef,
} from '@angular/core';
import { ModalService } from './modal.service';
import { TestChildComponent } from './test-child/test-child.component';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
})
export class TestComponent {
  test?: string;
  show: boolean = false;
  @ViewChild('messageContainer', { static: true, read: ViewContainerRef })
  alertContainer?: ElementRef;
  counter: number = 0;
  componentRef?: ComponentRef<TestChildComponent>;

  constructor(
    private modalService: ModalService,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}

  createComponent() {
    // this.modalService.createComponent(this.alertContainer, TestChildComponent);
    let newElement: HTMLElement = this.modalService.createCreatorElement(
      'div',
      `<h1>Hello World</h1>`,
      { attrName: 'attr-step', step: this.counter }
    );
    this.renderer.appendChild(this.elementRef.nativeElement.querySelector('.hello'), newElement);
    this.counter++;
  }

  destroyComponent() {
    this.elementRef.nativeElement.querySelector('[attr-step="0"]')
      ? this.renderer.removeChild(
          this.elementRef.nativeElement,
          this.elementRef.nativeElement.querySelector('[attr-step="0"]')
        )
      : null;
  }
}
