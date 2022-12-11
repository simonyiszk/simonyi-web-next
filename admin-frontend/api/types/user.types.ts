export interface UserModel {
  email: string;
  username: string;
  lastName: string;
  firstName: string;
  imageUrl?: string;
}

export interface UserView {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  imageUrl?: string;
  approved: boolean;
}

export interface CreateUserView {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
}

export interface UpdateUserView {
  username: string;
}

export interface UpdateUserImageView {
  imageFile: File;
}
