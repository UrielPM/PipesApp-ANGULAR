import { Component } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {

  //i18nselect
 nombre: string = ' Uriel';
genero: string = 'masculino';

invitarloMapa = {
  'masculino': 'invitarlo',
  'femenino' : 'invitarla'
}

//i18nPlural

clientes: string  [] = ['Maria','Juan', 'Uriel', 'Michelle', 'Pedro'];
clientesMap = {
  '=0': 'no tenemos ningún cliente esperando.', 
  '=1': 'tenemos un cliente esperando.', 
  '=2': 'tenemos 2 clientes esperando.', 
  'other': 'tenemos # clientes esperando.', 
}
  cambiarCliente(){
    this.nombre = 'Michelle';
    this.genero = 'femenino';
  }

  borrarCliente(){
    this.clientes.pop();
  }

  //keyValue PIPE
  persona= {
    nombre: 'Uriel',
    edad: 25,
    direccion: 'Veracruz, Mexico'
  }

  //Json Pipe

  heroes= [
    {
      nombre: 'Superman',
      vuela: true
    }, 
    {
      nombre: 'Robin',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    },
  ]

  // Async Pipe
  miObservable = interval(5000);

  valorPromesa = new Promise((resolve, reject) => {
    resolve( 'Tenemos Data de la promesa');
   setTimeout(() => {
     
   }, 3500);

   
});
}

