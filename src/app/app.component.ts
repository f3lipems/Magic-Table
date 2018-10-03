import { Component, ElementRef, ViewChild } from '@angular/core';
import {DatatableComponent} from '@swimlane/ngx-datatable';
import { Observable } from 'rxjs';
import { element } from 'protractor';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {

    @ViewChild(DatatableComponent) table: DatatableComponent;

    constructor(private elementRef: ElementRef) {

    }

    // rows = [
    //     { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    //     { name: 'Dany', gender: 'Male', company: 'KFC' },
    //     { name: 'Molly', gender: 'Female', company: 'Burger King' },
    // ];
    // columns = [
    //     { prop: 'name' },
    //     { name: 'Gender' },
    //     { name: 'Company' }
    // ];

    //Atributos de configuração

    line_select: string = "single";


    //Atributos de formação do Grid
    grid_header = [];
    grid_body = [];

    grade_header = new Map();
    grade_top = [];
    grade = [];

    // Atributos de ações do  Grid
    selected: any[] = [];
    selected_cell;
    temp = [];
    rows = [];

    filter_field = 'nome';

    // JSON de teste
    tabela_str = `{  
    "result":
    [  
        {  
            "MensagemErro":"",
            "Status":"00000",
            "cdsClientesAtivos":[  
                {  
                    "empresa":5,
                    "des_contato":"PERCEG\\\\u00C7\\\\u00C3O DE VENDA PERDIDA - VENDAS",
                    "ddd_contato":41,
                    "telefone_contato":33359650,
                    "tipocli":"Cliente j\\\\u00E1 existente",
                    "situacao_con":"R",
                    "questionario":2,
                    "posvenda":"S",
                    "cliente":6662,
                    "qtd_dias":1449,
                    "dta_contato":"2014-10-06 07:30:00",
                    "revenda":1,
                    "ativo_passivo":"P",
                    "des_origem_trafego":"INTERNET",
                    "ativoreceptivo":"Receptivo",
                    "proximo_contato":"2014-10-06 07:30:00",
                    "origem":"V",
                    "origem2":"Ve\\\\u00EDculos",
                    "contato":259595,
                    "login":"ADMIN",
                    "nome":"AIRTON BOHRER OPPITZ",
                    "dia_aniver":12,
                    "mes_aniver":5,
                    "aniversariante":"N\\\\u00E3o",
                    "telefone":"41 33359650",
                    "celular":"41 991612215",
                    "frotista":"N\\\\u00C3O",
                    "campanha":"N\\\\u00C3O",
                    "procon":"N\\\\u00C3O",
                    "iistatus":"A",
                    "providencias":2,
                    "proximo_contato_perseguidora":"2018-09-13 11:08:49",
                    "reclamacao":"N"
                },
                {  
                    "empresa":5,
                    "des_contato":"ATENDIMENTO VEICULO",
                    "ddd_contato":41,
                    "telefone_contato":33354555,
                    "tipocli":"Cliente j\\\\u00E1 existente",
                    "novo_usado":"N",
                    "situacao_con":"R",
                    "posvenda":"N",
                    "cliente":11263,
                    "qtd_dias":63,
                    "dta_contato":"2018-07-23 17:01:37",
                    "revenda":1,
                    "ativo_passivo":"P",
                    "des_origem_trafego":"OUTROS",
                    "ativoreceptivo":"Receptivo",
                    "proximo_contato":"2018-07-23 17:01:37",
                    "origem":"V",
                    "origem2":"Ve\\\\u00EDculos",
                    "contato":441626,
                    "proposta":19873,
                    "login":"ADMIN",
                    "nome":"CARLOS ZUCOLOTTO JUNIOR",
                    "dia_aniver":29,
                    "mes_aniver":6,
                    "aniversariante":"N\\\\u00E3o",
                    "telefone":"41 33354555",
                    "celular":"41 988084504",
                    "frotista":"N\\\\u00C3O",
                    "campanha":"N\\\\u00C3O",
                    "procon":"N\\\\u00C3O",
                    "iistatus":"A",
                    "providencias":1,
                    "reclamacao":"N"
                },
                {  
                    "empresa":5,
                    "des_contato":"ATENDIMENTO VEICULO",
                    "ddd_contato":41,
                    "telefone_contato":33354555,
                    "tipocli":"Cliente j\\\\u00E1 existente",
                    "novo_usado":"U",
                    "situacao_con":"R",
                    "posvenda":"N",
                    "cliente":11263,
                    "qtd_dias":63,
                    "dta_contato":"2018-07-23 17:49:31",
                    "revenda":1,
                    "ativo_passivo":"P",
                    "des_origem_trafego":"OUTROS",
                    "ativoreceptivo":"Receptivo",
                    "proximo_contato":"2018-07-23 17:49:31",
                    "origem":"V",
                    "origem2":"Ve\\\\u00EDculos",
                    "contato":441629,
                    "proposta":19875,
                    "login":"ADMIN",
                    "nome":"CARLOS ZUCOLOTTO JUNIOR",
                    "dia_aniver":29,
                    "mes_aniver":6,
                    "aniversariante":"N\\\\u00E3o",
                    "telefone":"41 33354555",
                    "celular":"41 988084504",
                    "frotista":"N\\\\u00C3O",
                    "campanha":"N\\\\u00C3O",
                    "procon":"N\\\\u00C3O",
                    "iistatus":"A",
                    "providencias":9,
                    "atencao_vendedor":"Aten\\\\u00E7\\\\u00E3o",
                    "reclamacao":"N"
                },
                {  
                    "empresa":5,
                    "des_contato":"SEMI NOVOS - PROSPEC\\\\u00C7\\\\u00C3O PARA VENDA DE ACESS\\\\u00D3RIOS",
                    "ddd_contato":41,
                    "telefone_contato":33354555,
                    "tipocli":"Cliente j\\\\u00E1 existente",
                    "novo_usado":"U",
                    "situacao_con":"R",
                    "questionario":2,
                    "posvenda":"S",
                    "cliente":11263,
                    "qtd_dias":61,
                    "dta_contato":"2018-07-25 00:00:00",
                    "revenda":1,
                    "ativo_passivo":"A",
                    "chassi":"3C3AFFAR2CT317955",
                    "des_origem_trafego":"J\\\\u00C1 \\\\u00C9 CLIENTE - GEST\\\\u00C3O DE CARTE",
                    "ativoreceptivo":"Ativo",
                    "proximo_contato":"2018-08-24 18:00:00",
                    "origem":"V",
                    "origem2":"Ve\\\\u00EDculos",
                    "contato":441685,
                    "proposta":19876,
                    "login":"ADMIN",
                    "nome":"CARLOS ZUCOLOTTO JUNIOR",
                    "dia_aniver":29,
                    "mes_aniver":6,
                    "aniversariante":"N\\\\u00E3o",
                    "telefone":"41 33354555",
                    "celular":"41 988084504",
                    "frotista":"N\\\\u00C3O",
                    "campanha":"N\\\\u00C3O",
                    "procon":"N\\\\u00C3O",
                    "iistatus":"A",
                    "providencias":2,
                    "reclamacao":"N"
                },
                {  
                    "empresa":5,
                    "des_contato":"ATENDIMENTO VEICULO",
                    "ddd_contato":11,
                    "telefone_contato":37911666,
                    "tipocli":"Cliente j\\\\u00E1 existente",
                    "novo_usado":"U",
                    "situacao_con":"R",
                    "posvenda":"N",
                    "cliente":51967,
                    "qtd_dias":88,
                    "dta_contato":"2018-06-28 16:32:59",
                    "revenda":1,
                    "ativo_passivo":"P",
                    "des_origem_trafego":"OUTROS",
                    "ativoreceptivo":"Receptivo",
                    "proximo_contato":"2018-09-10 11:00:00",
                    "origem":"V",
                    "origem2":"Ve\\\\u00EDculos",
                    "contato":441205,
                    "proposta":19871,
                    "login":"ADMIN",
                    "nome":"A & A TRANSPORTES S\\\\/A",
                    "telefone":"11 37911666",
                    "celular":" ",
                    "frotista":"N\\\\u00C3O",
                    "campanha":"N\\\\u00C3O",
                    "procon":"N\\\\u00C3O",
                    "iistatus":"A",
                    "providencias":2,
                    "reclamacao":"N"
                },
                {  
                    "empresa":5,
                    "des_contato":"TESTE RESGATE",
                    "tipocli":"Lead Novo",
                    "situacao_con":"R",
                    "posvenda":"N",
                    "cliente":150506,
                    "qtd_dias":11,
                    "dta_contato":"2018-09-13 10:06:31",
                    "revenda":1,
                    "ativo_passivo":"P",
                    "des_origem_trafego":"COBRAN\\\\u00C7A - FINANCEIRO",
                    "ativoreceptivo":"Receptivo",
                    "proximo_contato":"2018-09-13 10:06:31",
                    "origem":"M",
                    "origem2":"Manual",
                    "contato":442085,
                    "login":"ELIANE",
                    "nome":"CRISTHIAN ALLAN VALENTE",
                    "telefone":" ",
                    "celular":"41 999570900",
                    "frotista":"N\\\\u00C3O",
                    "campanha":"N\\\\u00C3O",
                    "procon":"N\\\\u00C3O",
                    "iistatus":"A",
                    "providencias":1,
                    "proximo_contato_perseguidora":"2018-09-13 11:55:57",
                    "reclamacao":"N"
                },
                {  
                    "empresa":5,
                    "des_contato":"PERCEG\\\\u00C7\\\\u00C3O DE VENDA PERDIDA - VENDAS",
                    "ddd_contato":41,
                    "telefone_contato":33359650,
                    "tipocli":"Cliente j\\\\u00E1 existente",
                    "situacao_con":"R",
                    "questionario":2,
                    "posvenda":"S",
                    "cliente":6662,
                    "qtd_dias":1449,
                    "dta_contato":"2014-10-06 07:30:00",
                    "revenda":1,
                    "ativo_passivo":"P",
                    "des_origem_trafego":"INTERNET",
                    "ativoreceptivo":"Receptivo",
                    "proximo_contato":"2014-10-06 07:30:00",
                    "origem":"V",
                    "origem2":"Ve\\\\u00EDculos",
                    "contato":259595,
                    "login":"ADMIN",
                    "nome":"AIRTON BOHRER OPPITZ",
                    "dia_aniver":12,
                    "mes_aniver":5,
                    "aniversariante":"N\\\\u00E3o",
                    "telefone":"41 33359650",
                    "celular":"41 991612215",
                    "frotista":"N\\\\u00C3O",
                    "campanha":"N\\\\u00C3O",
                    "procon":"N\\\\u00C3O",
                    "iistatus":"A",
                    "providencias":2,
                    "proximo_contato_perseguidora":"2018-09-13 11:08:49",
                    "reclamacao":"N"
                },
                {  
                    "empresa":5,
                    "des_contato":"ATENDIMENTO VEICULO",
                    "ddd_contato":41,
                    "telefone_contato":33354555,
                    "tipocli":"Cliente j\\\\u00E1 existente",
                    "novo_usado":"N",
                    "situacao_con":"R",
                    "posvenda":"N",
                    "cliente":11263,
                    "qtd_dias":63,
                    "dta_contato":"2018-07-23 17:01:37",
                    "revenda":1,
                    "ativo_passivo":"P",
                    "des_origem_trafego":"OUTROS",
                    "ativoreceptivo":"Receptivo",
                    "proximo_contato":"2018-07-23 17:01:37",
                    "origem":"V",
                    "origem2":"Ve\\\\u00EDculos",
                    "contato":441626,
                    "proposta":19873,
                    "login":"ADMIN",
                    "nome":"CARLOS ZUCOLOTTO JUNIOR",
                    "dia_aniver":29,
                    "mes_aniver":6,
                    "aniversariante":"N\\\\u00E3o",
                    "telefone":"41 33354555",
                    "celular":"41 988084504",
                    "frotista":"N\\\\u00C3O",
                    "campanha":"N\\\\u00C3O",
                    "procon":"N\\\\u00C3O",
                    "iistatus":"A",
                    "providencias":1,
                    "reclamacao":"N"
                },
                {  
                    "empresa":5,
                    "des_contato":"ATENDIMENTO VEICULO",
                    "ddd_contato":41,
                    "telefone_contato":33354555,
                    "tipocli":"Cliente j\\\\u00E1 existente",
                    "novo_usado":"U",
                    "situacao_con":"R",
                    "posvenda":"N",
                    "cliente":11263,
                    "qtd_dias":63,
                    "dta_contato":"2018-07-23 17:49:31",
                    "revenda":1,
                    "ativo_passivo":"P",
                    "des_origem_trafego":"OUTROS",
                    "ativoreceptivo":"Receptivo",
                    "proximo_contato":"2018-07-23 17:49:31",
                    "origem":"V",
                    "origem2":"Ve\\\\u00EDculos",
                    "contato":441629,
                    "proposta":19875,
                    "login":"ADMIN",
                    "nome":"CARLOS ZUCOLOTTO JUNIOR",
                    "dia_aniver":29,
                    "mes_aniver":6,
                    "aniversariante":"N\\\\u00E3o",
                    "telefone":"41 33354555",
                    "celular":"41 988084504",
                    "frotista":"N\\\\u00C3O",
                    "campanha":"N\\\\u00C3O",
                    "procon":"N\\\\u00C3O",
                    "iistatus":"A",
                    "providencias":9,
                    "atencao_vendedor":"Aten\\\\u00E7\\\\u00E3o",
                    "reclamacao":"N"
                },
                {  
                    "empresa":5,
                    "des_contato":"SEMI NOVOS - PROSPEC\\\\u00C7\\\\u00C3O PARA VENDA DE ACESS\\\\u00D3RIOS",
                    "ddd_contato":41,
                    "telefone_contato":33354555,
                    "tipocli":"Cliente j\\\\u00E1 existente",
                    "novo_usado":"U",
                    "situacao_con":"R",
                    "questionario":2,
                    "posvenda":"S",
                    "cliente":11263,
                    "qtd_dias":61,
                    "dta_contato":"2018-07-25 00:00:00",
                    "revenda":1,
                    "ativo_passivo":"A",
                    "chassi":"3C3AFFAR2CT317955",
                    "des_origem_trafego":"J\\\\u00C1 \\\\u00C9 CLIENTE - GEST\\\\u00C3O DE CARTE",
                    "ativoreceptivo":"Ativo",
                    "proximo_contato":"2018-08-24 18:00:00",
                    "origem":"V",
                    "origem2":"Ve\\\\u00EDculos",
                    "contato":441685,
                    "proposta":19876,
                    "login":"ADMIN",
                    "nome":"CARLOS ZUCOLOTTO JUNIOR",
                    "dia_aniver":29,
                    "mes_aniver":6,
                    "aniversariante":"N\\\\u00E3o",
                    "telefone":"41 33354555",
                    "celular":"41 988084504",
                    "frotista":"N\\\\u00C3O",
                    "campanha":"N\\\\u00C3O",
                    "procon":"N\\\\u00C3O",
                    "iistatus":"A",
                    "providencias":2,
                    "reclamacao":"N"
                },
                {  
                    "empresa":5,
                    "des_contato":"ATENDIMENTO VEICULO",
                    "ddd_contato":11,
                    "telefone_contato":37911666,
                    "tipocli":"Cliente j\\\\u00E1 existente",
                    "novo_usado":"U",
                    "situacao_con":"R",
                    "posvenda":"N",
                    "cliente":51967,
                    "qtd_dias":88,
                    "dta_contato":"2018-06-28 16:32:59",
                    "revenda":1,
                    "ativo_passivo":"P",
                    "des_origem_trafego":"OUTROS",
                    "ativoreceptivo":"Receptivo",
                    "proximo_contato":"2018-09-10 11:00:00",
                    "origem":"V",
                    "origem2":"Ve\\\\u00EDculos",
                    "contato":441205,
                    "proposta":19871,
                    "login":"ADMIN",
                    "nome":"A & A TRANSPORTES S\\\\/A",
                    "telefone":"11 37911666",
                    "celular":" ",
                    "frotista":"N\\\\u00C3O",
                    "campanha":"N\\\\u00C3O",
                    "procon":"N\\\\u00C3O",
                    "iistatus":"A",
                    "providencias":2,
                    "reclamacao":"N"
                },
                {  
                    "empresa":5,
                    "des_contato":"TESTE RESGATE",
                    "tipocli":"Lead Novo",
                    "situacao_con":"R",
                    "posvenda":"N",
                    "cliente":150506,
                    "qtd_dias":11,
                    "dta_contato":"2018-09-13 10:06:31",
                    "revenda":1,
                    "ativo_passivo":"P",
                    "des_origem_trafego":"COBRAN\\\\u00C7A - FINANCEIRO",
                    "ativoreceptivo":"Receptivo",
                    "proximo_contato":"2018-09-13 10:06:31",
                    "origem":"M",
                    "origem2":"Manual",
                    "contato":442085,
                    "login":"ELIANE",
                    "nome":"CRISTHIAN ALLAN VALENTE",
                    "telefone":" ",
                    "celular":"41 999570900",
                    "frotista":"N\\\\u00C3O",
                    "campanha":"N\\\\u00C3O",
                    "procon":"N\\\\u00C3O",
                    "iistatus":"A",
                    "providencias":1,
                    "proximo_contato_perseguidora":"2018-09-13 11:55:57",
                    "reclamacao":"N"
                },
                {  
                    "empresa":5,
                    "des_contato":"PERCEG\\\\u00C7\\\\u00C3O DE VENDA PERDIDA - VENDAS",
                    "ddd_contato":41,
                    "telefone_contato":33359650,
                    "tipocli":"Cliente j\\\\u00E1 existente",
                    "situacao_con":"R",
                    "questionario":2,
                    "posvenda":"S",
                    "cliente":6662,
                    "qtd_dias":1449,
                    "dta_contato":"2014-10-06 07:30:00",
                    "revenda":1,
                    "ativo_passivo":"P",
                    "des_origem_trafego":"INTERNET",
                    "ativoreceptivo":"Receptivo",
                    "proximo_contato":"2014-10-06 07:30:00",
                    "origem":"V",
                    "origem2":"Ve\\\\u00EDculos",
                    "contato":259595,
                    "login":"ADMIN",
                    "nome":"AIRTON BOHRER OPPITZ",
                    "dia_aniver":12,
                    "mes_aniver":5,
                    "aniversariante":"N\\\\u00E3o",
                    "telefone":"41 33359650",
                    "celular":"41 991612215",
                    "frotista":"N\\\\u00C3O",
                    "campanha":"N\\\\u00C3O",
                    "procon":"N\\\\u00C3O",
                    "iistatus":"A",
                    "providencias":2,
                    "proximo_contato_perseguidora":"2018-09-13 11:08:49",
                    "reclamacao":"N"
                },
                {  
                    "empresa":5,
                    "des_contato":"ATENDIMENTO VEICULO",
                    "ddd_contato":41,
                    "telefone_contato":33354555,
                    "tipocli":"Cliente j\\\\u00E1 existente",
                    "novo_usado":"N",
                    "situacao_con":"R",
                    "posvenda":"N",
                    "cliente":11263,
                    "qtd_dias":63,
                    "dta_contato":"2018-07-23 17:01:37",
                    "revenda":1,
                    "ativo_passivo":"P",
                    "des_origem_trafego":"OUTROS",
                    "ativoreceptivo":"Receptivo",
                    "proximo_contato":"2018-07-23 17:01:37",
                    "origem":"V",
                    "origem2":"Ve\\\\u00EDculos",
                    "contato":441626,
                    "proposta":19873,
                    "login":"ADMIN",
                    "nome":"CARLOS ZUCOLOTTO JUNIOR",
                    "dia_aniver":29,
                    "mes_aniver":6,
                    "aniversariante":"N\\\\u00E3o",
                    "telefone":"41 33354555",
                    "celular":"41 988084504",
                    "frotista":"N\\\\u00C3O",
                    "campanha":"N\\\\u00C3O",
                    "procon":"N\\\\u00C3O",
                    "iistatus":"A",
                    "providencias":1,
                    "reclamacao":"N"
                },
                {  
                    "empresa":5,
                    "des_contato":"ATENDIMENTO VEICULO",
                    "ddd_contato":41,
                    "telefone_contato":33354555,
                    "tipocli":"Cliente j\\\\u00E1 existente",
                    "novo_usado":"U",
                    "situacao_con":"R",
                    "posvenda":"N",
                    "cliente":11263,
                    "qtd_dias":63,
                    "dta_contato":"2018-07-23 17:49:31",
                    "revenda":1,
                    "ativo_passivo":"P",
                    "des_origem_trafego":"OUTROS",
                    "ativoreceptivo":"Receptivo",
                    "proximo_contato":"2018-07-23 17:49:31",
                    "origem":"V",
                    "origem2":"Ve\\\\u00EDculos",
                    "contato":441629,
                    "proposta":19875,
                    "login":"ADMIN",
                    "nome":"CARLOS ZUCOLOTTO JUNIOR",
                    "dia_aniver":29,
                    "mes_aniver":6,
                    "aniversariante":"N\\\\u00E3o",
                    "telefone":"41 33354555",
                    "celular":"41 988084504",
                    "frotista":"N\\\\u00C3O",
                    "campanha":"N\\\\u00C3O",
                    "procon":"N\\\\u00C3O",
                    "iistatus":"A",
                    "providencias":9,
                    "atencao_vendedor":"Aten\\\\u00E7\\\\u00E3o",
                    "reclamacao":"N"
                },
                {  
                    "empresa":5,
                    "des_contato":"SEMI NOVOS - PROSPEC\\\\u00C7\\\\u00C3O PARA VENDA DE ACESS\\\\u00D3RIOS",
                    "ddd_contato":41,
                    "telefone_contato":33354555,
                    "tipocli":"Cliente j\\\\u00E1 existente",
                    "novo_usado":"U",
                    "situacao_con":"R",
                    "questionario":2,
                    "posvenda":"S",
                    "cliente":11263,
                    "qtd_dias":61,
                    "dta_contato":"2018-07-25 00:00:00",
                    "revenda":1,
                    "ativo_passivo":"A",
                    "chassi":"3C3AFFAR2CT317955",
                    "des_origem_trafego":"J\\\\u00C1 \\\\u00C9 CLIENTE - GEST\\\\u00C3O DE CARTE",
                    "ativoreceptivo":"Ativo",
                    "proximo_contato":"2018-08-24 18:00:00",
                    "origem":"V",
                    "origem2":"Ve\\\\u00EDculos",
                    "contato":441685,
                    "proposta":19876,
                    "login":"ADMIN",
                    "nome":"CARLOS ZUCOLOTTO JUNIOR",
                    "dia_aniver":29,
                    "mes_aniver":6,
                    "aniversariante":"N\\\\u00E3o",
                    "telefone":"41 33354555",
                    "celular":"41 988084504",
                    "frotista":"N\\\\u00C3O",
                    "campanha":"N\\\\u00C3O",
                    "procon":"N\\\\u00C3O",
                    "iistatus":"A",
                    "providencias":2,
                    "reclamacao":"N"
                },
                {  
                    "empresa":5,
                    "des_contato":"ATENDIMENTO VEICULO",
                    "ddd_contato":11,
                    "telefone_contato":37911666,
                    "tipocli":"Cliente j\\\\u00E1 existente",
                    "novo_usado":"U",
                    "situacao_con":"R",
                    "posvenda":"N",
                    "cliente":51967,
                    "qtd_dias":88,
                    "dta_contato":"2018-06-28 16:32:59",
                    "revenda":1,
                    "ativo_passivo":"P",
                    "des_origem_trafego":"OUTROS",
                    "ativoreceptivo":"Receptivo",
                    "proximo_contato":"2018-09-10 11:00:00",
                    "origem":"V",
                    "origem2":"Ve\\\\u00EDculos",
                    "contato":441205,
                    "proposta":19871,
                    "login":"ADMIN",
                    "nome":"A & A TRANSPORTES S\\\\/A",
                    "telefone":"11 37911666",
                    "celular":" ",
                    "frotista":"N\\\\u00C3O",
                    "campanha":"N\\\\u00C3O",
                    "procon":"N\\\\u00C3O",
                    "iistatus":"A",
                    "providencias":2,
                    "reclamacao":"N"
                },
                {  
                    "empresa":5,
                    "des_contato":"TESTE RESGATE",
                    "tipocli":"Lead Novo",
                    "situacao_con":"R",
                    "posvenda":"N",
                    "cliente":150506,
                    "qtd_dias":11,
                    "dta_contato":"2018-09-13 10:06:31",
                    "revenda":1,
                    "ativo_passivo":"P",
                    "des_origem_trafego":"COBRAN\\\\u00C7A - FINANCEIRO",
                    "ativoreceptivo":"Receptivo",
                    "proximo_contato":"2018-09-13 10:06:31",
                    "origem":"M",
                    "origem2":"Manual",
                    "contato":442085,
                    "login":"ELIANE",
                    "nome":"CRISTHIAN ALLAN VALENTE",
                    "telefone":" ",
                    "celular":"41 999570900",
                    "frotista":"N\\\\u00C3O",
                    "campanha":"N\\\\u00C3O",
                    "procon":"N\\\\u00C3O",
                    "iistatus":"A",
                    "providencias":1,
                    "proximo_contato_perseguidora":"2018-09-13 11:55:57",
                    "reclamacao":"N"
                },{  
                    "empresa":5,
                    "des_contato":"PERCEG\\\\u00C7\\\\u00C3O DE VENDA PERDIDA - VENDAS",
                    "ddd_contato":41,
                    "telefone_contato":33359650,
                    "tipocli":"Cliente j\\\\u00E1 existente",
                    "situacao_con":"R",
                    "questionario":2,
                    "posvenda":"S",
                    "cliente":6662,
                    "qtd_dias":1449,
                    "dta_contato":"2014-10-06 07:30:00",
                    "revenda":1,
                    "ativo_passivo":"P",
                    "des_origem_trafego":"INTERNET",
                    "ativoreceptivo":"Receptivo",
                    "proximo_contato":"2014-10-06 07:30:00",
                    "origem":"V",
                    "origem2":"Ve\\\\u00EDculos",
                    "contato":259595,
                    "login":"ADMIN",
                    "nome":"AIRTON BOHRER OPPITZ",
                    "dia_aniver":12,
                    "mes_aniver":5,
                    "aniversariante":"N\\\\u00E3o",
                    "telefone":"41 33359650",
                    "celular":"41 991612215",
                    "frotista":"N\\\\u00C3O",
                    "campanha":"N\\\\u00C3O",
                    "procon":"N\\\\u00C3O",
                    "iistatus":"A",
                    "providencias":2,
                    "proximo_contato_perseguidora":"2018-09-13 11:08:49",
                    "reclamacao":"N"
                },
                {  
                    "empresa":5,
                    "des_contato":"ATENDIMENTO VEICULO",
                    "ddd_contato":41,
                    "telefone_contato":33354555,
                    "tipocli":"Cliente j\\\\u00E1 existente",
                    "novo_usado":"N",
                    "situacao_con":"R",
                    "posvenda":"N",
                    "cliente":11263,
                    "qtd_dias":63,
                    "dta_contato":"2018-07-23 17:01:37",
                    "revenda":1,
                    "ativo_passivo":"P",
                    "des_origem_trafego":"OUTROS",
                    "ativoreceptivo":"Receptivo",
                    "proximo_contato":"2018-07-23 17:01:37",
                    "origem":"V",
                    "origem2":"Ve\\\\u00EDculos",
                    "contato":441626,
                    "proposta":19873,
                    "login":"ADMIN",
                    "nome":"CARLOS ZUCOLOTTO JUNIOR",
                    "dia_aniver":29,
                    "mes_aniver":6,
                    "aniversariante":"N\\\\u00E3o",
                    "telefone":"41 33354555",
                    "celular":"41 988084504",
                    "frotista":"N\\\\u00C3O",
                    "campanha":"N\\\\u00C3O",
                    "procon":"N\\\\u00C3O",
                    "iistatus":"A",
                    "providencias":1,
                    "reclamacao":"N"
                },
                {  
                    "empresa":5,
                    "des_contato":"ATENDIMENTO VEICULO",
                    "ddd_contato":41,
                    "telefone_contato":33354555,
                    "tipocli":"Cliente j\\\\u00E1 existente",
                    "novo_usado":"U",
                    "situacao_con":"R",
                    "posvenda":"N",
                    "cliente":11263,
                    "qtd_dias":63,
                    "dta_contato":"2018-07-23 17:49:31",
                    "revenda":1,
                    "ativo_passivo":"P",
                    "des_origem_trafego":"OUTROS",
                    "ativoreceptivo":"Receptivo",
                    "proximo_contato":"2018-07-23 17:49:31",
                    "origem":"V",
                    "origem2":"Ve\\\\u00EDculos",
                    "contato":441629,
                    "proposta":19875,
                    "login":"ADMIN",
                    "nome":"CARLOS ZUCOLOTTO JUNIOR",
                    "dia_aniver":29,
                    "mes_aniver":6,
                    "aniversariante":"N\\\\u00E3o",
                    "telefone":"41 33354555",
                    "celular":"41 988084504",
                    "frotista":"N\\\\u00C3O",
                    "campanha":"N\\\\u00C3O",
                    "procon":"N\\\\u00C3O",
                    "iistatus":"A",
                    "providencias":9,
                    "atencao_vendedor":"Aten\\\\u00E7\\\\u00E3o",
                    "reclamacao":"N"
                },
                {  
                    "empresa":5,
                    "des_contato":"SEMI NOVOS - PROSPEC\\\\u00C7\\\\u00C3O PARA VENDA DE ACESS\\\\u00D3RIOS",
                    "ddd_contato":41,
                    "telefone_contato":33354555,
                    "tipocli":"Cliente j\\\\u00E1 existente",
                    "novo_usado":"U",
                    "situacao_con":"R",
                    "questionario":2,
                    "posvenda":"S",
                    "cliente":11263,
                    "qtd_dias":61,
                    "dta_contato":"2018-07-25 00:00:00",
                    "revenda":1,
                    "ativo_passivo":"A",
                    "chassi":"3C3AFFAR2CT317955",
                    "des_origem_trafego":"J\\\\u00C1 \\\\u00C9 CLIENTE - GEST\\\\u00C3O DE CARTE",
                    "ativoreceptivo":"Ativo",
                    "proximo_contato":"2018-08-24 18:00:00",
                    "origem":"V",
                    "origem2":"Ve\\\\u00EDculos",
                    "contato":441685,
                    "proposta":19876,
                    "login":"ADMIN",
                    "nome":"CARLOS ZUCOLOTTO JUNIOR",
                    "dia_aniver":29,
                    "mes_aniver":6,
                    "aniversariante":"N\\\\u00E3o",
                    "telefone":"41 33354555",
                    "celular":"41 988084504",
                    "frotista":"N\\\\u00C3O",
                    "campanha":"N\\\\u00C3O",
                    "procon":"N\\\\u00C3O",
                    "iistatus":"A",
                    "providencias":2,
                    "reclamacao":"N"
                },
                {  
                    "empresa":5,
                    "des_contato":"ATENDIMENTO VEICULO",
                    "ddd_contato":11,
                    "telefone_contato":37911666,
                    "tipocli":"Cliente j\\\\u00E1 existente",
                    "novo_usado":"U",
                    "situacao_con":"R",
                    "posvenda":"N",
                    "cliente":51967,
                    "qtd_dias":88,
                    "dta_contato":"2018-06-28 16:32:59",
                    "revenda":1,
                    "ativo_passivo":"P",
                    "des_origem_trafego":"OUTROS",
                    "ativoreceptivo":"Receptivo",
                    "proximo_contato":"2018-09-10 11:00:00",
                    "origem":"V",
                    "origem2":"Ve\\\\u00EDculos",
                    "contato":441205,
                    "proposta":19871,
                    "login":"ADMIN",
                    "nome":"A & A TRANSPORTES S\\\\/A",
                    "telefone":"11 37911666",
                    "celular":" ",
                    "frotista":"N\\\\u00C3O",
                    "campanha":"N\\\\u00C3O",
                    "procon":"N\\\\u00C3O",
                    "iistatus":"A",
                    "providencias":2,
                    "reclamacao":"N"
                },
                {  
                    "empresa":5,
                    "des_contato":"TESTE RESGATE",
                    "tipocli":"Lead Novo",
                    "situacao_con":"R",
                    "posvenda":"N",
                    "cliente":150506,
                    "qtd_dias":11,
                    "dta_contato":"2018-09-13 10:06:31",
                    "revenda":1,
                    "ativo_passivo":"P",
                    "des_origem_trafego":"COBRAN\\\\u00C7A - FINANCEIRO",
                    "ativoreceptivo":"Receptivo",
                    "proximo_contato":"2018-09-13 10:06:31",
                    "origem":"M",
                    "origem2":"Manual",
                    "contato":442085,
                    "login":"ELIANE",
                    "nome":"CRISTHIAN ALLAN VALENTE",
                    "telefone":" ",
                    "celular":"41 999570900",
                    "frotista":"N\\\\u00C3O",
                    "campanha":"N\\\\u00C3O",
                    "procon":"N\\\\u00C3O",
                    "iistatus":"A",
                    "providencias":1,
                    "proximo_contato_perseguidora":"2018-09-13 11:55:57",
                    "reclamacao":"N"
                },
                {  
                    "empresa":5,
                    "des_contato":"PERCEG\\\\u00C7\\\\u00C3O DE VENDA PERDIDA - VENDAS",
                    "ddd_contato":41,
                    "telefone_contato":33359650,
                    "tipocli":"Cliente j\\\\u00E1 existente",
                    "situacao_con":"R",
                    "questionario":2,
                    "posvenda":"S",
                    "cliente":6662,
                    "qtd_dias":1449,
                    "dta_contato":"2014-10-06 07:30:00",
                    "revenda":1,
                    "ativo_passivo":"P",
                    "des_origem_trafego":"INTERNET",
                    "ativoreceptivo":"Receptivo",
                    "proximo_contato":"2014-10-06 07:30:00",
                    "origem":"V",
                    "origem2":"Ve\\\\u00EDculos",
                    "contato":259595,
                    "login":"ADMIN",
                    "nome":"AIRTON BOHRER OPPITZ",
                    "dia_aniver":12,
                    "mes_aniver":5,
                    "aniversariante":"N\\\\u00E3o",
                    "telefone":"41 33359650",
                    "celular":"41 991612215",
                    "frotista":"N\\\\u00C3O",
                    "campanha":"N\\\\u00C3O",
                    "procon":"N\\\\u00C3O",
                    "iistatus":"A",
                    "providencias":2,
                    "proximo_contato_perseguidora":"2018-09-13 11:08:49",
                    "reclamacao":"N"
                },{  
                    "empresa":5,
                    "des_contato":"PERCEG\\\\u00C7\\\\u00C3O DE VENDA PERDIDA - VENDAS",
                    "ddd_contato":41,
                    "telefone_contato":33359650,
                    "tipocli":"Cliente j\\\\u00E1 existente",
                    "situacao_con":"R",
                    "questionario":2,
                    "posvenda":"S",
                    "cliente":6662,
                    "qtd_dias":1449,
                    "dta_contato":"2014-10-06 07:30:00",
                    "revenda":1,
                    "ativo_passivo":"P",
                    "des_origem_trafego":"INTERNET",
                    "ativoreceptivo":"Receptivo",
                    "proximo_contato":"2014-10-06 07:30:00",
                    "origem":"V",
                    "origem2":"Ve\\\\u00EDculos",
                    "contato":259595,
                    "login":"ADMIN",
                    "nome":"AIRTON BOHRER OPPITZ",
                    "dia_aniver":12,
                    "mes_aniver":5,
                    "aniversariante":"N\\\\u00E3o",
                    "telefone":"41 33359650",
                    "celular":"41 991612215",
                    "frotista":"N\\\\u00C3O",
                    "campanha":"N\\\\u00C3O",
                    "procon":"N\\\\u00C3O",
                    "iistatus":"A",
                    "providencias":2,
                    "proximo_contato_perseguidora":"2018-09-13 11:08:49",
                    "reclamacao":"N"
                },
                {  
                    "empresa":5,
                    "des_contato":"ATENDIMENTO VEICULO",
                    "ddd_contato":41,
                    "telefone_contato":33354555,
                    "tipocli":"Cliente j\\\\u00E1 existente",
                    "novo_usado":"N",
                    "situacao_con":"R",
                    "posvenda":"N",
                    "cliente":11263,
                    "qtd_dias":63,
                    "dta_contato":"2018-07-23 17:01:37",
                    "revenda":1,
                    "ativo_passivo":"P",
                    "des_origem_trafego":"OUTROS",
                    "ativoreceptivo":"Receptivo",
                    "proximo_contato":"2018-07-23 17:01:37",
                    "origem":"V",
                    "origem2":"Ve\\\\u00EDculos",
                    "contato":441626,
                    "proposta":19873,
                    "login":"ADMIN",
                    "nome":"CARLOS ZUCOLOTTO JUNIOR",
                    "dia_aniver":29,
                    "mes_aniver":6,
                    "aniversariante":"N\\\\u00E3o",
                    "telefone":"41 33354555",
                    "celular":"41 988084504",
                    "frotista":"N\\\\u00C3O",
                    "campanha":"N\\\\u00C3O",
                    "procon":"N\\\\u00C3O",
                    "iistatus":"A",
                    "providencias":1,
                    "reclamacao":"N"
                },
                {  
                    "empresa":5,
                    "des_contato":"ATENDIMENTO VEICULO",
                    "ddd_contato":41,
                    "telefone_contato":33354555,
                    "tipocli":"Cliente j\\\\u00E1 existente",
                    "novo_usado":"U",
                    "situacao_con":"R",
                    "posvenda":"N",
                    "cliente":11263,
                    "qtd_dias":63,
                    "dta_contato":"2018-07-23 17:49:31",
                    "revenda":1,
                    "ativo_passivo":"P",
                    "des_origem_trafego":"OUTROS",
                    "ativoreceptivo":"Receptivo",
                    "proximo_contato":"2018-07-23 17:49:31",
                    "origem":"V",
                    "origem2":"Ve\\\\u00EDculos",
                    "contato":441629,
                    "proposta":19875,
                    "login":"ADMIN",
                    "nome":"CARLOS ZUCOLOTTO JUNIOR",
                    "dia_aniver":29,
                    "mes_aniver":6,
                    "aniversariante":"N\\\\u00E3o",
                    "telefone":"41 33354555",
                    "celular":"41 988084504",
                    "frotista":"N\\\\u00C3O",
                    "campanha":"N\\\\u00C3O",
                    "procon":"N\\\\u00C3O",
                    "iistatus":"A",
                    "providencias":9,
                    "atencao_vendedor":"Aten\\\\u00E7\\\\u00E3o",
                    "reclamacao":"N"
                },
                {  
                    "empresa":5,
                    "des_contato":"SEMI NOVOS - PROSPEC\\\\u00C7\\\\u00C3O PARA VENDA DE ACESS\\\\u00D3RIOS",
                    "ddd_contato":41,
                    "telefone_contato":33354555,
                    "tipocli":"Cliente j\\\\u00E1 existente",
                    "novo_usado":"U",
                    "situacao_con":"R",
                    "questionario":2,
                    "posvenda":"S",
                    "cliente":11263,
                    "qtd_dias":61,
                    "dta_contato":"2018-07-25 00:00:00",
                    "revenda":1,
                    "ativo_passivo":"A",
                    "chassi":"3C3AFFAR2CT317955",
                    "des_origem_trafego":"J\\\\u00C1 \\\\u00C9 CLIENTE - GEST\\\\u00C3O DE CARTE",
                    "ativoreceptivo":"Ativo",
                    "proximo_contato":"2018-08-24 18:00:00",
                    "origem":"V",
                    "origem2":"Ve\\\\u00EDculos",
                    "contato":441685,
                    "proposta":19876,
                    "login":"ADMIN",
                    "nome":"CARLOS ZUCOLOTTO JUNIOR",
                    "dia_aniver":29,
                    "mes_aniver":6,
                    "aniversariante":"N\\\\u00E3o",
                    "telefone":"41 33354555",
                    "celular":"41 988084504",
                    "frotista":"N\\\\u00C3O",
                    "campanha":"N\\\\u00C3O",
                    "procon":"N\\\\u00C3O",
                    "iistatus":"A",
                    "providencias":2,
                    "reclamacao":"N"
                },
                {  
                    "empresa":5,
                    "des_contato":"ATENDIMENTO VEICULO",
                    "ddd_contato":11,
                    "telefone_contato":37911666,
                    "tipocli":"Cliente j\\\\u00E1 existente",
                    "novo_usado":"U",
                    "situacao_con":"R",
                    "posvenda":"N",
                    "cliente":51967,
                    "qtd_dias":88,
                    "dta_contato":"2018-06-28 16:32:59",
                    "revenda":1,
                    "ativo_passivo":"P",
                    "des_origem_trafego":"OUTROS",
                    "ativoreceptivo":"Receptivo",
                    "proximo_contato":"2018-09-10 11:00:00",
                    "origem":"V",
                    "origem2":"Ve\\\\u00EDculos",
                    "contato":441205,
                    "proposta":19871,
                    "login":"ADMIN",
                    "nome":"A & A TRANSPORTES S\\\\/A",
                    "telefone":"11 37911666",
                    "celular":" ",
                    "frotista":"N\\\\u00C3O",
                    "campanha":"N\\\\u00C3O",
                    "procon":"N\\\\u00C3O",
                    "iistatus":"A",
                    "providencias":2,
                    "reclamacao":"N"
                },
                {  
                    "empresa":5,
                    "des_contato":"TESTE RESGATE",
                    "tipocli":"Lead Novo",
                    "situacao_con":"R",
                    "posvenda":"N",
                    "cliente":150506,
                    "qtd_dias":11,
                    "dta_contato":"2018-09-13 10:06:31",
                    "revenda":1,
                    "ativo_passivo":"P",
                    "des_origem_trafego":"COBRAN\\\\u00C7A - FINANCEIRO",
                    "ativoreceptivo":"Receptivo",
                    "proximo_contato":"2018-09-13 10:06:31",
                    "origem":"M",
                    "origem2":"Manual",
                    "contato":442085,
                    "login":"ELIANE",
                    "nome":"CRISTHIAN ALLAN VALENTE",
                    "telefone":" ",
                    "celular":"41 999570900",
                    "frotista":"N\\\\u00C3O",
                    "campanha":"N\\\\u00C3O",
                    "procon":"N\\\\u00C3O",
                    "iistatus":"A",
                    "providencias":1,
                    "proximo_contato_perseguidora":"2018-09-13 11:55:57",
                    "reclamacao":"N"
                },
                {  
                    "empresa":5,
                    "des_contato":"PERCEG\\\\u00C7\\\\u00C3O DE VENDA PERDIDA - VENDAS",
                    "ddd_contato":41,
                    "telefone_contato":33359650,
                    "tipocli":"Cliente j\\\\u00E1 existente",
                    "situacao_con":"R",
                    "questionario":2,
                    "posvenda":"S",
                    "cliente":6662,
                    "qtd_dias":1449,
                    "dta_contato":"2014-10-06 07:30:00",
                    "revenda":1,
                    "ativo_passivo":"P",
                    "des_origem_trafego":"INTERNET",
                    "ativoreceptivo":"Receptivo",
                    "proximo_contato":"2014-10-06 07:30:00",
                    "origem":"V",
                    "origem2":"Ve\\\\u00EDculos",
                    "contato":259595,
                    "login":"ADMIN",
                    "nome":"AIRTON BOHRER OPPITZ",
                    "dia_aniver":12,
                    "mes_aniver":5,
                    "aniversariante":"N\\\\u00E3o",
                    "telefone":"41 33359650",
                    "celular":"41 991612215",
                    "frotista":"N\\\\u00C3O",
                    "campanha":"N\\\\u00C3O",
                    "procon":"N\\\\u00C3O",
                    "iistatus":"A",
                    "providencias":2,
                    "proximo_contato_perseguidora":"2018-09-13 11:08:49",
                    "reclamacao":"N"
                }
            ],
            "Acao":0
        }
        ]
    }`;


    tabela_Generica = JSON.parse(this.tabela_str)
    tabela = this.tabela_Generica.result[0].cdsClientesAtivos;

    montarTabela() {
        let linha_array = [];
        let linha_array_grid = [];
        let linha_map_ini = new Map();
        let linha_map = new Map();
        let json_parse;

        // Montando Cabeçalho da Grade
        for (let l in this.tabela) {

            let linha_str = JSON.stringify(this.tabela[l]);
            let linha = linha_str.split(",");

            this.grade_header.set("linha", "linha");

            for (let c in linha) {
                let celula = linha[c].split(":");
                this.grade_header.set(celula[0].replace(/[^a-z0-9]/gi, ""), celula[0].replace(/[^a-z0-9]/gi, ""));
            }
        }

        this.grade_top = Array.from(this.grade_header.keys());

        console.log(this.grade_top);

        // this.grade.push(this.grade_top.map(function(e){
        //     return e.toString().toUpperCase()
        // }));

        // Header DataTable

        this.grid_header.push(JSON.parse(`{"name":"linha"}`));

        for (let c in this.grade_top) {
            json_parse = JSON.parse(`{"name":"${this.grade_top[c]}"}`);
            this.grid_header.push(json_parse);
        }

        // Montando Corpo da Grade
        for (let i in this.tabela) {
            let linha_str = JSON.stringify(this.tabela[i]);
            let linha = linha_str.split(",");

            linha_array = [];

            // Monta o mapa da linha
            linha_map_ini.set("linha", parseInt(i) + 1);
            for (let c in linha) {
                let celula = linha[c].split(":");
                linha_map_ini.set(celula[0].replace(/[^a-z0-9]/gi, ""), celula[1].replace(/[^a-z0-9]/gi, ""));
            }

            let linha_str_json = "";
            // Monta o mpara da linha a partir dos campos do reader
            for (let c in this.grade_top) {
                linha_map.set(this.grade_top[c], linha_map_ini.get(this.grade_top[c]))

                if (c != "0") {
                    linha_str_json = linha_str_json + ","
                };

                //Usar operador ternário
                linha_str_json = linha_str_json + `"${this.grade_top[c]}":"${linha_map_ini.get(this.grade_top[c])}"`
            }

            // json_parse = JSON.parse(`{"${this.grade_top[c]}":"${linha_map_ini.get(this.grade_top[c])}"}`);
            json_parse = JSON.parse(`{${linha_str_json}}`);

            this.grid_body.push(json_parse);

            linha_array = Array.from(linha_map.values());
            //console.log(linha_array);

            this.grade.push(linha_array);

            linha_map_ini.clear();
            linha_map.clear();

            //String DataGrid
            linha_array_grid.push(linha.toString().replace("[", "").replace("]", ""));
        }

        console.log(this.grid_header);
        console.log(this.grid_body);

        this.rows = this.grid_body;

        //console.log(this.grade);
    }

    // getCellClass({ row, column, value }): any {
    //     return {
    //       'is-female': value == '5'
    //     };
    //   }

    // getKeys(map) {
    //     return Array.from(map.keys());
    // }


    setSelect(value) {
        this.line_select = value;
    }

    onSelect(event) {
        //console.log('Event: select', event, this.selected);
        // debugger;
        //this.selected_cell = (<HTMLInputElement>event.target);
        //console.log((<HTMLInputElement>event.target));
    }

    onActivate(event) {
        //console.log('Event: activate', event);

        if ((<HTMLInputElement>event).value != undefined) {
            this.selected_cell = (<HTMLInputElement>event).value;
        }
    }

    updateFilter(event) {
        var valor = this.filter_field;

        const val = (<HTMLInputElement>event);

        console.log(val);
        // filter our data
        const temp = this.rows.filter(function (d) {
            return d[valor].toLowerCase().indexOf(val) !== -1 || !val;
        });

        // update the rows
        this.grid_body = temp;
        console.log(this.rows);
        console.log(val);

        if(temp.length == 0 && val == undefined){
            this.grid_body = this.rows;
        }
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    }

    ngOnInit() {
        this.montarTabela();
    }

}
