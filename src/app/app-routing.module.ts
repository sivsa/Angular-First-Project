import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DemoBindingExampleComponent } from './demo-binding-example/demo-binding-example.component';
import { DemoDerivativesComponent } from './demo-derivatives/demo-derivatives.component';
import { DemoParentComponent } from './demo-parent/demo-parent.component';
import { DemoServiceExampleComponent } from './demo-service-example/demo-service-example.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentListDetailComponent } from './department-list/department-list-detail/department-list-detail.component';
import { DepartmentListOverviewComponent } from './department-list/department-list-detail/department-list-overview/department-list-overview.component';
import { DepartmentListContactComponent } from './department-list/department-list-detail/department-list-contact/department-list-contact.component';
import { DemoRoutingDataPassComponent } from './demo-routing-data-pass/demo-routing-data-pass.component';
import { StaticDataRoutingComponent } from './demo-routing-data-pass/static-data-routing/static-data-routing.component';
import { DynamicDataRoutingComponent } from './demo-routing-data-pass/dynamic-data-routing/dynamic-data-routing.component';
import { DemoHtmlExampleComponent } from './demo-html-example/demo-html-example.component';
import { LogicComponent } from './logic/logic.component';
import { DemoPipesComponent } from './demo-pipes/demo-pipes.component';
import { DemoObservablesComponent } from './demo-observables/demo-observables.component';
import { DemoLoginComponent } from './demo-login/demo-login.component';
import { DemoRegisterComponent } from './demo-register/demo-register.component';
import { DemoFileUploaderComponent } from './demo-file-uploader/demo-file-uploader.component';


const routes: Routes = [
  /* router always render from top to bottom */
  /* path: '' - it will be the first screen */
  /* redirectTo: '/dirc' - it will be redirect to the first screen */
  /* pathMatch - prefix and full */
  /* prefix - redirectTo when the full path is prefix to all path */
  /* full - redirectTo when the full path is empty */
  { path : '', redirectTo : '/home', pathMatch : 'full'},
  { path : 'home', component : HomeComponent},
  { path : 'binding', component : DemoBindingExampleComponent },
  { path : 'directives', component : DemoDerivativesComponent },
  { path : 'component-parent-to-child', component : DemoParentComponent },
  { path : 'service-local-and-http-call', component : DemoServiceExampleComponent },
  { path : 'departments', component : DepartmentListComponent },
  /* /:id - Route Parameter - Dynamically we need to pass the ID */
  { path : 'departments/:id', component : DepartmentListDetailComponent, 
  /* children - will access only on parent component */
    children : [
      { path : 'overview', component : DepartmentListOverviewComponent },
      { path : 'contact', component : DepartmentListContactComponent }]
  },
  /*  static and dynamic Data passing */
  { path : 'routing-parent', component : DemoRoutingDataPassComponent, 
    children : [ 
      /* Static data using the DATA */
      { path : 'static', component : StaticDataRoutingComponent, data : {'DeptID':'09', 'DeptName':'Sivsa'}},
      /* Dynamic data using STATE object in ts file */
      { path : 'dynamic', component : DynamicDataRoutingComponent}]
  },
  { path : 'html-example', component : DemoHtmlExampleComponent},
  { path : 'logic', component : LogicComponent},
  { path : 'pipes', component : DemoPipesComponent},
  { path : 'observables', component : DemoObservablesComponent},
  { path : 'login', component : DemoLoginComponent},
  { path : 'register', component : DemoRegisterComponent},
  { path : 'file-Uploader', component : DemoFileUploaderComponent},
  /* '**' - wildCard Routing - If user type the incorrect URl and this component will invoke */
  { path : '**', component : PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const MyRountingComponent = [HomeComponent,DemoBindingExampleComponent,
  DemoDerivativesComponent,DemoParentComponent,DemoServiceExampleComponent,PageNotFoundComponent,
  DepartmentListComponent,DepartmentListDetailComponent,DepartmentListOverviewComponent,
  DepartmentListContactComponent,DemoRoutingDataPassComponent,StaticDataRoutingComponent,
  DynamicDataRoutingComponent,DemoHtmlExampleComponent,LogicComponent,DemoPipesComponent,
  DemoLoginComponent,DemoRegisterComponent,DemoFileUploaderComponent];
