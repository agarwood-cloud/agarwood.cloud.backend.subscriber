import { Component, OnInit } from '@angular/core';
import * as dayjs from 'dayjs';
import { ToastService } from 'ng-devui/toast';
import { ChatSocketService } from '../services/chat-socket.service';

@Component({
  selector: 'app-chat-content',
  templateUrl: './chat-content.component.html',
  styleUrls: ['./chat-content.component.scss']
})
export class ChatContentComponent implements OnInit {

  /**
   * @private
   */
  private readonly chatSocket: ChatSocketService;

  /**
   * @private
   */
  private readonly toast: ToastService;

  /**
   * message content
   */
  public messageContent: string;

  /**
   * constructor
   *
   * @param chatSocket ChatSocketService
   * @param toast ToastService
   */
  public constructor(chatSocket: ChatSocketService, toast: ToastService) {
    this.chatSocket = chatSocket;
    this.toast = toast;
  }

  public ngOnInit(): void {
    console.log('ChatContentComponent');
  }

  /**
   * send text message to user
   */
  public sendMessage(): void {
    // 如果空值，不能发送
    if (!this.messageContent) {
      this.toast.open({
        value: [{ severity: 'info', content: 'Please Enter!' }],
      });
      return;
    }

    // send to user
    const message = this.messageContent;
    // todo 用户的openid信息
    this.chatSocket.sendTextMessage('openid', message);
    // 清空消息框
    this.messageContent = '';
  }

  /**
   * send image message by paste event
   */
  public sendClipboardImage(event): void {
    // Is the clipboardData feature supported
    if (!(event.clipboardData && event.clipboardData.items)) {
      return;
    }

    for (let i = 0, len = event.clipboardData.items.length; i < len; i++) {
      const item = event.clipboardData.items[i];
      // Is the item a file?
      if (item.kind === 'file') {
        const blob = item.getAsFile();
        if (blob.size === 0) {
          return;
        }
        const formData = new FormData();
        // 使用时间戳作为文件名称
        formData.append(`${dayjs().unix()}.${dayjs().millisecond()}`, blob);
        // 用于预览
        // const reader = new FileReader();
        // reader.onload = (evt) => {
        //   console.log(evt.target.result);
        // };
        // reader.readAsText(blob);

        this.chatSocket.uploadImage(formData).subscribe((res: any) => {
          // todo 待加入发送socket 消息
          // res 的格式为: { data: [{ imageUrl: 'http://xxx.com/xxx.png', mediaInfo: xxx }] }

          this.chatSocket.sendImageMessage('openid', 'url');
        });

        // 阻止默认行为即不让剪贴板内容在div中显示出来
        event.preventDefault();
      }
    }
  }

}
