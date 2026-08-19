import { Outlet, useNavigation } from 'react-router';
import { Header } from './Header';

import LoadingFallback from './LoadingFallback';

export const Layout: React.FC = () => {
  const navigation = useNavigation();
  return (
    <div>
      <Header />
      <main>
        {navigation.state === 'loading' ? <LoadingFallback /> : <Outlet />}
      </main>
      <footer>
        <div>
          <p> Catalog of books. Your rights are not reserved.</p>
          <p> Done by me for me</p>
        </div>
      </footer>
    </div>
  );
};
