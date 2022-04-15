import react from 'react';
import { ProductItems } from './components/ProductItems';
import ProductGrid from './components/ProductGrid';
import { Header } from './components/Header';
import PopUp from './components/PopUp';

function App() {
  return (
    <>
    <Header/>
    <div className='background-main'>
    <ProductGrid/>
    <PopUp/>
    </div>
    </>
  )
}
export default App;