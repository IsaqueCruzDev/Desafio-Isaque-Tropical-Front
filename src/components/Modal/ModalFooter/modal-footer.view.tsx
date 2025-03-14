import { Button } from "@mui/material"
import { ModalFooterProps } from "./modal-footer.type"

export default function ModalFooterView({ handleExecute, handleClose }: ModalFooterProps) {
    return (
        <footer className='flex justify-end mt-7 gap-2'>
            <Button variant="contained" color='error' onClick={handleClose}>Cancelar</Button>
            <Button variant="contained" onClick={handleExecute}>Baixar</Button>
        </footer>
    )
}