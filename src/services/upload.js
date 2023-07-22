import upload from './upload.json' assert { type: 'json' }
import { collection, addDoc } from 'firebase/firestore'
import { db } from './config.js'

const inventarioRef = collection(db, "inventario")

upload.forEach((item) => {
    addDoc(inventarioRef, item)
})