// App.jsx

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/ProductPage/ProductPage.jsx';
import LoginPage from './Pages/LoginPage/LoginPage.jsx';
import CheckOutPage from './Pages/CheckOutPage/CheckOutPage.jsx';

function App() {
 return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/checkoutpage" element={<CheckOutPage />} />

      </Routes>
    </Router>
 );
}

export default App;
