import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';
import { ButtonGroupComponent } from './components/buttonGroup/buttonGroup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, TableComponent, ButtonGroupComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}