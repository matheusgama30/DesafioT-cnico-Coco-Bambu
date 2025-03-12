# Teste de Automação API

## **Cenários Adicionar Item ao Carrinho**

### **Adicionar um produto válido ao carrinho**
- Enviar um produto com id e quantidade válidos.
- **Esperado:** Dados do produto sejam adicionados.
- **Status code esperado:** `200`

### **Adicionar vários produtos ao mesmo tempo**
- Enviar múltiplos produtos na mesma requisição.
- **Esperado:** Todos os produtos retornados.
- **Status code esperado:** `201`

### **Adicionar um item com a quantidade igual a 0**
- Enviar o campo quantidade = 0.
- **Esperado:** Retorno do produto adicionado com 1 quantidade por padrão.
- **Status code esperado:** `201`

### **Adicionar um item com quantidade inválida**
- Enviar requisição de quantidade igual a -1
- **Esperado:** `400 Bad Request`

### **Adicionar um produto inexistente**
- Enviar requisição com id produto `9827` (ID que não existe).
- **Esperado:** `404 Not Found` (Página não encontrada).

---

## **Cenários para "Atualizar Carrinho"**

### **Atualizar um carrinho existente com produtos novos**
- **Enviar:** Um carrinho válido, com novos produtos atualizados.
- **Esperado:** O carrinho deve ser atualizado corretamente e retornar os produtos adicionados.
- **Status code esperado:** `200 OK`

### **Atualizar um carrinho inexistente**
- Enviar requisição `PUT` com um id na URL que não existe.
- **Esperado:** Página não encontrada.
- **Status code esperado:** `404 Not Found`

### **Atualizar carrinho sem passar id e quantidade**
- Enviar body vazio, sem nenhum campo.
- **Esperado:** Erro de requisição.
- **Status code esperado:** `400 Bad Request`

### **Atualizar um carrinho com quantidade negativa**
- Enviar uma requisição com quantidade `-3`
- **Esperado:** Erro de requisição.
- **Status code esperado:** `400 Bad Request`

---

## **Cenários para "Remover Item do Carrinho"**

### **Remover um item existente do carrinho**
- Enviar uma requisição `DELETE`
- **Esperado:** Propriedade `isDeleted` seja igual a `true`
- **Status code esperado:** `200 OK`

### **Remover um item que não existe no carrinho**
- Enviar uma requisição `DELETE` com um id na URL que não existe.
- **Esperado:** Página não encontrada.
- **Status code esperado:** `404 Not Found`

---

## **Técnicas de Teste Aplicadas**

### **Adicionar Item ao Carrinho**

#### **Adicionar um produto válido ao carrinho**
- **Técnica utilizada:** Teste de Caso Positivo
- Garante que um produto válido seja adicionado ao carrinho corretamente.

#### **Adicionar vários produtos ao mesmo tempo**
- **Técnica utilizada:** Teste de Carga
- Verifica como a API lida com múltiplos produtos adicionados simultaneamente.

#### **Adicionar um item com a quantidade igual a 0**
- **Técnica utilizada:** Valor Limite
- Testa valores críticos e a resposta do sistema para entradas inválidas.

#### **Adicionar um produto inexistente**
- **Técnica utilizada:** Adivinhação de Erro
- Verifica se a API retorna erro ao tentar adicionar um produto inexistente.

### **Atualizar Carrinho**

#### **Atualizar um carrinho existente com produtos novos**
- **Técnica utilizada:** Teste de Caso Positivo
- Garante que a API funcione corretamente ao atualizar um carrinho válido.

#### **Atualizar um carrinho inexistente**
- **Técnica utilizada:** Teste de Erro
- Verifica a resposta da API ao tentar atualizar um carrinho que não existe.

#### **Atualizar carrinho sem passar id e quantidade**
- **Técnica utilizada:** Teste de Requisição Inválida
- Verifica se a API responde corretamente à falta de dados obrigatórios.

#### **Atualizar um carrinho com quantidade negativa**
- **Técnica utilizada:** Valor Limite
- Testa a validação de entradas negativas pela API.

### **Remover Item do Carrinho**

#### **Remover um item existente do carrinho**
- **Técnica utilizada:** Teste de Caso Positivo
- Garante que a remoção de um item do carrinho ocorre corretamente.

#### **Remover um item que não existe no carrinho**
- **Técnica utilizada:** Adivinhação de Erro
- Verifica se a API retorna erro ao tentar remover um item inexistente.

---

## **ReportBug**

### **Cenários Adicionar Item ao Carrinho**

- **Adicionar um item com quantidade inválida:**
  - **Esperado:** `400 Bad Request`
  - **Resultado obtido:** `201 Created` (API retornou sucesso indevidamente, com valores totais zerados).

- **Adicionar um produto inexistente:**
  - **Esperado:** `404 Not Found`
  - **Resultado obtido:** `201 Created` (API retornou sucesso indevidamente, com valores totais zerados).