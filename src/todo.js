import React, {Component} from 'react'
import AddNote from "./addingNotes.js";
import Notes from "./Notes.js";
import CompletedNotes from './CompletedNotes.js';
import './todo.css';
class ToDo extends Component{
    constructor(props){
        super(props);
        this.state = {
           notes: [] ,
           completeNotes: [] ,
           editer:false  
        };
        this.newNoteAddHandler = this.newNoteAddHandler.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);
        this.markCompleteTasks = this.markCompleteTasks.bind(this);
        this.completeDeleteHandler = this.completeDeleteHandler.bind(this);
        this.editHandler = this.editHandler.bind(this);
    }

    newNoteAddHandler(note) {
      const allNotes = [note, ...this.state.notes];
      this.setState({notes:allNotes})
    }

    deleteHandler(id){
        const filteredNotes = this.state.notes.filter((note) =>{
            return note.id !== id;
            } 
        );
        this.setState({notes:filteredNotes})
    }

    completeDeleteHandler(id){
        const filteredNotes = this.state.completeNotes.filter((note) =>{
            return note.id !== id;
            } 
        );
        this.setState({completeNotes:filteredNotes})
         
    }
    markCompleteTasks(id){
        const markComplete = this.state.notes.find((obj) =>{
            return obj.id === id;
        });
        const arrayObj = [markComplete,...this.state.completeNotes]
        this.setState({completeNotes:arrayObj});
        const filtered = this.state.notes.filter((note) =>{
            return note.id !== id;
            } 
        );
        this.setState({notes:filtered})
      
    }
    editHandler(id){
        const findText = this.state.notes.find((obj) =>{
        return obj.id == id;
        });
        let updatedText = prompt("Edit your text here",findText.text)
        let updatedNote = this.state.notes.map(note =>{
			if(note.id === id){
                note = {...note, text:updatedText};
            }
            return note;
        });
        this.setState({notes:updatedNote});
    }
        
    

    render() {
        console.log('Notes', this.state.notes);
        
        return (
            <div>
            
                <h3 className='heading'>To Do Application</h3>
                <h5 className="text-align-center">A list about the things to do</h5> 
                <div className="notes-container">
                    <div className="col-50">
                        <AddNote newNoteAddHandler={this.newNoteAddHandler} />
                    </div>
                    <div className="col-50">
                        <Notes
                            notesContainer={this.state.notes}
                            deleteHandler={this.deleteHandler}
                            markCompleteTasks={this.markCompleteTasks}
                            editHandler = {this.editHandler}
                        />
                    </div>
                    <div className="col-50">
                        <CompletedNotes 
                            completeNotesContainer = {this.state.completeNotes}
                            completeDeleteHandler={this.completeDeleteHandler}
                        />
                    </div>
                    
                </div>
                
                      
                
            </div>    
        );
    }
}

export default ToDo;