// const fs = require('fs');

// fs.writeFile('jake-jermal.txt','Where did you get those glasses ?',(err) => {
//   if(err) throw err;
  
//   console.log('the File has been created');
  
//   fs.appendFile('jake-jermal.txt','I got it from Malaysia', ()=> {
//       console.log('file has been appended');
//   });

// })
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// Customize yargs
yargs.version('1.1.0');

yargs.command({
  command:'add',
  describe:'Add a new note',
  builder: {
    title: {
      describe:'Note Title',
      demandOption: true,
      type:'string'
    },
    body: {
      describe:'Note Body',
      demandOption: true,
      type:'string'
    }
  },
  handler (argv) {
  notes.addNote(argv.title, argv.body)
  }
});

yargs.command({
  command:'remove',
  describe:'Remove a note',
  builder: {
    title : {
    describe:'Title to remove',
    demandOption:true,
    type:'string'
    }
  },
  handler (argv) {
    notes.removeNote(argv.title)
  }
});

yargs.command({
  command:'list',
  describe:'List a note',
  handler () {
    notes.listNotes();
  }
});

yargs.command({
  command:'read',
  describe:'Read a note',
  builder: {
    title: {
      describe:'Title to list',
      demandOption:true,
      type:'string'
    }
  },
  handler(argv) {
    notes.readNote(argv.title)
  }
});

yargs.parse();