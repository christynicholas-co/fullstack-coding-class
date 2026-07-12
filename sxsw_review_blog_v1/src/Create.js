import { useState } from "react";
import {useHistory} from 'react-router-dom'

const Create = () => {
    const [title, setTitle] = useState('')
    const [time, setTime] = useState('')
    const [location, setLocation] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Kevin')
    const [isPending, setIsPending] = useState(false)
    const history = useHistory()

    const handleSubmit = (e) => {
            e.preventDefault();
            const blog = { title, time, location, body, author }
            //sending to the json server
            setIsPending(true)
            fetch('http://localhost:8000/blogs', {
                method: "POST",
                headers: { "content-Type": "application/json" },
                body: JSON.stringify(blog)
            }).then(() => {
                console.log('new blog added')
                setIsPending(false)
                history.push('/')
            })
            
    }

    return (
        <div className="create">
            <h2>Add a new blog from create component</h2>
            <form onSubmit = {handleSubmit}>
                <label> Event Name:</label> <br />
                    <input type="text"
                            required
                            value ={title}
                            onChange ={(e) => setTitle(e.target.value)} />
                <label> Time:</label> <br />
                    <input type="text"
                        required
                        value ={time}
                            onChange ={(e) => setTime(e.target.value)}>
                    </input>
                    <label> Location:</label> <br />
                    <input type="text"
                        required
                        value ={location}
                            onChange ={(e) => setLocation(e.target.value)}>
                    </input> <br />
                <label> Blog body:</label> 
                    <textarea
                        required
                        value ={body}
                            onChange ={(e) => setBody(e.target.value)}>
                    </textarea>

                <label> Blog author:</label>
                    <select
                        value ={author}
                        onChange ={(e) => setAuthor(e.target.value)}>
                        <option value="Kevin">Kevin</option>
                        <option value="Chisty">Christy</option>
                        <option value="Michelle">Michelle</option>
                        <option value="Allen">Allen</option>
                    </select>
                   { !isPending && <button>Add Blog</button>}
                   { isPending && <button disabled>Adding Blog...</button>}
            </form>
        </div>
      );
}

export default Create;