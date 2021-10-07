const parse = require('csv-parse');
const fs = require('fs');

const result = [];

let count = 0;

fs.createReadStream('kep_data.csv')
  .pipe(
    parse({
      comment: '#',
      columns: true,
    })
  )
  .on('data', (data) => {
    if (count === 0) {
      console.log(data);
      count++;
    }
  })
  .on('end', () => {
    // console.log(result);
  })
  .on('error', (err) => {
    console.log(err);
  });
