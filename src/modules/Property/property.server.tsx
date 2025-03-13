import { apiRequest } from '../../server/axios';
import { PropertyType } from './property.type';

const hubApi = apiRequest('/api/crm/v3/properties')
const flaskApi = apiRequest('http://127.0.0.1:5000')
const token = import.meta.env.VITE_APP_AUTH_TOKEN
console.log('Auth', token)

export const checkPropertyExistis = async (objectType: string, propertyName: string): Promise<boolean> => {
    try {
        const response = await hubApi.get(`/${objectType}/${propertyName}`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        return response.status === 200;
    } catch (error: any) {
        if (error && error.response && error.response.status === 404) {
            return false;
        }
        console.error('Error checking property existence', error);
        throw error;
    }
}

export const createProperty = async (objectType: string, properties: PropertyType[]) => {
    try {
        const response = await hubApi.post(`/${objectType}/batch/create`, {
            inputs: properties
        }, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        })
        console.log('Response', response.data)
        return response
    } catch (error) {
        console.error('Error', error)
        throw error
    }
}

export const getPropertyGroups = async (objectType: string): Promise<string[]> => {
    try {
        const response = await hubApi.get(`/${objectType}/groups`, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        return response.data.results.map((group: any) => group.name);
    } catch (error) {
        console.log('Error fetching property groups', error)
        throw error;
    }
}

export const uploadFile = async (file: File) => {
    try {
        const formData = new FormData()
        formData.append('file', file, file.name)
        const response = await flaskApi.post('/uploadfile', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        return response
    } catch (error) {
        console.log('Error ao receber o arquivo', error)
        throw error
    }
}

export const xlsxGenerate = async (data: any) => {
    try {
        const response = await flaskApi.post('/xlsxGenerate', data, {
            responseType: 'blob',
            headers: {
                "Content-Type": "application/json"
            }
        })
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "properties_logs.xlsx"); // Nome do arquivo
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } catch (error) {
        throw error
    }
}