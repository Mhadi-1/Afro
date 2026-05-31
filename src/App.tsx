import { I18nProvider } from '@/components/features/I18nProvider';
import { AppRouter } from '@/components/layout/AppRouter';

function App() {
  return (
    <I18nProvider>
      <AppRouter />
    </I18nProvider>
  );
}

export default App;
