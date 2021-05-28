const notes = [ {
    id: 1,
    subject: "CSS",
    date: 5.26,
    feeling: "Upbeat",
    timeSpent: "all day"
},
{
    id: 2,
    subject: "JavaScript",
    date: 5.27,
    feeling: "worked",
    timeSpent: "the morning"
}
]

noteAboutToday = {
    id: 3,
    subject: "Process correction",
    date: 5.27,
    feeling: "a headache",
    timeSpent: "the afternoon"
}

notes.push(noteAboutToday)
// console.log(notes)


// for (const learningNotes of notes){
//     console.log(`
//     Note ${learningNotes.id}
//     ${learningNotes.date}
//     I learned ${learningNotes.subject} 
//     I spent ${learningNotes.timeSpent} working on it
//     I felt ${learningNotes.feeling}`)
// }


// const searchTerm = "the afternoon"

// for (const note of notes) {
//     if (note.timeSpent === searchTerm) {
// console.log(note)
//     }
// }

const createNote = (note) => {
    const lastIndex = notes.length - 1
    const currentLastNote = notes[lastIndex]
    const maxId = currentLastNote.id
    const idForNewNote = maxId + 1

    note.id = idForNewNote
    
    notes.push(note)
}

const moreNewerNote = {
    subject: "learning more Javascript",
    date: 5.27,
    feeling: "worn down",
    timeSpent: "the last minute"
}

createNote(moreNewerNote)

console.log(notes)