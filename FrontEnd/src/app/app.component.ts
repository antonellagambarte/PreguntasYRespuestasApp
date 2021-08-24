import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
listEstudiante: any[]=[
  {nombre:'Antonella Gambarte', estado:'Promocionado'},
  {nombre:'Margarita Quinteros', estado:'Promocionado'},
  {nombre:'Antonella Gambarte', estado:'Regular'},
  {nombre:'Nerea Gambarte', estado:'Libre'}

]

mostrar=true;

toogle():void{
this.mostrar=!this.mostrar
}

}
