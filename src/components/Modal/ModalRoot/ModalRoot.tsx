import { Modal } from "@mui/material";
import { ReactElement } from "react";

interface ModalRootProps {
    children: ReactElement
    open: boolean
    handleClose: () => void
}

export default function ModalRoot({ open, handleClose, children }: ModalRootProps) {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
           {children}
        </Modal>
    )
}