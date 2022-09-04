import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { WebsiteComponent } from "./pages/website/website.component";


const childRoutes: Routes = [
  {
    path: ':websiteId',
    component: WebsiteComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(childRoutes),
  ],
  exports: [
    RouterModule,
  ],
})
export class WebsiteRoutingModule {}