import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDCspziOj1F2BLx9E8cFLkWudJvDXCWiNU",
  authDomain: "codecraft-77886.firebaseapp.com",
  projectId: "codecraft-77886",
  storageBucket: "codecraft-77886.firebasestorage.app",
  messagingSenderId: "139447638748",
  appId: "1:139447638748:web:4e02a1aa90043bd459b219",
  measurementId: "G-BX8907D5DG"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);