import { useState} from 'react'
import Header from './Header';

function Tasks () {
        const [inputValue, setInputValue] = useState();
        const [messages, setMessages] = useState([
          "Hello World",
          "FSC is the best course in the world",
          "的更多帖子",
        ]);

        function handleButtonClick() {
          setMessages([...messages, inputValue]);
        }

        return (
          <>
            <Header>Add a Task</Header>
            <input
              type="text"
              placeholder="Create your task..."
              className="input"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button className="button" onClick={handleButtonClick}>
              Add Task
            </button>

            <Header>My Tasks</Header>

            <ul>
              {messages.map((message, i) => (
                <li key={i}>{message}</li>
              ))}
            </ul>
          </>
        );
}

export default Tasks;