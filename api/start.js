require('dotenv').config()
const mongoose = require('mongoose')
const app = require('./index');

mongoose.connect(process.env.DB);
mongoose.connection.on('error', (err) => {
  if (err) {
    console.log(`Error: ${err}`);
  }
    console.log('Yeah!!!');
});

// app.set(port, process.env.PORT || 3000);

app.listen(3000, () =>{
    // console.log(`Server running on port ${port}`);
    console.log('Server running on port 3000...')
});
