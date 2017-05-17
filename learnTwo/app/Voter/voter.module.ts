import { NgModule }      from '@angular/core'; // decorator
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

//
import { VoterComponent } from './voter.component';

@NgModule({

  imports: [BrowserModule,FormsModule],
  declarations: [VoterComponent],
  exports: [ VoterComponent ] 
})
export class VoterModule {


}