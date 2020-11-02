import { Injectable } from '@angular/core';
import { ContaPaga } from './conta-paga.model';
import {  HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContaPagaService {
  dadosFormulario : ContaPaga;
  readonly rootURL = 'https://contasapagarapi20201031213515.azurewebsites.net/api/';
  list : ContaPaga[];

  constructor(private http: HttpClient) { }

  criaContaPaga(){
    return this.http.post(this.rootURL + 'Contas', this.dadosFormulario);
  }
  atualizaContaPaga(){
    this.dadosFormulario.ValorCorrigido = "";
    return this.http.put(this.rootURL + 'Contas/' + this.dadosFormulario.Id, this.dadosFormulario);
  }

  deletaContaPaga(id){
    return this.http.delete(this.rootURL + 'Contas/' + id);
  }

  refreshListaContas(){
    this.http.get(this.rootURL + 'Contas')
    .toPromise()
    .then(res => this.list = res as ContaPaga[]);
  }


  
}
