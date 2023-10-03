
const users = [
  { email: "usuario1@example.com", password: "senha123", name: "Usuário 1" },
  { email: "contatogalofiap@gmail.com", password: "123456", name: "Galo" },
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
