import React, {Component} from 'react'

class CompletedNotes extends Component{
    completeDeleteClickHandler(id){
        this.props.completeDeleteHandler(id);
    }
    render(){
        let completedArray = this.props.completeNotesContainer.map((text,idtype) =>{
            return(
                <p className='complete-note' key={idtype}>
                    {text.text}
                    <button className='close-btn' onClick={() => this.completeDeleteClickHandler(text.id)}>X</button><br/><br/>
                </p>
            )
        }
    )
        return(
            <div>
               <h5 className="text-align-center title">Done:</h5>
               <div className='todo-note'>
                   {completedArray}
                </div>
            </div>
        );
    }
}
export default CompletedNotes