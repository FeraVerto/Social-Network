/*---------------------------Profile----------------------------*/
export type PhotosType = {
  small: string;
  large: string;
};

export type PostType = {
  id: number;
  message: string;
  like: number;
};

// export type ContactsType = {
//   github: string;
//   vk: string;
//   facebook: string;
//   instagram: string;
//   twitter: string;
//   website: string;
//   youtube: string;
//   mainLink: string;
// };

export type ContactsType = {
  [key: string]: string | undefined;
};

export type ProfileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  aboutMe: string;
  contacts: ContactsType;
  photos: PhotosType;
} | null;

export type UserType = {
  id: number;
  name: string;
  status: string;
  photos: PhotosType;
  followed: boolean;
};

export type ProfilePageType = {
  posts: Array<PostType>;
  profile: ProfileType;
  status: string;
};

/*---------------------------Profile----------------------------*/

/*---------------------------Dialogs----------------------------*/
export type DialogsItemType = {
  id: number;
  name: string;
  lastMessage: string;
  avatar: string;
};

export type DialogsPageType = {
  dialogs: Array<DialogsItemType>;
};

/*export type MessageType = {
    id: number
    name: string
    textMessage: string
}*/

/*export type MessagesPageType = {
    messages: Array<MessageType>
}*/
/*---------------------------Dialogs----------------------------*/
