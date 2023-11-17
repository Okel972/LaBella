import './App.css';
import { MainRoutes } from './ MainRoutes';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

function App() {
  return (
    <main className="App">
      <Navbar />
      <MainRoutes />
      <Footer />
    </main>
  );
}

export default App;
