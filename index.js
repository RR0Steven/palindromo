const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/palindromo', (req, res) => {
  const palabra = req.body.palabra;

  if (!palabra || typeof palabra !== 'string') {
    return res.status(404).json({ message: 'No se pudo comprobar la palabra' });
  }

  const palabraSinEspacios = palabra.replace(/\s/g, '').toLowerCase();
  const palabraReversa = palabraSinEspacios.split('').reverse().join('');

  if (palabraSinEspacios === palabraReversa) {
    return res.status(200).json({ message: `${palabra} es una palabra Palíndroma.` });
  } else {
    return res.status(302).json({ message: `${palabra} no es una palabra Palíndroma.` });
  }
});

const port = 3001;

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.send('¡Bienvenido al verificador de palíndromos!');
});