import { Routes } from '@angular/router';
import { TestPageComponent } from './pages/test-page/test-page.component';

export const routes: Routes = [
  { path: '', component: TestPageComponent },
  { path: 'test', component: TestPageComponent }
];
