import '@mantine/core/styles.css';
import { RouterProvider } from 'react-router';
import { router } from './router/router';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <MantineProvider>
      <Provider store={store}>
        <RouterProvider router={router} />;
      </Provider>
    </MantineProvider>
  );
}

export default App;
