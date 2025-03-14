import { Modal } from "@mui/material";
import { ModalRootProps } from "./modal-root.type";

export default function ModalRootView({ open, handleClose, children }: ModalRootProps) {
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