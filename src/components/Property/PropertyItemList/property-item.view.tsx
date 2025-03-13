import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import CancelIcon from '@mui/icons-material/Cancel';
import { PropertyItemListProps } from "./property-item.type";

export default function PropertyItemListView({ propertyGroups, properties, removeProperty, updateProperty }: PropertyItemListProps) {
    return (
        <>
            {properties.map((item, index) => (
                <div key={index} className='mt-4 flex justify-between items-center'>
                    <div onClick={() => removeProperty(item.id)}>
                        <CancelIcon cursor={'pointer'} color='primary' />
                    </div>
            
                    <FormControl sx={{ width: 160 }}>
                        <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={item.type}
                            label="Tipo"
                            size='small'
                            onChange={(e) => updateProperty(item.id, 'type', e.target.value)}
                        >
                            <MenuItem value={'string'}>string</MenuItem>
                            <MenuItem value={'number'}>number</MenuItem>
                            <MenuItem value={'date'}>date</MenuItem>
                            <MenuItem value={'datetime'}>datetime</MenuItem>
                            <MenuItem value={'enumeration'}>enumeration</MenuItem>
                            <MenuItem value={'bool'}>bool</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl sx={{ width: 160 }}>
                        <InputLabel id="demo-simple-select-label">Objeto</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={item.objectType}
                            label="Objeto"
                            size='small'
                            onChange={(e) => updateProperty(item.id, 'objectType', e.target.value)}
                        >
                            <MenuItem value={'contacts'}>Contato</MenuItem>
                            <MenuItem value={'companies'}>Empresa</MenuItem>
                            <MenuItem value={'deals'}>Negócio</MenuItem>
                            <MenuItem value={'tickets'}>Ticket</MenuItem>
                        </Select>
                    </FormControl>

                    <FormControl sx={{ width: 160 }}>
                        <InputLabel id="demo-simple-select-label">Nome do Grupo</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={item.groupName}
                            label="Objeto"
                            size='small'
                            onChange={(e) => updateProperty(item.id, 'groupName', e.target.value)}
                        >
                        {propertyGroups[item.objectType]?.map((groupName) => (
                                <MenuItem key={groupName} value={groupName}>{groupName}</MenuItem>
                        ))}
                        </Select>
                    </FormControl>
            
                    <TextField 
                        id="outlined-basic" 
                        label="Nome interno" 
                        variant="outlined" 
                        size='small'
                        value={item.name}
                        placeholder="meu_campo_personalizado"
                        onChange={(e) => {
                            const value = e.target.value.replace(/\s+/g, '_').toLowerCase(); // Converte para snake_case
                            updateProperty(item.id, 'name', value);
                        }}
                    />
            
                    <TextField 
                        id="outlined-basic" 
                        label="Nome" 
                        variant="outlined" 
                        size='small'
                        value={item.label}
                        onChange={(e) => updateProperty(item.id, 'label', e.target.value)}
                    />

                    <FormControl sx={{ width: 160 }}>
                        <InputLabel id="demo-simple-select-label">Tipo de Campo</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={item.fieldType}
                            label="Tipo de Campo"
                            size='small'
                            onChange={(e) => updateProperty(item.id, 'fieldType', e.target.value)}
                        >
                            <MenuItem value={'text'}>text</MenuItem>
                            <MenuItem value={'textarea'}>textarea</MenuItem>
                            <MenuItem value={'date'}>date</MenuItem>
                            <MenuItem value={'file'}>file</MenuItem>
                            <MenuItem value={'number'}>number</MenuItem>
                            <MenuItem value={'select'}>select</MenuItem>
                            <MenuItem value={'radio'}>radio</MenuItem>
                            <MenuItem value={'checkbox'}>checkbox</MenuItem>
                            <MenuItem value={'booleancheckbox'}>booleancheckbox</MenuItem>
                        </Select>
                    </FormControl>
                </div>
            ))}
          </>
    )
}