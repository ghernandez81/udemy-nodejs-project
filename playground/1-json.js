const fs = require('fs');
// const book = {
//   title:'Ego id the Enemy',
//   author:'Ryan Holiady'
// }

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);
// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataToString =  dataBuffer.toString();
// const dataJSon = JSON.parse(dataToString);
// console.log(dataJSon.title);


fs.readFile('./1-json.json', (err, data) => {
  if(err) throw(err);
  if(data) {
    const dataString = data.toString();
    const jsonData = JSON.parse(dataString);
    jsonData.name = 'Gabe Hernandez';
    jsonData.age = '39';
    fs.writeFile('./1-json.json',JSON.stringify(jsonData), (err) => {
      console.log('data overwritten')
    });

  }
});