import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [task, settask] = useState([]);
  
  const [newtask, setNewtask] = useState("");
  const [modtask, setModtask] = useState(null);
  const [modfiedtask, setModiedtask] = useState("");
 
  useEffect(()=>{
  const temp2 = localStorage.getItem("taskd");
  console.log(temp2);
  const savedtask = JSON.parse(temp2);
  console.log(savedtask);

  settask(savedtask);
  console.log(task) ;
},[])

  useEffect(()=>{
  const temp= JSON.stringify(task)
  localStorage.setItem('taskd',temp)
},[task])

  const creatnewtask = (e) => {
    e.preventDefault();
    const newtasks = {
      todo: newtask,
      sta: false,
    };

    settask([...task, newtasks]);
    console.log(task);
    setNewtask("");
  };
  const delltask = (delltask) => {
    const newtask = task.filter((task) => task.todo !== delltask);
    settask(newtask);
    alert("this ' " + delltask + "'   delleted");
  };
  const handleChange = (todo) => {
    const updatetask = task.map((task) => {
      if (task.todo === todo) {
        task.sta = !task.sta;
      }
      return task;
    });
    settask(updatetask);
  };
  const modf = (todo) => {
    const updatetask2 = task.map((task) => {
      if (task.todo === todo) {
        task.todo = modfiedtask;
      }
      return task;
    });
    settask(updatetask2);
    setModtask(null);
    setModiedtask("");
  };

  return (
    <div>
      <form onSubmit={creatnewtask}>
        <label>task: </label>
        <input
          type="text"
          onChange={(e) => {
            setNewtask(e.target.value);
          }}
          value={newtask}
        />
        <button> Add</button>
      </form>
      <div>
        {task.map((task, i) => {
          return (
            <div  key={i}>
              <h3 style={{ textDecoration: task.sta ? "line-through" : "" }}>
                {modtask === task.todo ? (
                  <input
                    type="text"
                    onChange={(e) => {
                      setModiedtask(e.target.value);
                    }}
                    value={modfiedtask}
                  />
                ) : (
                  <div>{task.todo}</div>
                )}

                <input
                  type="checkbox"
                  onChange={() => handleChange(task.todo)}
                ></input>

                {modtask === task.todo ? (
                  <button onClick={() => modf(task.todo)}>submit mod</button>
                ) : (
                  <button onClick={() => setModtask(task.todo)}>mod</button>
                )}

                <button onClick={() => delltask(task.todo)}>dell</button>
              </h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
