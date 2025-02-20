
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "slick-carousel/slick/slick.css";
import { ContextApi } from './components/ContextApi.jsx';
import store from './store'
import { Provider } from 'react-redux'

createRoot(document.getElementById('root')).render(

  <ContextApi>
   <Provider store={store}>
   <App />
   </Provider>

   
  </ContextApi>,
)
