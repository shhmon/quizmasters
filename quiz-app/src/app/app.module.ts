// Angular
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularSvgIconModule } from "angular-svg-icon";

// Material
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatGridListModule } from '@angular/material/grid-list';

// App
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WordsComponent } from "./words/words.component";
import { HeaderComponent } from "./header/header.component";
import { MatCardModule } from "@angular/material/card";
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [AppComponent, WordsComponent, HeaderComponent, FooterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatToolbarModule,
    AngularSvgIconModule.forRoot(),
    MatMenuModule,
    MatIconModule,
		MatCardModule,
		MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
