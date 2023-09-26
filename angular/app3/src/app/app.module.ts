import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PipeexampleComponent } from './pipeexample/pipeexample.component';
import { PowerPipe } from './pipeexample/power.pipe';
import { FormsModule } from '@angular/forms';
import { SquarePipe } from './pipeexample/square.pipe';
import { ProductComponent } from './product/product.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    PipeexampleComponent,
    PowerPipe,
    SquarePipe,
    ProductComponent,
    EmployeeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
