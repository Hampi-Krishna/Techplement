const mongoose = require('mongoose');
const Quote = require('./models/quote');  // Adjust path if necessary

mongoose.connect('mongodb://localhost:27017/quotesDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const quotes = [
  { content: 'The only way to do great work is to love what you do.', author: 'Steve Jobs' },
  { content: 'Life is what happens when you’re busy making other plans.', author: 'John Lennon' },
  { content: 'Get busy living or get busy dying.', author: 'Stephen King' },
  // Add more quotes as needed
];

Quote.insertMany(quotes)
  .then(() => {
    console.log('Quotes inserted successfully');
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error('Error inserting quotes:', error);
  });
