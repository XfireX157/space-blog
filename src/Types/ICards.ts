import { ReactNode } from "react"

export interface ICards {
    idProdutos: number
    nome: string
    category: string
    price: string
    image: string
}

export interface INewList {
    id?: number
    categoryName: string
}

export interface SearchCards {
    id?: number
    nome?: string
    image?: string
}

export interface ICardsUser {
    src?: string
    onClick?: () => void
    alt?: string
    children: ReactNode
}