import { Button } from "@mui/material";
import Modal from "../../Modal";
import { UsePropertyFooterType } from "./property-footer.type";

interface PropertyFooterVieeProps extends UsePropertyFooterType {
    clearProperties: () => void
}

export default function PropertyFooterView(props: PropertyFooterVieeProps) {
    const { createProperties, handleClose, handleExecute, clearProperties, open } = props
    return (
        <>
            {open && 
                <Modal.Root open={open} handleClose={handleClose}>
                    <Modal.Box 
                        title="Deseja baixar o relatório?" 
                        text="Deseja baixar a planilha de logs das propriedades?" 
                    >

                        <Modal.Footer handleClose={handleClose} handleExecute={handleExecute} />
                    </Modal.Box>
                </Modal.Root> 
            }
            <footer className='flex justify-end mt-7 gap-2'>
                <Button variant="contained" color='error' onClick={() => clearProperties()}>Limpar</Button>
                <Button variant="contained" onClick={() => createProperties()}>Criar</Button>
            </footer>
        </>
    )
}