# FIRESTORE DATABASE

![demo](https://miro.medium.com/v2/resize:fit:1400/1*WMrLw9ZHuo6zXMzINtgLQA.png)

Firestore, also known as Cloud Firestore, is a NoSQL document database that is part of the Firebase suite of products. It is designed to store, sync, and query data for mobile, web, and server development. It provides robust and scalable backend services for applications, enabling real-time data synchronization and offline capabilities.

## 🔥 KEY FEATURES

#### 1. Real-time Data Synchronization:
Firestore enables real-time synchronization of data across multiple clients. When data is updated, all connected clients receive the changes instantly, making it ideal for collaborative applications and real-time features.

#### 2. Offline Support:
Firestore supports offline data access and synchronization. This means that applications can continue to function and store data even when there is no network connectivity. Once the device is back online, Firestore syncs the local changes with the cloud.

#### 3. Flexible Data Model:
Firestore uses a document-oriented data model, which allows developers to store data in the form of documents. Each document contains key-value pairs and can be nested within collections, providing a flexible and scalable way to organize data.

#### 4. Powerful Querying:
Firestore offers a rich set of querying capabilities, allowing developers to filter, sort, and paginate data. Queries are indexed automatically, making data retrieval fast and efficient.

#### 5. Security Rules:
Firestore comes with a powerful security rules engine that enables developers to define fine-grained access controls for their data. These rules can be based on authentication status, user roles, and more, ensuring that data is protected and accessible only to authorized users.

#### 6. Serverless Architecture:
Firestore is a fully managed, serverless database. This means that developers do not need to worry about managing servers or scaling infrastructure. Firebase takes care of these aspects, allowing developers to focus on building their applications.

--- 

> [!IMPORTANT]
> To keep data in your apps current, without retrieving your entire database each time an update happens, add realtime listeners. Adding realtime listeners to your app notifies you with a data snapshot whenever the data your client apps are listening to changes, retrieving only the new changes.

## 🔥 GET STARTED

```jsx
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
```

This code imports necessary modules from the Firebase JavaScript library. `initializeApp` is used to initialize your Firebase project, while `getFirestore` provides functionality for interacting with the Cloud Firestore database, allowing you to store and retrieve data in your web application.

```js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // <-- import

const firebaseConfig = {
    /*
    CONFIGURATION
    */
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app); // <------ firestore config
```

## 🔥 ADD DATA