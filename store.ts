import { create } from "zustand";
import { Store } from "./types";
import { instance } from "./config";
interface IUserState {
  user: any;
  loading: boolean;
  setUser: () => Promise<void>;
}
interface postsStateProps {
  posts : [],
  detailPost : any,
  setPost : () => Promise<void>,
  setDetailPost : (id : any) => Promise<void>
}
interface commentsStateProps {
  comments : [],
  setCommentInpost : (postId :any) => Promise<void>,
}
export const store = create<Store>((set) => ({
  isOpen: false,
  isOpenMenu: (option: boolean) => set({ isOpen: option }),
}));
export const userState = create<IUserState>((set) => ({
  user: null,
  loading: true,
  setUser: async () => {
    const res = await instance.get("/account/");
    if (res.data.code === 200) {
      set({ user: res.data.data });
    }
    set({ loading: false });
  },
}));
export const postState = create<postsStateProps>((set) => ({
    posts : [],
    detailPost : null,
     setPost : async () => {
      const res = await instance.get("/post/");
      if (res.data.code === 200) {
        set({ posts: res.data.data });
      }
    },
    setDetailPost : async (id:any) => {
      const res = await instance.get(`/post?id=${id}`);
      if (res.data.code  ===200) {
        set({detailPost : res.data.data})
      }
    }
 
}))
export const commentStore = create<commentsStateProps>((set) =>({
  comments : [],
  setCommentInpost : async(postId : any) => {
    const res = await instance.get(`/comment?postId=${postId}`);
    if (res.data.code === 200) {
      set({comments : res.data.data })
    }
  },
}))