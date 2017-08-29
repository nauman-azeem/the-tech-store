import { Component } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';

@Component({
  selector: 'qubap-plugin',
  templateUrl:'qubap.html',
  styleUrls: ['qubap.css']
})
export class QUBAngularPluginComponent {

  constructor(private http: Http){
  }

  isChatAreaOpen: boolean = false;
  messageBoxValue: String ;
  private messages = [];

  private toggleChatArea() {
    this.isChatAreaOpen = !this.isChatAreaOpen;
    if(this.isChatAreaOpen) {
      setTimeout(()=>{
        let objDiv = document.getElementById("chatArea");
        objDiv.scrollTop = objDiv.scrollHeight;
      }, 1);
    }
  }

  enterButton(event) {
    if(event.keyCode == 13 && this.messageBoxValue!==''){
      let theMessage: String = this.messageBoxValue;
      let url = 'http://localhost:3000';
      this.messageBoxValue = '';
      this.messages.push([theMessage, '...']);
      const reqBody = JSON.stringify({
        query: theMessage
      });
      const reqHeaders = new Headers();
      reqHeaders.append('Content-Type', 'application/JSON');
      setTimeout(() => {
        let objDiv = document.getElementById("chatArea");
        objDiv.scrollTop = objDiv.scrollHeight;
      },1);
      this.http.post(url, reqBody, {headers: reqHeaders}).subscribe(
        (data: Response) => {
          this.messages.pop();
          this.messages.push([theMessage, data.json().ans]);
          setTimeout(() => {
            let objDiv = document.getElementById("chatArea");
            objDiv.scrollTop = objDiv.scrollHeight;
          }, 1);
        }
      );
    }
  }
}