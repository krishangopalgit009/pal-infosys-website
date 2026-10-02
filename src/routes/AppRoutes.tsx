import { Navigate, Route, Routes } from 'react-router'
import { AppLayout } from '../components/layout/AppLayout'
import { AboutPage } from '../pages/AboutPage'
import { ContactPage } from '../pages/ContactPage'
import { HomePage } from '../pages/HomePage'
import { IndustriesPage } from '../pages/IndustriesPage'
import { InsightsPage } from '../pages/InsightsPage'
import { InsightArticlePage } from '../pages/InsightArticlePage'
import { NotFoundPage } from '../pages/NotFoundPage'
import { ServicesPage } from '../pages/ServicesPage'
import { ServiceLandingPage } from '../pages/ServiceLandingPage'
import { SolutionsPage } from '../pages/SolutionsPage'
import { TechnologyPage } from '../pages/TechnologyPage'
import { WorkPage } from '../pages/WorkPage'

export function AppRoutes() {
  return (
    <AppLayout>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<AboutPage />} path="/about" />
        <Route element={<ServicesPage />} path="/services" />
        <Route element={<ServiceLandingPage />} path="/services/:slug" />
        <Route element={<SolutionsPage />} path="/solutions" />
        <Route element={<IndustriesPage />} path="/industries" />
        <Route element={<WorkPage />} path="/platform-expertise" />
        <Route element={<Navigate replace to="/platform-expertise" />} path="/work" />
        <Route element={<TechnologyPage />} path="/technology" />
        <Route element={<InsightsPage />} path="/insights" />
        <Route element={<InsightArticlePage />} path="/insights/:slug" />
        <Route element={<ContactPage />} path="/contact" />
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </AppLayout>
  )
}
