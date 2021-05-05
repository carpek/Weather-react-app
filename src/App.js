
import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
  <div className="container">

     <h1>Weather App</h1>
<Weather defaultCity="Vienna"/>

<footer>This weather app was codes by
<a href="https://github.com/carpek/Weather-react-app" target="_blank">  Lina Pek </a>
and is open sourced.</footer>
    </div>
    </div>
  );
}

 
