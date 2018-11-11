import React, {Component} from 'react'
import "./todo.css";
let idValue = 1;
class AddNote extends Component{
    constructor(props){
        super(props);
        this.state = {
           text: '',
           title:''
        };
    }

    titleInput(event){
        this.setState({
            title:event.target.value
        });
    }

    inputChange(event){
        this.setState({
            text: event.target.value,
        });
    }

    addBtnClickHandler(){
        if(this.state.text==='' || this.state.title===''){
            alert("Please enter a title and note!!");
            return;
        }
        const note = {
            title: this.state.title,
            text: this.state.text,
            id: idValue
        };
        this.props.newNoteAddHandler(note);   
        idValue = idValue + 1;
        this.setState({text:'',
                    title:''}) 
    }
    render(){
        return(
            <div className="add-note-container">
                <input className='title'
                        placeholder='Title'
                        onChange={(e)=>this.titleInput(e)}
                        value={this.state.title}>
                </input><br/>
                <textarea vols='20'
                          className="text-input"
                          placeholder="Enter your note here" 
                          onChange={(e) => this.inputChange(e)} value={this.state.text}>
                </textarea><br/>
                <button className="add-btn" onClick={() => this.addBtnClickHandler()}>Add Note</button>
            </div>

        )
    }
}
export default AddNote;