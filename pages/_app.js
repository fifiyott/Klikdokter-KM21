import '../styles/globals.scss'
import { Provider } from 'react-redux';
import Store from '../redux/store/Store';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={Store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
