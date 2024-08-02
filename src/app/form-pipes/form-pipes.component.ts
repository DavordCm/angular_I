import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-form-pipes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-pipes.component.html',
  styleUrl: './form-pipes.component.css'
  
})
export class FormPipesComponent {

  alumnos =[
    {nombre:"Ugaz"},
    {nombre:"Gamara"},
    {nombre:"Carbajo"},
    {nombre:"Polleri"},
    {nombre:"Rojas"}
  ]

  fechaActual=new Date()
  mostrarResultado = 0

  curso = [
    {nombre: "Desarrollo Web", profesor: "Damaso Lopez", precio: 250.0},
    {nombre: "proyecto certificado", profesor: "Marco Villa", precio: 150.0},
    {nombre: "Ingles tecnico", profesor: "Maria chavez", precio:200.0},
    {nombre: "Servicio web I", profesor: "Siverio Ramos", precio: 200.0}
  ]
  mostrarAlumnos(){
    this.mostrarResultado = 1
  }
  mostrarCursos(){
    this.mostrarResultado = 0
  }

}
