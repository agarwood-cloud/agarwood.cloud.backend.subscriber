import { Component, OnInit } from '@angular/core';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-chat',
  template: `<router-outlet></router-outlet>`
})
export class ChatComponent implements OnInit {

  public constructor() { }

  public ngOnInit(): void {
    console.log('aaaa', localStorage.getItem('userInfo'));
    const socket = io('http://localhost:3000/chat', {
      auth: {
        Authorization: `${localStorage.getItem('userInfo')}`,
        id: JSON.parse(
          localStorage.getItem('userInfo') as string
        ).id
      }
    });
    console.log('bbb');

    socket.emit('wechat.message', { hello: 'world-----', a: 'b' })
    
    // client-side
    socket.on("connect", () => {
      console.log(socket.id);
    });

    socket.on("disconnect", () => {
      console.log(socket.id); // undefined
    });

    socket.on("hello", (event) => {
      console.log('event', event); // undefined
    });
  }

}
