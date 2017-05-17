// Defined Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Defined Components
import { HeartComponent }   from './heart.component';


@NgModule({
  imports: [
                 BrowserModule, 
                 FormsModule
             ],
  declarations: [  // components here and directive
         HeartComponent,       
     ],
  bootstrap: [ HeartComponent ],  
  exports: [ HeartComponent]
})
export class HeartModule { }
