// Defined Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// My Own Modules
import { apicallModule } from './ApiCall/apicall.module';
import { HeartModule} from './Heart/heart.module';
import { VoterModule} from './Voter/voter.module';

// Defined Components
import { AppComponent }   from './app.component';
import { CoursesComponent } from './courses.component';
import { AuthorComponent } from './author.component';
import { MessageComponent} from './message.component';
//import { HeartComponent } from './Heart/heart.component';
// import { FavouriteComponent } from './favourite.component';

// Defined Services
import { MessageService } from './message.service';

// Defined Directives 
import { AutoGrowDirective } from './auto-grow.directive';

@NgModule({
  imports:   [
                 BrowserModule, 
                 FormsModule,
                 apicallModule,
                 HeartModule,
                 VoterModule
             ],
  declarations: [  // components here and directive
          AppComponent,
          CoursesComponent, 
          AuthorComponent, 
          MessageComponent,
          AutoGrowDirective,
          //FavouriteComponent,
          
     ],
  providers: [ MessageService ], // Services are registered here 
  bootstrap: [ AppComponent ],
  
})
export class AppModule { }
