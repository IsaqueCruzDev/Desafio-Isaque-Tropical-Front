import { Button } from "@mui/material"
import { PropertyHeaderViewProps } from "./property-header.type"

export default function PropertyHeaderView({ fileInputRef, addProperty, handleFileChange, handleClickButton }: PropertyHeaderViewProps) {
    return (
        <div className='flex justify-between items-center'>
            <h1 className='text-xl'>Propriedades</h1>
            <div className="flex gap-2">
            <input
                type="file"
                accept=".csv, .xlsx"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />
                <Button variant="contained" color="success" onClick={handleClickButton}>Enviar CSV/Excel</Button>
                <Button variant="outlined" onClick={addProperty}>Adicionar Propriedade</Button>
            </div>
        </div>
    )
}