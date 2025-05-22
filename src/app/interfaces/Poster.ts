export interface Poster {
  _id: string;
  type: string;
  likes: number;
  date: string;
  author: User;
  comments: Comments[];
  content: string;
}

interface User {
  id: string;
  name: string;
  email: string;
  username: string;
  phone: string;
  followers: string[];
  following: string[];
  date_birth: string;
  avatar: string;
}

interface Comments {
  userId: string;
  comment: string;
}
