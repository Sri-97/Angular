import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer=false;
  Name='Swamy publishers';
  serverName='Server Name';

  constructor(){
    setTimeout( ()=> {
      this.allowNewServer=true;},2000);
    }

  ngOnInit(){}

  onChangeName(){
    this.Name='Sridhar';
    if(this.serverName!='Server Name'){
      this.serverName==this.serverName;
    }
  }
}
