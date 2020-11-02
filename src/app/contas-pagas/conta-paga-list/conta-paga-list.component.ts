import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ContaPaga } from 'src/app/shared/conta-paga.model';
import { ContaPagaService } from 'src/app/shared/conta-paga.service';

@Component({
  selector: 'app-conta-paga-list',
  templateUrl: './conta-paga-list.component.html',
  styles: []
})
export class ContaPagaListComponent implements OnInit {

  constructor(private servico : ContaPagaService, private toastr: ToastrService) { }

  ngOnInit() {
    this.servico.refreshListaContas();
  }

  popularForm(cp : ContaPaga){
    var aux = {
      Id: cp.Id,
      Nome: cp.Nome,
      DataPagamentoStr: cp.DataPagamentoStr.substr(6, 4)+"-"+cp.DataPagamentoStr.substr(3, 2)+"-"+cp.DataPagamentoStr.substr(0, 2),
      DataVencimentoStr: cp.DataVencimentoStr.substr(6, 4)+"-"+cp.DataVencimentoStr.substr(3, 2)+"-"+cp.DataVencimentoStr.substr(0, 2),
      ValorCorrigido: cp.ValorCorrigido,
      ValorOriginalStr : cp.ValorOriginalStr.replace("R$", ''),
      QuantidadeDiasAtraso : cp.QuantidadeDiasAtraso
    };
    this.servico.dadosFormulario = Object.assign({}, aux);
    
  }

  onDelete(id){
    if(confirm('Você tem certeza que gostaria de deletar essa conta? ')){
      this.servico.deletaContaPaga(id)
      .subscribe(
        res => {
          this.servico.refreshListaContas();
          this.toastr.warning('Conta deletada com sucesso', 'Deletado');
        },
        err => {
          console.log(err);
        })
    }
  }

}
