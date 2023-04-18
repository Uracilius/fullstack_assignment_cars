import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddformComponent } from './addform/addform.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CarTableDetailComponent } from './table_cars/car-table-detail/car-table-detail.component';
import { CartablemasterComponent } from './table_cars/cartablemaster/cartablemaster.component';
const routes: Routes = [{path: 'addform', component: AddformComponent},
                        {path: 'cartable', component:CartablemasterComponent}]
@NgModule({
  declarations: [
    AppComponent,
    AddformComponent,
    CarTableDetailComponent,
    CartablemasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
