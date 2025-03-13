# Desafio - Frontend React

## 📌 Sobre o Projeto
Este projeto é um frontend desenvolvido em **React** com **Vite** e **TypeScript**, que se conecta à API do **HubSpot** para gerenciar propriedades e também a uma API em **Python** para lidar com arquivos **CSV** e **XLSX**.

## 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca principal para a UI
- **Vite** - Build tool para desenvolvimento rápido
- **TypeScript** - Tipagem estática
- **Zustand** - Gerenciamento de estado
- **Tailwind CSS** - Estilização
- **Material UI** - Componentes estilizados
- **Axios** - Consumo de APIs
- **Zod** - Validação de schemas
- **React Toastify** - Notificações

## 📂 Estrutura do Projeto

```
/src
 ├── assets/                 # Imagens e ícones
 ├── components/             # Componentes reutilizáveis
 │   ├── Modal/
 │   ├── Property/
 │   │   ├── PropertyContainer/
 │   │   ├── PropertyFooter/
 │   │   ├── PropertyHeader/
 │   │   ├── PropertyItemList/
 │   │   ├── PropertyRoot/
 │   │   ├── index.tsx
 ├── infra/                  # Infraestrutura e estados globais
 │   ├── context/
 │   ├── store/
 │   │   ├── property/
 │   │   │   ├── property.store.ts
 │   │   │   ├── property.store.type.ts
 ├── modules/                # Módulos da aplicação
 │   ├── Property/
 │   │   ├── property.infra.tsx
 │   │   ├── property.schema.tsx
 │   │   ├── property.server.tsx
 │   │   ├── property.type.tsx
 │   │   ├── property.view.tsx
 │   │   ├── property.viewmodel.tsx
 ├── server/                 # Configuração de APIs
 │   ├── axios/
 │   │   ├── index.ts
 ├── App.tsx                 # Componente raiz
 ├── main.tsx                # Ponto de entrada do React
 ├── index.html              # Página principal do projeto
```

## 🔧 Configuração do Ambiente

1. **Instale as dependências**
```sh
npm install
```

2. **Crie o arquivo `.env`** na raiz do projeto com:
```sh
VITE_APP_AUTH_TOKEN=seu_token_aqui
```

3. **Inicie o servidor de desenvolvimento**
```sh
npm run dev
```

## 🔄 Conexão com APIs
### 🔹 API do HubSpot
A conexão com a API do **HubSpot** é feita via `axios` configurado no diretório `server/axios`. O **proxy** está configurado no arquivo `vite.config.ts`:
```ts
server: {
  proxy: {
    '/api': {
      target: 'https://api.hubapi.com',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, '')
    }
  }
}
```
Isso permite chamadas para `/api/crm/v3/properties`, que serão redirecionadas corretamente para `https://api.hubapi.com/crm/v3/properties`.

### 🔹 API Python (Manipulação de Arquivos)
O projeto também se comunica com uma API em **Python** para upload e processamento de arquivos CSV/XLSX.
Exemplo de requisição:
```ts
const formData = new FormData();
formData.append('file', file);
await axios.post('http://127.0.0.1:5000/uploadfile', formData, {
  headers: { 'Content-Type': 'multipart/form-data' }
});
```

## 📜 Principais Funcionalidades

✅ Criar propriedades no **HubSpot**
✅ Listar propriedades existentes
✅ Upload de arquivos CSV/XLSX
✅ Processamento de arquivos na API em **Python**
✅ Gerenciamento de estado com **Zustand**
✅ Estilização com **TailwindCSS** e **Material UI**

## 🛠 Scripts Disponíveis

- `npm run dev` - Inicia o projeto em ambiente de desenvolvimento
- `npm run build` - Gera o build para produção
- `npm run lint` - Executa o linter
- `npm run preview` - Visualiza o projeto compilado

## 📌 Contribuição
Caso queira contribuir, faça um fork do repositório e abra um pull request com melhorias ou correções.

---

🚀 **Projeto em constante evolução!**

