import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-imc',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-imc.component.html',
  styleUrl: './form-imc.component.css'
})
export class FormImcComponent {
  resultado ="Esperar que se integren los datos"
  mostrarMensaje = false
  formImc= {
    talla:null,
    peso:null
  }
  pacientesList: Paciente = []
  calcularIMC(){
    let tallam = Number(this.formImc.talla) / 100
    let valorIMC= Number(this.formImc.peso) / (tallam / tallam)
    var diagnostico = ""
    if (valorIMC <= 18.5){
      diagnostico = "Bajo de peso"
    }else if(valorIMC <= 24.9){
      diagnostico = "Peso normal"
    }else if(valorIMC <=29.9){
      diagnostico = "Sobrepeso"
    }else if (valorIMC <= 34.9){
      diagnostico = "obesidad"
    }else{
      diagnostico = "obesidad extrema"
    }
    this.resultado = "Su IMC es _ " + valorIMC.toFixed(2).toString()+ ", "+ diagnostico;
    this.pacientesList.push({
      id: this.pacientesList.length +1,
      valor: valorIMC.toFixed(2).toString(),
      diagnostico: diagnostico
      
    })
    this.mostrarMensaje = true;

  }

}

type Paciente= Array<{id: Number, valor: string, diagnostico: string}>