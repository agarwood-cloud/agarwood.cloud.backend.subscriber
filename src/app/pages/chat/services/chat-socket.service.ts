import { Injectable } from '@angular/core';
import * as dayjs from 'dayjs';
import { io, Socket } from 'socket.io-client';
import { Websocket} from '../../../../config/websocket';
import { ImageMessage, NewsItemMessage, TextMessage, VideoMessage, VoiceMessage } from './message';

@Injectable()
export class ChatSocketService  {

  /**
   * socket.io client
   */
  public socket: Socket;

  // init socket.io
  public constructor() {
    // login
    this.socket = io(`${Websocket.HOST}:${Websocket.PORT}/chat`, {
      auth: {
        Authorization: `${localStorage.getItem('token')}`,
        id: JSON.parse(
          localStorage.getItem('userInfo')
        ).id
      }
    });
  }

  /**
   * Get officialAccountId params
   *
   * @private
   */
  private static getOfficialAccountId (): number|string {
    // todo
    return 'string';
  }

  /**
   * Send text message to tencent
   *
   * @param toUserName
   * @param content
   */
  public sendTextMessage(toUserName: string, content: string): void {
    const message: TextMessage = {
      officialAccountId: ChatSocketService.getOfficialAccountId(),
      toUserName: toUserName,
      fromUserId: JSON.parse(
        localStorage.getItem('userInfo')
      ).id,
      createdAt: dayjs().format('YYYY-MM-DD HH:mm:ss').toString(),
      msgType: 'text.message',
      content: content,
      sender:  'customer',
    };
    this.socket.emit('wechat.message', message);
  }

  /**
   * Send Image Message to tencent
   *
   * @param mediaId
   * @param imageUrl
   */
  public sendImageMessage(mediaId: string, imageUrl: string): void {
    const message: ImageMessage = {
      officialAccountId: ChatSocketService.getOfficialAccountId(),
      toUserName: '',
      fromUserId: JSON.parse(
        localStorage.getItem('userInfo')
      ).id,
      createdAt: dayjs().format('YYYY-MM-DD HH:mm:ss').toString(),
      msgType: 'image.message',
      imageUrl: imageUrl,
      mediaId: mediaId,
      sender:  'customer',
    };

    // emit event
    this.socket.emit('wechat.message', message);
  }

  /**
   * Send Video Message To Tencent
   *
   * @param toUserName
   * @param videoUrl
   * @param mediaId
   * @param title
   * @param thumbMediaId
   * @param description
   */
  public sendVideoMessage(
    toUserName: string,
    videoUrl: string,
    mediaId: string,
    title: string,
    thumbMediaId: string,
    description: string
  ): void {
    const message: VideoMessage = {
      createdAt: dayjs().format('YYYY-MM-DD HH:mm:ss').toString(),
      description: description,
      fromUserId: JSON.parse(
        localStorage.getItem('userInfo')
      ).id,
      mediaId: mediaId,
      msgType: 'video.message',
      officialAccountId: ChatSocketService.getOfficialAccountId(),
      sender: 'customer',
      thumbMediaId: thumbMediaId,
      title: title,
      toUserName: toUserName,
      videoUrl: videoUrl,
    };

    this.socket.emit('wechat.message', message);
  }

  /**
   * Send News Items Message To Tencent (Such as project items)
   *
   * @param toUserName
   * @param imageUrl
   * @param title
   * @param description
   */
  public sendNewsItemMessage(toUserName: string, imageUrl: string, title: string, description: string): void {
    const message: NewsItemMessage = {
      createdAt: dayjs().format('YYYY-MM-DD HH:mm:ss').toString(),
      description: description,
      fromUserId: JSON.parse(
        localStorage.getItem('userInfo')
      ).id,
      imageUrl: imageUrl,
      msgType: 'news.item.message',
      officialAccountId: ChatSocketService.getOfficialAccountId(),
      sender: 'customer',
      title: title,
      toUserName: toUserName,
    };

    this.socket.emit('wechat.message', message);
  }

  /**
   * Send Voice Message to tencent
   *
   * @param toUserName
   * @param voiceUrl
   * @param mediaId
   */
  public sendVoiceMessage(toUserName: string, voiceUrl: string, mediaId: string): void {
    const message: VoiceMessage = {
      createdAt: dayjs().format('YYYY-MM-DD HH:mm:ss').toString(),
      fromUserId: JSON.parse(
        localStorage.getItem('userInfo')
      ).id,
      mediaId: mediaId,
      msgType: 'voice.message',
      officialAccountId: ChatSocketService.getOfficialAccountId(),
      sender: 'customer',
      toUserName: toUserName,
      voiceUrl: voiceUrl
    };

    this.socket.emit('wechat.message', message);
  }

}
