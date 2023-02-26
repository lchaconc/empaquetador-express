import { Schema, model } from "mongoose";

const textosSchema = new Schema({
  titulo: {
    type: String,
    required: true,
    trim: true,
  },
  instrucciones: {
    type: String,
    required: true,
    trim: true,
  },
  retroCorrecta: {
    type: String,
    required: true,
    trim: true,
  },
  retroIncorrecta: {
    type: String,
    required: true,
    trim: true,
  },
});

module.exports = model( "Textos", textosSchema );

