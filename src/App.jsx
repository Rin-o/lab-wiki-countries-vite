import "./App.css";
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import CountryDetailsPage from './pages/CountryDetailsPage.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>LAB | React WikiCountries</h1>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:countryId' element={<CountryDetailsPage />} />

        <Route path='*' element={<h1>404 Page</h1>} />
      </Routes>
    </div>
  );
}

export default App;
