import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './test.component';
import { StandAloneComponent } from '../stand-alone.component';
import { RouterModule, Routes } from '@angular/router';
import { TestChildComponent } from './test-child/test-child.component';
import { ModalService } from './modal.service';
import { ViewContainerRef, Renderer2, ElementRef } from '@angular/core';
const routes: Routes = [
  {
    path: '',
    component: TestComponent,
  },
];

@NgModule({
  declarations: [TestComponent, TestChildComponent],
  imports: [CommonModule, StandAloneComponent, RouterModule.forChild(routes)],

})
export class TestModule {}
