import { Request, Response } from 'express';
import firebase from 'firebase-admin'
import {MessagingPayload,MessagingOptions} from 'firebase-admin/messaging'

type FirebaseMessage = {
  registrationTokenOrTokens: string | string[],
  payload:MessagingPayload,
  options: MessagingOptions
}

export default class SendNotificationContoller {
  async handle(request: Request, response: Response) {
    
    const message:FirebaseMessage = {
      registrationTokenOrTokens: 'fGKDrTPnRa-tsSDevqMwGy:APA91bHIJTCTaOCXJN-y-e5UPcE3OdmJQwC1BW436rLM0PN17H-RgvjeQBw7rQriJmZNoKU1Kebv8pCn-6SpHSGlsqVKq8Ld09EeVtNcrfFp3JyyqWQaXKCpolaFgTNhpy7Y10TNAM0Z',
      payload:{
        data:{
          'Chave': 'Valor'
        },
        notification:{
          body: 'Corpo da Notificação',
          icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQokWfzxEmv7y5mC6SEAWatM9hqoue3opXWPg&usqp=CAU',
          color: '#f44',
          title: 'Titulo da notificação',
          //clickAction:''
        }, 
      },
      options:{
        priority: 'high'
      }
    }

    const firebaseResponse = await firebase.messaging().sendToDevice(
      message.registrationTokenOrTokens,
      message.payload,
      message.options,
    )
    
    return response.json(firebaseResponse);
  }
}