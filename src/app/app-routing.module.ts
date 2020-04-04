import { HomeComponent } from './home/home.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { OffersComponent } from './offers/offers.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { LivestyleComponent } from './livestyle/livestyle.component';
import { FoodBeverageComponent } from './food-beverage/food-beverage.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { AccomodetionComponent } from './accomodetion/accomodetion.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'accomodation', component: AccomodetionComponent },
  { path: 'celebreations', component: CelebrationsComponent },
  { path: 'food-beverage', component: FoodBeverageComponent },
  { path: 'livestyle', component: LivestyleComponent },
  { path: 'weddings', component: WeddingsComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
