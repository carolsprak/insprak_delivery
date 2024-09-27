document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  fetch('https://insprak-delivery-api-0729615f05f3.herokuapp.com/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    if (data.success) {
      // Login bem-sucedido
      document.getElementById('message').textContent = 'Login bem-sucedido!';
      document.getElementById('message').style.color = 'green';
      // Redirecionar ou realizar outras ações necessárias
    } else {
      // Login falhou
      document.getElementById('message').textContent = 'Usuário ou senha incorretos.';
    }
  })
  .catch(error => {
    console.error('Erro:', error);
    document.getElementById('message').textContent = 'Ocorreu um erro. Tente novamente mais tarde.';
  });
});
