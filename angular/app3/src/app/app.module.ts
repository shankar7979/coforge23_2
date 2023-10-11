import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PipeexampleComponent } from './pipeexample/pipeexample.component';
import { PowerPipe } from './pipeexample/power.pipe';
import { FormsModule } from '@angular/forms';
import { SquarePipe } from './pipeexample/square.pipe';
import { ProductComponent } from './product/product.component';
import { EmployeeComponent } from './employee/employee.component';
import { ParentComponent } from './parent-child/parent/parent.component';
import { ChildComponent } from './parent-child/child/child.component';
import { Parent1Component } from './parent-child1/parent1/parent1.component';
import { Child1Component } from './parent-child1/child1/child1.component';
import { Child2Component } from './parent-child1/child2/child2.component';
import { ParentComponent11 } from './parent-child2/parent/parent.component';
import { ChildComponent11 } from './parent-child2/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    PipeexampleComponent,
    PowerPipe,
    SquarePipe,
    ProductComponent,
    EmployeeComponent,
    ParentComponent,
    ChildComponent,
    Parent1Component,
    Child1Component,
    Child2Component,
    ParentComponent11,
    ChildComponent11

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
