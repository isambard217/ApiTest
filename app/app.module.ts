// Defined Modules
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

// Defined Components
import { AppComponent }   from './app.component';
import { CoursesComponent } from './courses.component';
import { AuthorComponent } from './author.component';
import { MessageComponent} from './message.component';
import { HeartComponent } from './heart.component';
import { FavouriteComponent } from './favourite.component';

// Defined Services
import { MessageService } from './message.service';

// Defined Directives 
import { AutoGrowDirective } from './auto-grow.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule],
  declarations: [ 
          AppComponent,
          CoursesComponent, 
          AuthorComponent, 
          MessageComponent,
          AutoGrowDirective,
          FavouriteComponent,
          HeartComponent
     ],
  providers: [ MessageService ],
  bootstrap: [ AppComponent ],
  
})
export class AppModule { }
