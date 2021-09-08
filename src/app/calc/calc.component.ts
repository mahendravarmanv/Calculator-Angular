import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss']
})
export class CalcComponent implements OnInit {
  result:string = '';
  longButtons:string[] = ["AC" , "CE"];
  buttons:string[] = ['%' , '/', '7' , '8' , '9', '*', '4' , '5' , '6', '-','1','2','3','+','.','0','=']
  constructor() { }
  private prevValue: string = "";
  private currValue: string = "";
  ngOnInit(): void {
  }
  addToExpression(value:string){
    if(this.result != ''){
      this.prevValue = this.currValue
      this.currValue = value;
    }
    if(value == 'AC'){
      this.result = ''
    }else if(value == 'CE'){
      this.result = this.prevValue != "=" ? this.result.slice(0,-1):this.result;
    }else if(value == "="){
      this.result = eval(this.result);
    }else{
      this.result += value;
    }
  }

}
