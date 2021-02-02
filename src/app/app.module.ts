import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
// import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { movieReducer } from './movie.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './movie.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

const materialModules = [
  MatCardModule,
  MatButtonModule,
  MatSelectModule
];

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    MovieDetailComponent,
    NavbarComponent,
    FooterComponent,
    MovieItemComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ page: movieReducer }),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule,
    EffectsModule.forRoot([MovieEffects]),
    // StoreDevtoolsModule.instrumentStore({
    //   maxAge: 25,
    // }),
    ...materialModules,
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  exports: [
    ...materialModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
