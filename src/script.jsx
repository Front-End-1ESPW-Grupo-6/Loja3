
const users = [
  { email: "usuario1@example.com", password: "senha123", name: "Usuário 1" },
  { email: "usuario2@example.com", password: "senha456", name: "Usuário 2" },
];

function auth(email, password) {

  const user = users.find((user) => user.email === email && user.password === password);
  
  if (user) {
    return true; // Autenticação bem-sucedida
  } else {
    return false; // Autenticação falhou
  }
}

export default auth;
