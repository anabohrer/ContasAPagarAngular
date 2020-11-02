import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { ContasPagasComponent } from './contas-pagas/contas-pagas.component';
import { ContaPagaComponent } from './contas-pagas/conta-paga/conta-paga.component';
import { ContaPagaListComponent } from './contas-pagas/conta-paga-list/conta-paga-list.component';
import { ContaPagaService } from './shared/conta-paga.service';

@NgModule({
  declarations: [
    AppComponent,
    ContasPagasComponent,
    ContaPagaComponent,
    ContaPagaListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [ContaPagaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
