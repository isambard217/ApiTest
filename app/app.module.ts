// Defined Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Defined Components
import { AppComponent }   from './app.component';
import { CoursesComponent } from './courses.component';
import { AuthorComponent } from './author.component';
import { MessageComponent} from './message.component';

// Defined Services
import { MessageService } from './message.service';


// Defined Directives 
import { AutoGrowDirective } from './auto-grow.directive';


@NgModule({
  imports:      [ BrowserModule, 
                  NgbModule.forRoot()],
  declarations: [ 
          AppComponent,
          CoursesComponent, 
          AuthorComponent, 
          MessageComponent,
          AutoGrowDirective,


     ],
  providers: [ MessageService ],
  bootstrap: [ AppComponent ],
  
})
export class AppModule { }
