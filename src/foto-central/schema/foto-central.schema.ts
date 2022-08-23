import { Schema } from 'mongoose';

export const FotoCentralSchema = new Schema({
  nombre: {
    type: String,
    require: true,
  },
  posicionFotoCentralEnY: {
    type: Number,
    default: 50,
  },
});
