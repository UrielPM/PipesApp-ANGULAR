import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'vuela'
})
export class VuelaPipe implements PipeTransform  {

   
    
    transform(valor:boolean ): string {
       
      

      //Operador ternario
      return(valor) 
                ? 'vuela'
                : 'no vuela';
       
    }
}