const express = require('express');
const router = express.Router();

// Armazenando em memória (simulando banco de dados)
let users = [
    {
        nome: "Teste",
        email: "teste@email.com",
        senha: "Senh@123"
    }
];

// Rota para cadastro de usuário
router.post('/cadastro', (req, res) => {
    const { nome, email, senha } = req.body;
    
    if (!nome || !email || !senha) {
        return res.status(400).json({ message: 'Nome, email e senha são obrigatórios.' });
    }

    const newUser = { nome, email, senha };
    users.push(newUser);

    res.status(201).json({ message: 'Usuário cadastrado com sucesso!', user: newUser });
});

// Rota para consulta de usuários (retornar todos os usuários cadastrados)
router.get('/consulta', (req, res) => {
  if (users.length === 0) {
      return res.status(404).json({ message: 'Nenhum usuário encontrado.' });
  }

  res.status(200).json(users);
});

// Rota para atualização de usuário pelo ID
router.put('/atualizacao/:id', (req, res)=>{
    const { id } = req.params;
    const { nome, email, senha } = req.body;

    const userIndex = users.findIndex((user) => user.id === parseInt(id));

    if (userIndex === -1) {
        return res.status(400).json({ message: "Usuário não encontrado." });
    }

    if (!nome || !email || !senha) {
        return res.status(400).json({ message: 'Nome, email e senha são obrigatórios.' });
    }
    
    users[userIndex] = { id: parseInt(id), nome, email, senha };
    res.status(200).json({ message: 'Usuário atualizado com sucesso!', user: users[userIndex] }); 
});

// Rota para deletar um usuário pelo ID
router.delete('/deletar/:id', (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex((user) => user.id === parseInt(id));

    if (userIndex === -1) {
    return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    // Remover o usuário do array
    users.splice(userIndex, 1);
    res.status(200).json({ message: 'Usuário deletado com sucesso.' });
});
router.delete

module.exports = router;