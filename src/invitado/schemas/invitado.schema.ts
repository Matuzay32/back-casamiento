import { Schema } from 'mongoose';

export const InvitadoSchema = new Schema({
  nombre: {
    type: String,
    require: true,
  },

  apellido: {
    type: String,
    require: true,
  },

  cantidad: {
    type: Number,
    require: true,
  },

  estado: {
    type: String,
    default: 'Confirmado',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // user: { type: Schema.Types.ObjectId, ref: 'Users' },
});
