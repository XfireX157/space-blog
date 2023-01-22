import { ReactNode } from "react";

export interface IModal {
    icon: ReactNode
    info: string
    msg: string
    onClick: () => void
}