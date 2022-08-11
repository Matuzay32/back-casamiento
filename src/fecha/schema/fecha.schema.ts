import { Schema } from 'mongoose';

export const FechaSchema = new Schema({
  fecha: {
    type: String,
    require: true,
  },

  hora: {
    type: String,
    require: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  // user: { type: Schema.Types.ObjectId, ref: 'Users' },
});
