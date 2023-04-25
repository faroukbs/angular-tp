import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule,Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { ArticleRoutingModule } from './article/article-routing.module';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'art', component: ArticleComponent},
  { path: 'home', component: HomeComponent },  
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ArticleComponent,
    
 
  ],
  imports: [
    ArticleRoutingModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
