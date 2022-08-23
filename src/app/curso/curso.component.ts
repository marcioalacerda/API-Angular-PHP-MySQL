import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { CursoService } from "./curso.service";
import { Curso } from "./curso";


@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})

export class CursoComponent implements OnInit {

  //Objeto de formulário do tipo Curso
  formulario = new FormGroup({
    nomeCurso: new FormControl(''),
    valorCurso: new FormControl('')
  });

  //Vetor para listar os cursos
  vetor: Curso[] = [];

  //Construtor
  constructor(private servico:CursoService) { }

  //Inicializador
  ngOnInit(): void {
    //Ao iniciar o sistema deverá listar os cursos
    this.selecionar();
  }

  //Selecionar
  selecionar(){
    this.servico.obterCurso().subscribe(dados => {this.vetor = dados});
  }

  //Cadastrar
  cadastrar(){
    this.servico.cadastrarCurso(this.formulario).subscribe(dados => {this.vetor.push(dados)});
  }

  //Alterar
  alterar(){ }

  //Remover
  remover(){ }

}
