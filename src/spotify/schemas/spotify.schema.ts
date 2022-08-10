import { Schema } from 'mongoose';

export const SpotifySchema = new Schema({
  linkCancion: {
    type: String,
    require: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  // user: { type: Schema.Types.ObjectId, ref: 'Users' },
});
