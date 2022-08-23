import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Curso } from './curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  //Construtor
  constructor(private http:HttpClient) { }

  //obter todos os cursos
  obterCurso(){
    return this.http.get<Curso[]>('http://localhost/api/php/listar');
  }

  //cadastrar curso
  cadastrarCurso(f : FormGroup){
    console.log(f.value);
    return this.http.post<Curso>('http://localhost/api/php/cadastrar', f.value);
  }

  //Atualizar curso
  atualizarCurso(f : FormGroup){ }

  //Remover curso
  removerCurso(f : FormGroup){ }

}
