import { Schema } from 'mongoose';

export const GaleriaSchema = new Schema({
  imagenes: {
    type: [
      {
        nombre: String,
      },
    ],
  },
});
