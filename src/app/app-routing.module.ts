import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormatComponent } from './component/format/format.component';
import { HeaderComponent } from './component/header/header.component';
import { RetryComponent } from './component/retry/retry.component';

const routes: Routes = [
  { path: '', component: FormatComponent },
  { path: 'retry', component: RetryComponent },
  { path: 'header', component: HeaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
