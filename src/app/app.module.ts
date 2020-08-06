/* Angular */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

/* Routing */
import { AppRoutingModule, MyRountingComponent } from './app-routing.module';
/* Services */
import { DemoServiceService } from './demo-service.service';
/* Material */
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
/* component */
import { AppComponent } from './app.component';
import { DemoParentChildComponent } from './demo-parent/demo-parent-child/demo-parent-child.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentListDetailComponent } from './department-list/department-list-detail/department-list-detail.component';
import { DemoRoutingDataPassComponent } from './demo-routing-data-pass/demo-routing-data-pass.component';
import { StaticDataRoutingComponent } from './demo-routing-data-pass/static-data-routing/static-data-routing.component';
import { DynamicDataRoutingComponent } from './demo-routing-data-pass/dynamic-data-routing/dynamic-data-routing.component';
import { DemoHtmlExampleComponent } from './demo-html-example/demo-html-example.component';
import { PipesGenderPipe } from './demo-pipes/pipes-gender.pipe';
import { DemoCustomDirectivesDirective } from './demo-custom-directives.directive';
import { DemoRegisterComponent } from './demo-register/demo-register.component';
import { from } from 'rxjs';
import { DemoFileUploaderComponent } from './demo-file-uploader/demo-file-uploader.component';

@NgModule({
  declarations: [ /* Components, Custom Directives, Custom Pipes  */
    AppComponent,
    MyRountingComponent,
    DemoParentChildComponent,
    DepartmentListComponent,
    DepartmentListDetailComponent,
    DemoRoutingDataPassComponent,
    StaticDataRoutingComponent,
    DynamicDataRoutingComponent,
    DemoHtmlExampleComponent,
    PipesGenderPipe,
    DemoCustomDirectivesDirective,
    DemoRegisterComponent,
    DemoFileUploaderComponent
    ],
  imports: [ /* Angular core, External Libs, Other Module, Router etc... */
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatListModule
  ],
  providers: [], /* Services */
  bootstrap: [AppComponent] /* Starting the Application - index.html must declare this selector component */
})
export class AppModule { }
