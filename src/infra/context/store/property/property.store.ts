import { create } from 'zustand'
import { v4 as uuidv4 } from 'uuid'
import { PropertyStoreType } from './property.store.type'
import { uploadFile } from '../../../../modules/Property/property.server';
import { PropertyType } from '../../../../modules/Property/property.type';

export const useStore = create<PropertyStoreType>((set) => ({
    properties: [{ id: uuidv4(), type: '', label: '', name: '', fieldType: '', groupName: '', objectType: '' }],

    addProperty: () => set((state) => ({
        properties: [...state.properties, { id: uuidv4(), type: '', label: '', name: '', fieldType: '', groupName: '', objectType: '' }]
    })),

    removeProperty: (id: string) => set((state) => ({
        properties: state.properties.filter((property) => property.id !== id)
    })),

    updateProperty: (id: string, field: string, value: string) => set((state) => ({
        properties: state.properties.map((item) =>
            item.id === id ? { ...item, [field]: value } : item
        )
    })),

    clearProperties: () => set(() => ({
        properties: []
    })),
    
    uploadFile: async (file: File) => {
        try {
            const response = await uploadFile(file);
    
            // Garante que response e response.data existam
            if (!response || !response.data) {
                console.error("Erro: response ou response.data é undefined", response);
                return;
            }
    
            // Verifica se response.data é uma string e faz o parse se necessário
            const data = typeof response.data === "string" ? JSON.parse(response.data) : response.data;
    
            // Garante que data é um array antes de chamar .map()
            if (!Array.isArray(data)) {
                console.error("Erro: dados retornados não são um array válido", data);
                return;
            }
    
            set(() => ({
                properties: data.map((item: PropertyType) => ({
                    id: uuidv4(),
                    type: item.type || '',
                    label: item.label || '',
                    name: item.name || '',
                    fieldType: item.fieldType || '',
                    groupName: item.groupName || '',
                    objectType: item.objectType || ''
                }))
            }));
        } catch (error) {
            console.error("Erro ao processar upload:", error);
            throw error;
        }
    }
}));