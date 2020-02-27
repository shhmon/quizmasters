// Angular
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularSvgIconModule } from "angular-svg-icon";
import { RouterModule, Routes } from "@angular/router";

// Material
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatDividerModule } from "@angular/material/divider";
import { MatTableModule } from "@angular/material/table";
import { MatSortModule } from "@angular/material/sort";
import { MatDialog } from '@angular/material/dialog';

// App
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WordsComponent } from "./words/words.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HighscoresComponent } from "./highscores/highscores.component";
import { DialogComponent } from './dialog/dialog.component';

const appRoutes: Routes = [
  { path: "", component: WordsComponent },
  { path: "highscores", component: HighscoresComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    WordsComponent,
    HeaderComponent,
    FooterComponent,
    HighscoresComponent,
    DialogComponent
  ],
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
    MatGridListModule,
    MatDividerModule,
    MatTableModule,
    MatDialog,
    MatSortModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
