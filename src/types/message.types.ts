export interface Message {
    id: string;
    content: string;
    timestamp: Date;
    isAnonymous: boolean;
    userId?: string;
  }
  
  export interface MessageResponse {
    success: boolean;
    message?: Message;
    error?: string;
  }
  

