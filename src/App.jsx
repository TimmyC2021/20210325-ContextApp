import './App.css';
import ThemeProvider from './context/ThemeProvider';


function App() {
  return (
    <div className="App">
      <main>
        <ThemeProvider />
      </main>
    </div>
  );
}

export default App;
