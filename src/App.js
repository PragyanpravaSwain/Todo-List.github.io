import React, {useState} from "react";
import List from "./List";

const App = () => {
  const[inputList, setInputList] = useState("");
  const[items,setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
      setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
    
  };

  const deleteItem = (id) => {
    console.log("deleted");

    setItems((oldItems)=>{
      return oldItems.filter((arrEle, index) => {
        return index !==id;
      });
    });
  };
   
  return(
  <>
    <div className="main_div">
      <div className="center_div">
        <br/>
        <h1>ToDo List</h1>
        <br/>
        <input type="text" placeholder="Add a Item" value={inputList} onChange={itemEvent}/>
        <button onClick={listOfItems}> + </button>

        <ol>
          {items.map((itemval, index) => {
            return (<List key={index} id={index} text={itemval} onSelect={deleteItem} />);
          })}
        </ol>
      </div>
    </div>
</>
  );
};

export default App;