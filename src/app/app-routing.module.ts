import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'test',
    loadChildren: () =>
      import('./stand-alone/test/test.module').then((m) => m.TestModule),
  },
  {
    path: 'test2',
    loadChildren: () =>
      import('./stand-alone/test-two/test-two.module').then((m) => m.TestTwoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
