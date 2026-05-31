import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';

const HomePage = lazy(() => import('@/pages/HomePage'));
const CatalogPage = lazy(() => import('@/pages/CatalogPage'));
const AboutPage = lazy(() => import('@/pages/AboutPage'));

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream">
      <div className="flex flex-col items-center gap-4">
        <div className="size-10 rounded-full gold-gradient animate-pulse" />
        <span className="font-body text-sm text-mahogany/60">Loading...</span>
      </div>
    </div>
  );
}

export function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/catalog" element={<CatalogPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
