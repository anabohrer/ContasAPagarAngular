import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { throwMatDuplicatedDrawerError } from '@angular/material';
import { ToastrService } from 'ngx-toastr';
import { ContaPagaService } from 'src/app/shared/conta-paga.service';

@Component({
  selector: 'app-conta-paga',
  templateUrl: './conta-paga.component.html',
  styles: []
})
export class ContaPagaComponent implements OnInit {

  constructor(public servico : ContaPagaService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form?: NgForm){
    if(form != null)
      form.resetForm();
      this.servico.dadosFormulario = {
        Id : 0,
        Nome : "",
        ValorOriginalStr: "",
        DataPagamentoStr: "",
        DataVencimentoStr: "",
        ValorCorrigido: "",
        QuantidadeDiasAtraso: 0
    }
  }

  onSubmit(form: NgForm){
    if(this.servico.dadosFormulario.Id == 0)
      this.insereRegistro(form);
    else
      this.atualizaRegistro(form);
  }

  insereRegistro(form : NgForm){
    this.servico.criaContaPaga().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.success('Conta salva com sucesso!', 'Sucesso');
        this.servico.refreshListaContas();
      },
      err => {
        console.log(err)
        this.toastr.error('Não foi possível atualizar a conta, verifique as informações: O valor não pode menor ou igual a zero e datas precisam ser entre 2015 e 2022.', 'Erro');
      }
    )
  }
  atualizaRegistro(form : NgForm){
    this.servico.atualizaContaPaga().subscribe(
      res => {
        this.resetForm(form);
        this.toastr.info('Conta atualizada com sucesso!', 'Sucesso');
        this.servico.refreshListaContas();
      },
      err => {
        console.log(err)
        this.toastr.error('Não foi possível atualizar a conta, verifique as informações: O valor não pode menor ou igual a zero e datas precisam ser entre 2015 e 2022.', 'Erro');
      }
    )
  }
}
