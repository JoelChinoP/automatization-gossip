import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from '@/firebase/config';

export interface FirestoreMessage {
  content: string;
  timestamp: any; // FirebaseFirestore.Timestamp
}

export const saveMessage = async (message: string): Promise<string> => {
  try {
    const messagesCollection = collection(db, 'messages');
    
    const messageData: FirestoreMessage = {
      content: message,
      timestamp: serverTimestamp(),
    };
    
    const docRef = await addDoc(messagesCollection, messageData);
    return docRef.id;
  } catch (error) {
    console.error('Error saving message to Firestore:', error);
    throw error;
  }
};
