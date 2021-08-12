import { Component} from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'uriel';
  nombreUpper: string = 'URIEL';
  nombreCompleto: string = 'urIel MoRa';

  fecha: Date = new Date(); //fecha del dia de hoy
}
