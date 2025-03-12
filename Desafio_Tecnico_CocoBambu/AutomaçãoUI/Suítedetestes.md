# Suíte de Testes - Cadastro

### ST01 - Cadastro bem sucedido

**Dado** que o usuário esteja na página de login  
**E** preenche todos os campos obrigatórios corretamente  
**E** aceita os termos e condições  
**Quando** o usuário clicar no botão "Cadastrar"  
**Então** é exibida a mensagem: "Foi enviado a você um e-mail com o token de verificação."  
**E** o usuário fecha o pop-up da mensagem.  
**Então** o usuário recebe um e-mail com o token de verificação  
**E** na página de autenticação, ele insere o token correto e clica no botão "Acessar"  
**Então** o sistema deve validar o token  
**E** ativar o cadastro do usuário  
**E** redirecionar o usuário para a página com a mensagem: "Onde você quer receber seu pedido?"

---

### ST02 - Tentativa de cadastro com campos obrigatórios vazios

**Dado** que o usuário esteja na página de cadastro  
**E** que o usuário não preenche um ou mais campos obrigatórios  
**Quando** ele tentar clicar no botão "Cadastrar"  
**Então** o sistema deve exibir uma mensagem de erro informando quais campos são obrigatórios e o botão "Cadastrar" deve estar desabilitado.

---

### ST03 - Senha Forte

**Dado** que o usuário está na página de cadastro  
**Quando** ele inserir uma senha com pelo menos 6 caracteres, 1 letra maiúscula, 1 número, 1 caractere especial e que não seja similar aos dados do campo "Nome completo".  
**Então** o sistema deve aceitar a senha e permitir a continuação do cadastro.

---

### ST04 - Senha fraca

**Dado** que o usuário está na página de cadastro  
**E** que o usuário insere uma senha sem atender aos requisitos mínimos (6 caracteres, 1 maiúscula, 1 número e 1 caractere especial)  
**Quando** ele tentar clicar no botão "Cadastrar"  
**Então** o sistema deve exibir uma mensagem de erro informando os critérios que a senha deve atender e o botão "Cadastrar" deve estar desabilitado.

---

### ST05 - Senha e senha de confirmação diferentes

**Dado** que o usuário está na página de cadastro  
**E** que o usuário insere uma senha e uma senha de confirmação diferente  
**Quando** ele tentar clicar no botão "Cadastrar"  
**Então** o sistema deve exibir uma mensagem de erro informando que as senhas não coincidem e o botão "Cadastrar" deve estar desabilitado.

---

### ST06 - Nome completo com menos de 2 caracteres

**Dado** que o usuário está na página de cadastro  
**E** que o usuário insere um nome com menos de 2 caracteres  
**Quando** ele tentar clicar no botão "Cadastrar"  
**Então** o sistema deve exibir uma mensagem de erro informando que o nome deve ter mais de 2 caracteres e o botão "Cadastrar" deve estar desabilitado.

---

### ST07 - Nome completo com caracteres especiais

**Dado** que o usuário está na página de cadastro  
**E** que o usuário insere um nome com caracteres especiais  
**Quando** ele tentar cadastrar  
**Então** o sistema deve exibir uma mensagem de erro informando que o nome possui caracteres inválidos e o botão "Cadastrar" deve estar desabilitado.

---

### ST08 - Nome completo com caracteres numéricos

**Dado** que o usuário está na página de cadastro  
**E** que o usuário insere um nome com caracteres numéricos  
**Quando** ele tentar cadastrar  
**Então** o sistema deve exibir uma mensagem de erro informando que o nome possui caracteres inválidos e o botão "Cadastrar" deve estar desabilitado.

---

### ST09 - E-mail inválido

**Dado** que o usuário está na página de cadastro  
**E** que o usuário insere um e-mail em um formato inválido  
**Quando** ele tentar cadastrar  
**Então** o sistema deve exibir uma mensagem de erro informando que o e-mail é inválido e o botão "Cadastrar" deve estar desabilitado.

---

### ST10 - Tentativa de cadastro sem aceitar os termos e condições

**Dado** que o usuário está na página de cadastro  
**E** que o usuário preenche todos os campos corretamente  
**Mas** não marca a caixa de aceite dos termos e condições  
**Então** o botão "Cadastrar" deve permanecer desabilitado, impedindo a finalização do cadastro.

---

### ST11 - Inserção de token inválido na autenticação

**Dado** que o usuário está na página de cadastro  
**E** que o usuário está na página de autenticação após o preenchimento do formulário corretamente  
**Quando** ele inserir um token inválido ou incorreto e clicar em "Acessar"  
**Então** o sistema deve exibir uma mensagem de erro informando que o token é inválido.
