import axios from 'axios';
import { PhotosType, ProfileType, UserType } from '../types/types';

export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
  captchaIsRequired = 10,
}

let instance = axios.create({
  withCredentials: true,
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  headers: {
    'API-KEY': '60b88672-b40f-4a98-87f4-2eaf9580a4aa',
  },
});

//typing
type getUsersType = {
  items: Array<UserType>;
  totalCount: number;
  error: null | string;
};

type followUnfollowType = {
  resultCode: ResultCodesEnum;
  messages: Array<string>;
  data: {};
};
//typing

export const usersAPI = {
  getUsers(
    currentPage: string | number = 1,
    pageSize: number = 12,
    term?: string,
    friend?: boolean
  ) {
    return instance
      .get<getUsersType>(
        `users?page=${currentPage}&count=${pageSize}&term=${term}&friend=${friend}`
      )
      .then((response) => response.data);
  },

  getUsersPage(pageNumber: string | number, pageSize: number) {
    return instance
      .get<getUsersType>(`users?page=${pageNumber}&count=${pageSize}`)
      .then((response) => response.data);
  },

  getProfile(userId: string) {
    console.warn('Obsolete method. Please profileAPI object');
    return profileAPI.getProfile(userId);
  },

  follow(id: number) {
    return instance.post<followUnfollowType>(
      `https://social-network.samuraijs.com/api/1.0/follow/${id}`
    );
  },

  unfollow(id: number) {
    return instance.delete<followUnfollowType>(
      `https://social-network.samuraijs.com/api/1.0/follow/${id}`
    );
  },
};

//typing
type updateStatusType = {
  resultCode: ResultCodesEnum;
  fieldsErrors: Array<any>;
  messages: Array<string>;
  data: {};
};

type savePhotoType = {
  resultCode: ResultCodesEnum;
  messages: Array<string>;
  data: {
    small: string | null;
    large: string | null;
  };
};

type updateProfileType = {
  resultCode: ResultCodesEnum;
  messages: Array<string>;
  data: PhotosType;
};
//typing

export const profileAPI = {
  getProfile(userId: string) {
    // console.warn('Obsolete method. Please profileAPI object');
    return instance
      .get<ProfileType>(`profile/${userId}`)
      .then((response) => response.data);
  },

  getStatus(userId: string) {
    return instance.get<string>(`profile/status/` + userId);
  },

  updateStatus(status: string) {
    return instance.put<updateStatusType>(`profile/status`, { status: status });
  },

  savePhoto(photo: string) {
    const formData = new FormData();
    formData.append('image', photo);
    return instance.put<savePhotoType>(`/profile/photo`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  },

  updateProfile(dataForm: ProfileType) {
    return instance.put<updateProfileType>(`/profile`, dataForm);
  },
};

//typing
type MeResponseType = {
  data: {
    id: number;
    email: string;
    login: string;
  };
  resultCode: ResultCodesEnum;
  messages: Array<string>;
};

type LoginResponseType = {
  data: {
    userId: number;
  };
  resultCode: ResultCodesEnum;
  messages: Array<string>;
};

//typing
export const authAPI = {
  me() {
    return instance.get<MeResponseType>('auth/me').then((res) => res.data);
  },

  login(data: {
    email: string;
    password: string;
    rememberMe: boolean;
    captcha?: any;
  }) {
    return instance
      .post<LoginResponseType>('/auth/login', data)
      .then((res) => res.data);
  },

  logout() {
    return instance.delete('/auth/login').then((res) => res.data);
  },
};
