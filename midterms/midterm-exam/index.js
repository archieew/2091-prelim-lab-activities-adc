const express = require('express'); 
const app = express();

const dishes= [{
  type: 'Sisig',
  province: 'Pampanga',
  price: '220',
},
{
  type: 'Salpicao',
  province: 'Quezon',
  price: '180',
},
{
  type: 'Bagnet', 
  province: 'Ilocos',
  price: '370',
}
];

app.get('/', (req, res) => { 
  res.send('My New App!'); 
});

app.get('/api/dishes', (req, res) => {
  res.send(dishes);
});

app.get('/api/dishes/:type', (req, res) => {
  const dishes = dishes.find(h => h.type === parseInt(req.params.id));
  if (!dishes) return res.status(404).send('Record not found');
  res.send(dishes);
});

app.listen (3000, () => {
  console.log('Server started on port 3000');
});


