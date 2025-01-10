import "./JournalForm.css";
import React, { useState } from 'react';

function JournalForm() {
    const [name, setNewName] = useState(""); 
    const [entries, setEntries] = useState([]); 
    const [entry, setEntry] = useState(""); 

    function handleChange(event) {
        setNewName(event.target.value);
    }
    function handleEntry(event) {
        setEntry(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault(); 
        if (name && entry) { 
            const newEntry = { name, text: entry, date: new Date().toLocaleString() };
            setEntries([...entries, newEntry]); 
            setNewName(""); 
            setEntry("");
        } 
    }
    return (
        <div className="title">
            <h1>Anonymous Journal</h1>
            <div className="nav-container">
                <nav>
                    <a className="nav1" href="#">About<span></span></a>
                    <a className="nav2" href="#">Submit<span></span></a>
                    <a className="nav3" href="#">Browse<span></span></a>
                </nav>
            </div>
            <form onSubmit = {handleSubmit}>
            {/*input name here */}
                <div>
                    <input
                        className="input-name"
                        type="text"
                        id="name"
                        placeholder="Enter your name"
                        value={name}
                        onChange={handleChange}
                    /><br/>
                </div>
                {/*input message here */}
                <div>
                    <input
                        className="input-message"
                        type="text"
                        id="message"
                        placeholder="Enter your message"
                        value={entry}
                        onChange={handleEntry}
                    /><br/>
                <button className="submit-button" onClick={handleSubmit}>Submit</button>
            </div>
            
            <div className="message-list">
                <h2>Your Message:</h2>
                {entries.length === 0 ? (
                    <p>Submit your first entry!</p>
                ) : (
                    entries.map((entry, index) => (
                        <div key={index} className="entry">
                            <h3>{entry.name}</h3>
                            <p>{entry.text}</p>
                            <small>{entry.date}</small>
                        </div>
                    ))
                )}
            </div>
            <footer>
                <small>&copy; Anonymous Journal</small>
                </footer>
            </form>
            
            {/*<div>
                <input
                    className="input-name"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={handleChange}
                /><br/>

                <input
                    className="input-entry"
                    type="text"
                    placeholder="Enter your message"
                    value={entry}
                    onChange={handleEntry}
                /><br/>

                <button className="submit-button" onClick={handleSubmit}>Submit</button>
            </div>
            <div className="entries-list">
                <h2>Your Message:</h2>
                {entries.length === 0 ? (
                    <p>No entries yet. Please submit your first entry!</p>
                ) : (
                    entries.map((entry, index) => (
                        <div key={index} className="entry">
                            <h3>{entry.name}</h3>
                            <p>{entry.text}</p>
                            <small>{entry.date}</small>
                        </div>
                    ))
                )}
            </div>*/}
        </div>
    );
}

export default JournalForm;