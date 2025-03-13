import { useState } from "react";
import { PropertyType } from "../../../modules/Property/property.type";
import { propertySchema } from "../../../modules/Property/property.schema";
import { z } from "zod";
import { toast } from "react-toastify";
import { checkPropertyExistis, createProperty, xlsxGenerate } from "../../../modules/Property/property.server";

type usePropertyFooterProps = {
    properties: PropertyType[]
}

export default function usePropertyFooter({ properties }: usePropertyFooterProps) {
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [open, setOpen] = useState(false)
    const [serverPropertiesLogs, setServerPropertiesLogs] = useState<{ name: string, message: string, group: string, type: string }[]>([]);

    const validateProperties = () => {
        const newErrors: { [key: string]: string } = {};
        properties.forEach((property) => {
            try {
                propertySchema.parse(property);
            } catch (e) {
                if (e instanceof z.ZodError) {
                    e.errors.forEach((err) => {
                        newErrors[property.name] = err.message;
                    });
                }
            }
        });
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    
    const createProperties = async () => {
        setServerPropertiesLogs([])
        if (!validateProperties()) {
            toast('Por favor, preencha todos os campos!', { type: 'error' })
            return;
        }
        
        const groupedProperties = new Map<string, PropertyType[]>();

        properties.forEach(property => {
            if (!groupedProperties.has(property.objectType)) {
                groupedProperties.set(property.objectType, [])
            }
            groupedProperties.get(property.objectType)!.push(property)
        })

        for (const [objectType, properties] of groupedProperties) {
            const propertiesToCreate: PropertyType[] = [];

            for (const property of properties) {
                const exists = await checkPropertyExistis(objectType, property.name);
                if (!exists) {
                    propertiesToCreate.push(property);
                } else {
                    toast(`A propriedade ${property.name} já existe em ${objectType}`, { type: 'warning' });
                    setServerPropertiesLogs((prevState) => [
                        ...prevState,
                        { name: property.name, message: `already exists in`, group: objectType, type: property.type }
                    ])
                    console.log(`Property ${property.name} already exists in ${objectType}`);
                }
            }

            if (propertiesToCreate.length > 0) {
                try {
                    const response = await createProperty( objectType, propertiesToCreate );
                    const results = response.data.results
                    toast(`${propertiesToCreate.length} propriedades criadas em ${objectType}!`, { type: 'success' });
                    for (const property of results) {
                        setServerPropertiesLogs((prevState) => [
                            ...prevState,
                            { name: property.name, message: "Criado com sucesso!", group: property.groupName, type: property.type }
                        ])
                    }

                    console.log('Response', response)
                } catch (error) {
                    toast(`Não foi possível criar as propriedades!`, { type: 'error' });
                    console.error('Error', error)
                    throw error;
                }
            }
        }
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleExecute = async () => {
        try {
            const response = await xlsxGenerate(serverPropertiesLogs)
            console.log('Response', response)
        } catch (error) {
            throw error
        }
    }
    console.log('errors', errors)
    return {
        open,
        setOpen,
        serverPropertiesLogs,
        setServerPropertiesLogs,
        validateProperties,
        createProperties,
        handleExecute,
        handleClose
    }
}