import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Header from "./components/Header";
import VerticalTabs from "./components/VerticalTabs";


function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Header />
        <VerticalTabs />
      </div>
    </DndProvider>

  );
}

export default App;
