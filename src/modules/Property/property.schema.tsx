import { z } from "zod";

export const propertySchema = z.object({
    id: z.string(),
    type: z.string().nonempty("Tipo é obrigatório"),
    objectType: z.string().nonempty("Objeto é obrigatório"),
    groupName: z.string().nonempty("Nome do Grupo é obrigatório"),
    name: z.string().nonempty("Nome interno é obrigatório"),
    label: z.string().nonempty("Nome é obrigatório"),
    fieldType: z.string().nonempty("Tipo de Campo é obrigatório"),
});