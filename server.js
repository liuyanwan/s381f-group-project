const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();

app.use(session({
  secret: 'secret-key',
  resave: true,
  saveUninitialized: true
}));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const users = [
  { userId: 'user1', password: 'pass123' },
  { userId: 'user2', password: 'pass123' },
  { userId: 'user3', password: 'pass123' }
];

function requireLogin(req, res, next) {
  if (!req.session.userId) {
    return res.redirect('/login');
  }
  next();
}

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

app.get('/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/login');
});

app.post('/login', (req, res) => {
  const { userId, password } = req.body;
  const user = users.find(u => u.userId === userId && u.password === password);
  if (user) {
    req.session.userId = user.userId;
    res.redirect('/home');
  } else {
    res.send('Invalid username or password');
  }
});

app.get('/home', requireLogin, (req, res) => {
  res.sendFile(__dirname + '/home.html');
});


const horoscopeStarChart = {
  aquarius: 'aquarius.jpg',
  pisces: 'pisces.jpg',
  aries: 'aries.jpg',
  taurus: 'taurus.jpg’,
  gemini: ‘gemini.jpg’,
  cancer: ‘cancer.jpg’,
  leo: ‘leo.jpg’,
  virgo: ‘virgo.jpg’,
  libra: ‘libar.jpg’,
  scorpio: ‘scorpio.jpg’,
  sagittarius: ’sagittarius.jpg’,
  capricorn: ‘capricorn,jpg’
};


app.get('/horoscope', (req, res) => {
  const birthday = req.query.birthday; 

  if (!birthday) {
    return res.status(400).json({ error: 'Please provide a birthday parameter.' });
  }

  const [month, day] = birthday.split('-');

  let horoscope = '';
  if ((month == 1 && day >= 21) || (month == 2 && day <= 19)) {
    horoscope = 'Aquarius';
  } else if ((month == 2 && day >= 20) || (month == 3 && day <= 20)) {
    horoscope = 'Pisces';
  } else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
    horoscope = 'Aries';
  } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
    horoscope = 'Taurus';
  } else if ((month == 5 && day >= 21) || (month == 6 && day <= 21)) {
horoscope = 'Gemini';
} else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
horoscope = 'Cancer';
} else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
horoscope = 'Leo';
} else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
horoscope = 'Virgo';
} else if ((month == 9 && day >= 23) || (month == 10 && day <= 23)) {
horoscope = 'Libra';
} else if ((month == 10 && day >= 24) || (month == 11 && day <= 21)) {
horoscope = 'Scorpio';
} else if ((month == 11 && day >= 22) || (month == 12 && day <= 20)) {
horoscope = 'Sagittarius';
} else if ((month == 12 && day >= 21) || (month == 1 && day <= 20)) {
    horoscope = 'Capricorn';

  res.json({ horoscope });
});



let horoscopeData = [
  {
    constellationName: 'Aries',
    constellationId: '01',
    birthDate: '21/03 - 19/04',
    constellationStarChart: 'aries.jpg',
    characterTraits: ' '
  },
{
    constellationName: 'Taurus',
    constellationId: '02',
    birthDate: '20/04 - 20/05',
    constellationStarChart: ' taurus.jpg ',
    characterTraits: ' '
  },
{
    constellationName: 'Gemini',
    constellationId: '03',
    birthDate: '21/05 - 21/06',
    constellationStarChart: ' gemini.jpg ',
    characterTraits: ' '
  },
{
    constellationName: 'Cancer',
    constellationId: '04',
    birthDate: '22/06 - 22/07',
    constellationStarChart: ' cancer.jpg ',
    characterTraits: ' '
  },
{
    constellationName: 'Leo',
    constellationId: '05',
    birthDate: '23/07 - 22/08',
    constellationStarChart: ' leo.jpg ',
    characterTraits: ' '
  },
{
    constellationName: 'Virgo',
    constellationId: '06',
    birthDate: '23/08 - 22/09',
    constellationStarChart: ' virgo.jpg ',
    characterTraits: ' '
  },
{
    constellationName: 'Libra',
    constellationId: '07',
    birthDate: '23/09 - 23/10',
    constellationStarChart: ' libra.jpg ',
    characterTraits: ' '
  },
{
    constellationName: 'Scorpio',
    constellationId: '08',
    birthDate: '24/10 - 21/11',
    constellationStarChart: ' scorpio.jpg ',
    characterTraits: ' '
  },
{
    constellationName: 'Sagittarius',
    constellationId: '09',
    birthDate: '22/11 - 20/12',
    constellationStarChart: ' Sagittarius.jpg ',
    characterTraits: ' '
  },
{
    constellationName: 'Capricorn',
    constellationId: '10',
    birthDate: '21/12 - 20/01',
    constellationStarChart: ' capricorn.jpg ',
    characterTraits: ' '
  },
{
    constellationName: 'Aquarius',
    constellationId: '11',
    birthDate: '21/01 - 19/02',
    constellationStarChart: ' aquqrius.jpg ',
    characterTraits: ' '
  },
{
    constellationName: 'Pisces',
    constellationId: '12',
    birthDate: '20/02 - 20/03',
    constellationStarChart: ' pisces.jpg ',
    characterTraits: ' '
  },
];

  
app.post('/horoscope', requireLogin, (req, res) => {
  const { constellationName, constellationId, birthDate, constellationStarChart, characterTraits } = req.body;
  
  if (constellationId.length !== 2) {
    return res.status(400).json({ error: 'Constellation ID must be 2 digits.' });
  }

  const newHoroscope = {
    constellationName,
    constellationId,
    birthDate,
    constellationStarChart,
    characterTraits
  };

  horoscopeData.push(newHoroscope);

  res.json(newHoroscope);
});

app.get('/horoscope', requireLogin, (req, res) => {
  res.json(horoscopeData);
});

app.post('/horoscope/search', requireLogin, (req, res) => {
  const { birthDay } = req.body;
  const horoscope = horoscopeData.find(h => h.birthDate.includes(birthDay));

  if (horoscope) {
    res.json(horoscope);
  } else {
    res.status(404).json({ error: 'Horoscope not found.' });
  }
});

app.put('/horoscope/:constellationId', requireLogin, (req, res) => {
  const { constellationId } = req.params;
  const { characterTraits } = req.body;

  const horoscope = horoscopeData.find(h => h.constellationId === constellationId);

  if (horoscope) {
    horoscope.characterTraits = characterTraits;
    res.json(horoscope);
  } else {
    res.status(404).json({ error: 'Horoscope not found.' });
  }
});

app.delete('/horoscope/:constellationId', requireLogin, (req, res) => {
  const { constellationId } = req.params;

  const index = horoscopeData.findIndex(h => h.constellationId === constellationId);

  if (index !== -1) {
    const deletedHoroscope = horoscopeData.splice(index, 1)[0];
    res.json(deletedHoroscope);
  } else {
    res.status(404).json({ error: 'Horoscope not found.' });
  }
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
