import { Box } from "@mui/material";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";
import Preview from "./components/Perview";
import Sidebar from "./components/Sidebar";
import { Splitter, SplitterPanel } from "primereact/splitter";
import NavBar from "./components/NavBar";

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <Box>
        <NavBar />
        <Splitter>
          <SplitterPanel
            className="flex align-items-center justify-content-center"
            size={25}
            minSize={10}
          >
            <Sidebar />
          </SplitterPanel>
          <SplitterPanel
            className="flex align-items-center justify-content-center"
            size={75}
          >
            <Preview />
          </SplitterPanel>
        </Splitter>
      </Box>
    </DndProvider>
  );
}

export default App;
