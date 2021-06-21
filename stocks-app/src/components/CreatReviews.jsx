import React, {useState,useEffect} from "react";

function CreateReview() {

    
    const [input, setInput] = useState({
        title:'',
        content:''
    })

    useEffect(() => {
        console.log('rener');
     },[input])

    function handleChange(event){
        const {name, value} =event.target;
        console.log(value)

        console.log(1)
        setInput(prevInput=>
            {
                console.log(2)
                return{
                     ...prevInput, //...prevInput is to reserve the last Input
                     [name]: value //name is dynamic, "title" then setTitle, "content" then setContent.
                    
                }
            }
        )
        console.log(3)
        console.log(event.target);
    }

    function handleClick(event){
        event.preventDefault();
        console.log(input);
    }

    function handleKeyUp(event){
        if(event.keyCode==13){ //"Enter" Kyepress has the Keycode of 13
            handleClick(event)
        }
    }

    return <div className = "container">
        <h1>Create Review</h1>
        <form>
            <div className="form-group">
                <input onChange={handleChange} name="title" value={input.content} autoComplete="off" className = 'form-control' placeholder="Your Name"></input>
            </div>

            <div className="form-group">
                <textarea onChange={handleChange} name="content" value={input.content} autoComplete="off" className = 'form-control' placeholder="Review Content"></textarea>
            </div>
            
            {/* Abandoned key listener(Left for learning purpose) <button onClick={handleClick} onKeyUp={handleKeyUp} className="btn btn-large btn-info">Add Note</button> */}
            <button onClick={handleClick} className="btn btn-large btn-info">Add Note</button>
        </form>
    </div>
}


export default CreateReview;