import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StandAloneComponent } from '../stand-alone.component';
import { RouterModule, Routes } from '@angular/router';
import { TestTwoComponent } from './test-two.component';

function getContact() {
  return {
    test:'string',
    test2:'string2'
  };
}

const routes: Routes = [
  {
    path: '',
    component: TestTwoComponent,
    resolve: { testtt: () => getContact() },
  },
];

@NgModule({
  declarations: [TestTwoComponent],
  imports: [CommonModule, StandAloneComponent, RouterModule.forChild(routes)],
})
export class TestTwoModule {}
