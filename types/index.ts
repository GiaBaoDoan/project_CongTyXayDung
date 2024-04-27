export type Store = {
    isOpen : boolean
    isOpenMenu : (option : boolean) => void
   
}
export type UserType = {
    email  : string,
    name : string,
    id : string,
    verified : boolean
}
export type UserStore = {
    user : UserType,
    setUser : (user : UserType) => void, 
}

export type listMenuProps = {
    title  :string,
    link : string
}
export type listAboutProps = {
    icon : string,
    title : string,
    content : string,
}
export type CardProps = {
    title : string,
    content : string,
}
export type ButtonProps = {
    content : string,
    styleButton? : string
} 
export type SingInProps = {
    email  : string,
    password : string,
}
export type SingUpProps  = SingInProps & {
  name : string
}