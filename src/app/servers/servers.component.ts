import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer=false;

  serversCreationStatus='no server yet';

  serverName='';

  serverCreated=false;

  servers=["server1","server2"];


  constructor() { 
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    this.serversCreationStatus="server was created "+this.serverName;
  }
  onUpdateServerName(event:Event){
    // console.log(event.target.value)
    this.serverName=(<HTMLInputElement>event.target).value;

  }

}
