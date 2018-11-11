import React, {Component} from 'react'

class CompletedNotes extends Component{
    completeDeleteClickHandler(id){
        this.props.completeDeleteHandler(id);
    }
    render(){
        let completedArray = this.props.completeNotesContainer.map((note,idtype) =>{
            return(
                <p className='complete-note' key={idtype}>
                    <p className='title-css'>{note.title}</p>
                    <p>{note.text}</p>
                    <button className='close-btn' onClick={() => this.completeDeleteClickHandler(note.id)}>X</button><br/><br/>
                </p>
            )
        }
    )
        return(
            <div>
               <h5 className="text-align-center heading">Done:</h5>
               <div className='todo-note'>
                   {completedArray}
                </div>
            </div>
        );
    }
}
export default CompletedNotes