import { BrowserModule }  from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ApiInvoke } from './ApiInvoke.component'
import { HttpModule, JsonpModule } from '@angular/http';
import { ApiService } from './ApiService.service';

@NgModule({
  imports: [BrowserModule,HttpModule,JsonpModule],
  declarations: [ApiInvoke],
  bootstrap: [ApiInvoke],
  providers: [ApiService],
  exports: [ ApiInvoke ] // Allows this components to be used in other components. Not other modules as we did not register it with other modules

})
export class apicallModule {

  

}