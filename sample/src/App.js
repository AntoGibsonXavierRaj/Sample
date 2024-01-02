import logo from './logo.svg';
import './App.css';
import {ListBoxComponent} from '@syncfusion/ej2-react-dropdowns'

function App() {
  const columnIcon = () => {
    return <svg width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="1" cy="1.87399" rx="1" ry="0.913048" fill="#233249" />
      <ellipse cx="1" cy="6.49996" rx="1" ry="0.913048" fill="#233249" />
      <ellipse cx="1" cy="11.1259" rx="1" ry="0.913048" fill="#233249" />
      <ellipse cx="5.8667" cy="1.87399" rx="1" ry="0.913048" fill="#233249" />
      <ellipse cx="5.8667" cy="6.49996" rx="1" ry="0.913048" fill="#233249" />
      <ellipse cx="5.8667" cy="11.1259" rx="1" ry="0.913048" fill="#233249" />
    </svg>
  }
  const listTemplate = (data) =>{
    return (
      <div>
        {data.text}
        <span>{columnIcon()}</span>
      </div>
    )
  }
  const data = [{id:"1", text : "asfgdfg"}, {id:"2", text : "asfdgdhj"}, {id:"3", text : "asdfghf"}]
  return (
    <div className="App">
      <div>
      <ListBoxComponent
        dataSource={data}
        itemTemplate = {listTemplate}
        allowDragAndDrop = {true}
        scope="Self"
      >

      </ListBoxComponent>
      </div>
    </div>
  );
}

export default App;
