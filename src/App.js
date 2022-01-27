import './style.css';
import Rectangle from "./components/Rectangle";
import Block from "./components/Block";

function App() {
  return (
    <div>
      <header className="App-header">
        <div style={{...Rectangle.box}}>
        </div>
          <div style={{...Rectangle.box}}>
          </div>
            <div style={{...Rectangle.box}}>
        </div>

        <Block backColor={"gray"} borderColor={"pink"}/>

        <Block backColor={"red"} borderColor={"blue"}/>


        <Block backColor={"yellow"} borderColor={"gray"}/>



        <Block backColor={"pink"} borderColor={"yellow"}/>





      </header>
    </div>
  );
}

export default App;
