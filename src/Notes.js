import React, {Component} from 'react'

class Notes extends Component{
    
    deleteBtnClickHandler(id){
        this.props.deleteHandler(id);
    }
    markCompleteClickHandler(id){
        this.props.markCompleteTasks(id);
    }
    promptHandler(id){
       this.props.editHandler(id);
       
    }
   
     render() {
       let array = this.props.notesContainer.map((note,id) =>{
            return(
                <p className='note' key={id}>
                    <p className='title-css'>{note.title}</p>
                    <p>{note.text}</p>
                    <button className='close-btn' onClick={() => this.deleteBtnClickHandler(note.id)}>X</button><br/><br/><br/>
                    <button className='edit-btn' onClick={() => this.promptHandler(note.id)}>Edit</button>
                    <button className='complete-btn' onClick={() => this.markCompleteClickHandler(note.id)}>Mark done</button>
                </p>
            )
        }
    )
        return (
            <div>
                <h4 className="text-align-center heading">Get this done:</h4>
                <div className='todo-note'>
                   {array}
                </div>
            </div>
        );
    }
}

export default Notes;
