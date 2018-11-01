import React, {Component} from 'react'
import "./todo.css";
let idValue = 1;
class AddNote extends Component{
    constructor(props){
        super(props);
        this.state = {
           text: ""
        };
    }

    inputChange(event){
        this.setState({
            text: event.target.value,
        });
    }

    addBtnClickHandler(){
        if(this.state.text == ""){
            alert("Please enter a note!!");
            return;
        }
        const note = {
            text: this.state.text,
            id: idValue
        };
        
        this.props.newNoteAddHandler(note);   
        idValue = idValue + 1;
        this.setState({text:''}) 
       
    }
    render(){
        return(
            <div className="add-note-container">
                <textarea className="text-input"
                          placeholder="Enter your note here" 
                          onChange={(e) => this.inputChange(e)} value={this.state.text}>
                </textarea><br/>
                <button className="add-btn" onClick={() => this.addBtnClickHandler()}>Add Note</button>
            </div>

        )
    }
}
export default AddNote;