import { Button } from "@mui/material"

type ModalRootProps = {
    handleClose: () => void
    handleExecute: () => void
}

export default function ModalFooter({ handleExecute, handleClose }: ModalRootProps) {
    return (
        <footer className='flex justify-end mt-7 gap-2'>
            <Button variant="contained" color='error' onClick={handleClose}>Cancelar</Button>
            <Button variant="contained" onClick={handleExecute}>Baixar</Button>
        </footer>
    )
}