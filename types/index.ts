export type Store = {
  isOpen: boolean;
  isOpenMenu: (option: boolean) => void;
};

export type listMenuProps = {
  title: string;
  link: string;
};
export type listAboutProps = {
  icon: string;
  title: string;
  content: string;
};
export type CardProps = {
  title: string;
  content: string;
};
export type ButtonProps = {
  content: string;
  styleButton?: string;
};
export type SingInProps = {
  email: string;
  password: string;
};
export type SingUpProps = SingInProps & {
  name: string;
};
export type CommentType = {
  id:       string;
  author: Author;
  content:  string;
  postId:   string;
  createAt: string;
  updateAt: string;
}
export type Author  ={
  name: string;
  id  : string,
}
export type PostType  = {
  id:          string;
  title:       string;
  description: string;
  content:     string;
  keywords:    string[];
  links:       string[];
  createAt:    Date;
  updateAt:    Date;
  comment:     CommentType[];
  image:       string;
  author:      Author;
}