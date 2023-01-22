import { ReactNode } from "react";

export interface IButton {
    children: ReactNode
    classname: string
    onClick: () => void
}