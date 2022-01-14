export interface TextMessage {
  id?: string | number;
  officialAccountId: string | number;
  toUserName: string;
  fromUserId: string;
  // fromUserName: string;
  createdAt: string;
  msgType: 'text.message' | 'server.text.message';
  content: string;
  sender: 'user' | 'customer';
}

export interface ImageMessage {
  id?: string | number;
  officialAccountId: string | number;
  toUserName: string;
  fromUserId: string;
  // fromUserName: string;
  createdAt: string;
  msgType: 'image.message' | 'server.image.message';
  mediaId: string;
  imageUrl: string;
  sender: 'user' | 'customer';
}

export interface NewsItemMessage {
  id?: string | number;
  officialAccountId: string | number;
  toUserName: string;
  fromUserId: string;
  // fromUserName: string;
  createdAt: string;
  msgType: 'news.item.message' | 'server.news.item.message';
  sender: 'user' | 'customer';
  title: string;
  description: string;
  imageUrl: string;
  // url: string;
}

export interface VoiceMessage {
  id?: string | number;
  officialAccountId: string | number;
  toUserName: string;
  fromUserId: string;
  // "fromUserName": string;
  createdAt: string;
  msgType: 'voice.message' | 'server.voice.message';
  mediaId: string;
  voiceUrl: string;
  sender: 'user' | 'customer';
}

export interface VideoMessage {
  id?: string | number;
  officialAccountId: string | number;
  toUserName: string;
  fromUserId: string;
  // "fromUserName":string;
  createdAt: string;
  msgType: 'video.message' | 'server.video.message';
  title: string;
  description: string;
  mediaId: string;
  thumbMediaId: string;
  videoUrl: string;
  sender: 'user' | 'customer';
}
