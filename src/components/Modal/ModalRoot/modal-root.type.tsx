import { ReactElement } from "react"

export type ModalRootProps = {
    children: ReactElement
    open: boolean
    handleClose: () => void
}