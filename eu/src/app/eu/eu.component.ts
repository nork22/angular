import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eu',
  templateUrl: './eu.component.html',
  styleUrls: ['./eu.component.css']
})  

export class EuComponent implements OnInit {

 
      botaoclicado(){
        alert("ai Doeu,voce me  clicou");
      }

    
    
  constructor() {} 

  
  
   ngOnInit(): void {
  }

}


