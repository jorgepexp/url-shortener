import { ObjectId } from 'mongodb';

export default class Link {
  constructor(
    public url: String,
    public shortenedUrl: String,
    public createdAt: Date,
    public id?: ObjectId
  ) {}
}
