import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform  {

   
    
    transform(valor:string, enMayuscula: boolean = true ): string {
       
       
       //if(enMayuscula ){
        //return valor.toLocaleUpperCase();
       //} else {
        //return valor.toLocaleLowerCase();
      // }

      //Operador ternario
      return(enMayuscula) 
                ? valor.toUpperCase() 
                : valor.toLocaleLowerCase();
       
    }
}