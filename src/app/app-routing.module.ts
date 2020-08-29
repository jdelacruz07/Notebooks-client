import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LibretasComponent } from './libretas/libretas.component';
import { LibretaBolsilloComponent } from './libreta-bolsillo/libreta-bolsillo.component';
import { LibretaMediaCartaComponent } from './libreta-media-carta/libreta-media-carta.component';
import { NewLibretaComponent } from './new-libreta/new-libreta.component';
import { DescriptionComponent } from './description/description.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'libretas', pathMatch: 'full'
  },
  {
    path: 'libretas', component: LibretasComponent
  },
  {
    path: 'libreta-bolsillo/:material', component: LibretaBolsilloComponent
  },
  {
    path: 'libreta-bolsillo', component: LibretaBolsilloComponent
  },
  {
    path: 'libreta-media-carta/:material', component: LibretaMediaCartaComponent
  },
  {
    path: 'libreta-media-carta', component: LibretaMediaCartaComponent
  },
  {
    path: 'new-libreta', component: NewLibretaComponent
  },
  {
    path: 'description/:index/:type', component: DescriptionComponent
  },
  {
    path: 'shopping-cart', component: ShoppingCartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
