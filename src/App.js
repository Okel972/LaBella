import './App.css';
import { AppRoutes } from './routes';
import { AppProvider } from './provider/app';

function App() {
  return (
    <main className="App">
      <AppProvider>
        <AppRoutes />
      </AppProvider>
    </main>
  );
}

export default App;
