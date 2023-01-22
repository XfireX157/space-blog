export interface IOpen {
    open: {
        modalNewList: boolean
        modal: boolean
        form: boolean
        type: string
      }
      setOpen: React.Dispatch<React.SetStateAction<{
        modalNewList: boolean
        modal: boolean
        form: boolean
        type: string
      }>>
}