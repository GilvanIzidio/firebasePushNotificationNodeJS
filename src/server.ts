import 'reflect-metadata';
import express from 'express';
import { routes } from './routes';
import firebase,{ServiceAccount} from 'firebase-admin'
import serviceAccount from './config/serviceAccountKey.json'

const app = express();

app.use(express.json());
app.use(routes);

const firebaseServiceApp = () => {

  const {private_key,client_email,project_id} = serviceAccount;

  const firebaseCredentials:ServiceAccount = {
    projectId: project_id,
    clientEmail: client_email,
    privateKey: private_key,
  }

  firebase.initializeApp({
    credential: firebase.credential.cert(firebaseCredentials)
  })
}

firebaseServiceApp()
app.listen(3000, () => console.log('Server running ✔'));