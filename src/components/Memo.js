import React, { useState, useEffect } from 'react';

function Memo() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState('');
  const [isTextValid, setIsTextValid] = useState(true);
  const [amount, setAmount] = useState(1);
    const [skills, setSkills] = useState([]);

  const handleAddTodo = () => {
    setTodos([...todos, 'New Todo']);
  };

  const handleIncrement = () => {
    setCount(count + 1);
    setAmount(count*90)
  };

  const handleInputChange = (event) => {
    const newText = event.target.value;
    setInputText(newText);
    setIsTextValid(newText.length > 5);
  };

  const handleSubmit = () => {
    if (isTextValid) {
      setSkills([...skills, inputText]);
      setInputText('');
    }
  };

  useEffect(() => {
    console.log('Todos updated:', todos);
  }, [todos]);

  return (
    <div id="main">
      <div className='use-memo'>
        <h1>React.useMemo</h1>
        <h1>My todos</h1>
        <div className="memo-list">
        <p>New todos</p>
        {todos.map((todo, index) => (
          <p id={`todo-${index}`} key={index}>{todo}</p>
        ))}
      </div>
        <button id='add-todo-btn' onClick={handleAddTodo}>Add Todo</button>
      </div>
      <hr/>
      <p>Count:{count} <button id='incr-cnt' onClick={handleIncrement}>{count}</button></p>
      <h1>Expensive Calculation</h1>
      <p id='calc'>{amount}</p>
      <hr/>
      <hr/>
      <div className="memo-input">
        <h1>React.memo</h1>
        <input
          type="text"
          id='skill-input'
          value={inputText}
          onChange={handleInputChange}
          placeholder="add skill"
          className={isTextValid ? '' : 'invalid'}
        />
        <button id='skill-btn' onClick={handleSubmit}>
          Add Skill
        </button>
      </div>

      <ul className="memo-list">
        {skills.map((skill, index) => (
          <li id='item-jumbotron' key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default Memo;
