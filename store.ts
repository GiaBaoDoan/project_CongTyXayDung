import { create } from "zustand";
import { PostType, Store } from "./types";
import { instance } from "./config";
import { toast } from "react-toastify";
import { _redirect } from "./action";
interface IUserState {
  user: any;
  loading: boolean;
  logout : () => Promise<void>;
  setUser: () => Promise<void>;
}
interface postsStateProps {
  posts : PostType, 
  myPost : any
  detailPost : any,
  setMyPost  : (uid : string,page:number) => Promise<void>
  setPost : (page:number) => Promise<void>,
  setDetailPost : (id : any) => Promise<void>
}
interface commentsStateProps {
  comments : [],
  maxCount : number,
  setCommentInpost : (postId :any,page?:number) => Promise<void>,
}
export const store = create<Store>((set) => ({
  isOpen: false,
  isOpenMenu: (option: boolean) => set({ isOpen: option }),
}));
export const userState = create<IUserState>((set) => ({
  user: null,
  loading: false,
  setUser: async () => {
    const res = await instance.get(`/account/@me`);
    set({ loading: true });
    try {
      if (res.status === 200) {
        set({ user: res.data });
        set({loading : false})
      }
    }
    catch(err) {
       console.log(err)
       set({loading : false})
    }
  },
  logout : async () => {
    await instance.post('/account/logout/');
    set({user : null });
    toast.success('Dang xuat thanh cong');
    _redirect('/')
  }
}));
export const postState = create<postsStateProps>((set) => ({
    posts : {count : 0,data :[]},
    detailPost : null,
    myPost : null,
     setPost : async (page : number) => {
      try {
      const res = await instance.get(`/post?count=4&page=${page}`);
      if (res.status === 200) {
        set({ posts: res.data });
      }
      }
      catch(err:any) {
        console.log(err.response.data)
      } 
    },
    setDetailPost : async (id:string) => {
      const res = await instance.get(`/post/${id}`);
      if (res.status === 200) {
        set({detailPost : res.data})
      }
    },
    setMyPost : async (uid : string,page ? :number) => {
      try {
            const res = await instance.get(`/post/me/?userId=${uid}&page=${page}&count=4`)
            set({myPost : res.data})
          }
          catch(err) {
            console.log(err)
          }
    }
 
}))
export const commentStore = create<commentsStateProps>((set) =>({
  comments : [],
  maxCount : 0,
  setCommentInpost : async(postId : any,page ?:number) => {
    const res = await instance.get(`/comment?postId=${postId}&count=3&page=${page}`);
    if (res.status === 200) {
      set({comments : res.data })
      // set({maxCount : res.data})
    }
  },
}))