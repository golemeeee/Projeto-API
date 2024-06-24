# Documentação API

## URL Base para todos os endpoints
- `<IP>/api/v1/`

## config.env
- Criar arquivo config.env
- Conteúdo 
```
NODE_ENV=development
PORT=3000
DATABASE=mongodb://localhost:27017/api-project
```

## Exemplo de uma consulta de cliente pelo nome
`` 127.0.0.1:3000/api/v1/client/:name ``

## Endpoints

### 1. Cadastrar cidade
- Endpoint: /
- Método: POST
- Descrição: Cria uma nova cidade no sistema.
- Request Body: Objeto JSON contendo os detalhes da cidade.
- Resposta: Objeto JSON com os detalhes da cidade recém-criada.

### 2. Cadastrar cliente
- Endpoint: /
- Método: POST
- Descrição: Cria um novo cliente no sistema.
- Request Body: Objeto JSON com os dados do cliente.
- Resposta: Objeto JSON com os detalhes do cliente criado.

### 3. Consultar cidade pelo nome
- Endpoint: /:name
- Método: GET
- Descrição: Recupera os detalhes de uma cidade pelo seu nome.
- Parâmetros:
  - name: O nome da cidade.
- Resposta: Objeto JSON com os detalhes da cidade.


### 4. Consultar cidade pelo estado
- Endpoint: /state/:state
- Método: GET
- Descrição: Recupera as cidades de um determinado estado.
- Parâmetros:
  - state: O estado das cidades.
- Resposta: Array de objetos JSON com os detalhes das cidades.

### 5. Consultar cliente pelo nome
- Endpoint: /:name
- Método: GET
- Descrição: Recupera os detalhes de um cliente pelo seu nome.
- Parâmetros:
  - name: O nome do cliente.
- Resposta: Objeto JSON com os dados do cliente.

### 6. Consultar cliente pelo Id
- Endpoint: /find/:id
- Método: GET
- Descrição: Recupera os detalhes de um cliente pelo seu ID.
- Parâmetros:
  - id: O identificador único do cliente.
- Resposta: Objeto JSON com os dados cliente.

### 7. Remover cliente
- Endpoint: /delete/:id
- Método: DELETE
- Descrição: Exclui um cliente do sistema pelo seu ID.
- Parâmetros:
  - id: O identificador único do cliente.
- Resposta: Objeto JSON confirmando a exclusão do cliente.

### 8. Alterar o nome do cliente
- Endpoint: /update/:id
- Método: PATCH
- Descrição: Atualiza os detalhes de um cliente pelo seu ID.
- Parâmetros:
  - id: O identificador único do cliente.
- Request Body: Objeto JSON com os dados atualizados do cliente.
- Resposta: Objeto JSON com os detalhes atualizados do cliente.

