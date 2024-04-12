export type Store = {
    isOpen : boolean
    isOpenMenu : (option : boolean) => void
}
export type TitleProps = {
    content : string
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