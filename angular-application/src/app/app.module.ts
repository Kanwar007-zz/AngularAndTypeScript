import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './services/services/course.service';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from './pipe/summary.pipe';
import { FavoriteComponent } from './favorite/favorite/favorite.component';
import { PanelComponent } from './panel/panel/panel.component';
import { AddedDirective } from './directive/added.directive';
import { PostComponent } from './post/post/post.component';
import { PersondemoComponent } from './person/persondemo/persondemo.component';
import { PersonService } from './person/services/person.service';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    AddedDirective,
    PostComponent,
    PersondemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CourseService,PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
