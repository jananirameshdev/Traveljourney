import './App.css';
import Separate from './Separate';
import Card from './Card';
import Nav from './Nav';
function App() {
  const detail = Separate.map(det => {
    return <Card
      {...det} />
  })
  return (
    <div className='container'>
      <Nav />
      {detail}
    </div>
  );
}

export default App;
