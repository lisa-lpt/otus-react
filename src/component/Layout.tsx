import { Outlet, useNavigation } from 'react-router';
import { Header } from './Header';

import LoadingFallback from './LoadingFallback';
import { AppShell, Container, Flex } from '@mantine/core';

export const Layout: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <AppShell header={{ height: 40 }} footer={{ height: 60 }}>
        <AppShell.Header>
          <Header />
        </AppShell.Header>
        <AppShell.Main>
          {navigation.state === 'loading' ? <LoadingFallback /> : <Outlet />}
        </AppShell.Main>
        <AppShell.Footer>
          <Flex
            gap="xs"
            justify="center"
            align="center"
            direction="column"
            wrap="nowrap"
          >
            <span style={{ color: 'green' }}>
              Catalog of books. Rights are not reserved.
            </span>
            <span style={{ color: 'green' }}> Done by me</span>
          </Flex>
        </AppShell.Footer>
      </AppShell>
    </Container>
  );
};
