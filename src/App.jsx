import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import SpinnerFullPage from "./Components/SpinnerFullPage";
import { CitiesProvider } from "./contexts/CitiesContext";
import { AuthProvider } from "./contexts/FakeAuthContext";
import ProtectedRoute from "./pages/ProtectedRoute";

import CityList from "./Components/CityList";
import CountryList from "./Components/CountryList";
import City from "./Components/City";
import Form from "./Components/Form";

// import HomePage from "./pages/HomePage";
// import ProductPage from "./pages/ProductPage";
// import PricingPage from "./pages/PricingPage";
// import LoginPage from "./pages/LoginPage";
// import AppLayoutPage from "./pages/AppLayoutPage";
// import NotFoundPage from "./pages/NotFoundPage";

/* 
bundle size before lazy loading  
dist/assets/index-90bc3f62.css   29.93 kB │ gzip:   5.06 kB
dist/assets/index-12340b87.js   512.22 kB │ gzip: 147.89 kB 
*/

// lazy loading
const HomePage = lazy(() => import("./pages/HomePage"));
const ProductPage = lazy(() => import("./pages/ProductPage"));
const PricingPage = lazy(() => import("./pages/PricingPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const AppLayoutPage = lazy(() => import("./pages/AppLayoutPage"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage"));

function App() {
  return (
    <AuthProvider>
      <CitiesProvider>
        <BrowserRouter>
          <Suspense fallback={<SpinnerFullPage />}>
            <Routes>
              <Route index element={<HomePage />} />
              <Route path="product" element={<ProductPage />} />
              <Route path="pricing" element={<PricingPage />} />
              <Route path="login" element={<LoginPage />} />
              <Route
                path="app"
                element={
                  <ProtectedRoute>
                    <AppLayoutPage />
                  </ProtectedRoute>
                }
              >
                <Route index element={<Navigate replace to="cities" />} />
                <Route path="cities" element={<CityList />} />
                <Route path="cities/:id" element={<City />} />
                <Route path="countries" element={<CountryList />} />
                <Route path="form" element={<Form />} />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </CitiesProvider>
    </AuthProvider>
  );
}

export default App;
