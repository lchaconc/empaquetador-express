import mongoose from 'mongoose';



export default async function conectDB() {
 const db =  await mongoose.connect('mongodb://127.0.0.1:27017/empaquetador-express');
 console.log("DB", db);
  
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}