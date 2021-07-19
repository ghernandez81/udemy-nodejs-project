const fs = require('fs');
const chalk = require('chalk');
const { title } = require('process');

const getNotes = () => {

}

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNotes = notes.find(note => note.title === title);

  if (!duplicateNotes) {
  notes.push({
    title,
    body
  });

  saveNotes(notes);
  console.log(chalk.green.inverse('New note added!'));
  
  } else {
    console.log(chalk.red.inverse('Title taken'));
  }
}

const removeNote =  (title) => {
   const notes = loadNotes();
   const notesLength = notes.length;
   const notesWithoutRemove = notes.filter(note => note.title !== title);

   if(notesWithoutRemove.length !== notesLength) {
     saveNotes(notesWithoutRemove)
     console.log(chalk.bgGreen('Note Removed'));
  } else {
    console.log(chalk.bgRed('No note found'));
  }
}

const saveNotes = (notes) => {
  const dataJson = JSON.stringify(notes);
  fs.writeFile('notes.json', dataJSon,() => {
    console.log('it done');
  });
}

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.blueBright('Your notes'));
    notes.forEach(note => {
      console.log(chalk.grey(`${note.title}`)); 
    });
}

const loadNotes =  () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } 
  catch (e) {
      return [];
  }
  
}

const readNote = (title) => {

   const notes = loadNotes();
   const foundNote = notes.find(note => note.title === title); 
   if(foundNote) {
     console.log(chalk.blueBright(`title: ${foundNote.title}`));
     console.log(`Body: ${foundNote.body}`);

   } else {
      console.log(chalk.red('No Note found!! what are you an idiot ??'));
   }
}

module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes,
  readNote
}