export interface User {
  name: string;
  avatar: string;
  phone: string;
}

export interface UserList extends User {
  lasted_chat: string;
}
