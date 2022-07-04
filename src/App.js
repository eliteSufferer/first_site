import React, {useState} from "react";

function App() {
  const [likes, setLikes] = useState(0)
    const [value, setValue] = useState('Введите текст')
  function up(){
      setLikes(likes + 1)
  }

  function down(){
      setLikes(likes - 1)
  }

  return (
      <div className="App">
          <h1>{likes}</h1>
          <h1>{value}</h1>
          <input
              type={"text"}
              value={value}
              onChange={event => setValue(event.target.value)}
          />
          <button onClick={up}>Увеличить</button>
          <button onClick={down}>Уменьшить</button>


      </div>
  );
}

export default App;
