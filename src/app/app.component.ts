import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  alumnos =[
    {nombre:"Ugaz"},
    {nombre:"Gamara"},
    {nombre:"Carbajo"},
    {nombre:"Polleri"}
  ]

  fechaActual=new Date()
  mostrarResultado = 0

  curso = [
    {nombre: "Desarrollo Web", profeso: "Damaso Lopoez", precio: 2500},
    {nombre: "proyecto certificado", profesor: "Marco Villa", precio: 1500},
    {nombre: "Ingles tecnico", profesora: "Maria chavez", precio:2000},
    {nombre: "Servicio web I", profesor: "Siverio Ramos", precio: 2000}
  ]
  mostrarAlumnos(){
    this.mostrarResultado = 1
  }
  mostrarCursos(){
    this.mostrarResultado = 0
  }

}
