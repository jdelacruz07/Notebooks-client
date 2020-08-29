import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DescriptionComponent } from './description/description.component';
import { HeaderComponent } from './header/header.component';
import { LibretasComponent } from './libretas/libretas.component';
import { LibretaBolsilloComponent } from './libreta-bolsillo/libreta-bolsillo.component';
import { LibretaMediaCartaComponent } from './libreta-media-carta/libreta-media-carta.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { NewLibretaComponent } from './new-libreta/new-libreta.component';
import { FooterComponent } from './footer/footer.component';
import { NgbdModalContentComponent } from './ngbd-modal-content/ngbd-modal-content.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    AppComponent,
    DescriptionComponent,
    HeaderComponent,
    LibretasComponent,
    LibretaBolsilloComponent,
    LibretaMediaCartaComponent,
    ShoppingCartComponent,
    NewLibretaComponent,
    FooterComponent,
    NgbdModalContentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatSliderModule,
    MatToolbarModule
  ],
  providers: [
    NgbActiveModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
