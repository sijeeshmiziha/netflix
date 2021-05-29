import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Loading from '../components/Loading';

const LoginPage = lazy(() => import('../pages/auth/LoginPage'));
const ProfilePage = lazy(() => import('../pages/auth/ProfilePage'));
const BrowsePage = lazy(() => import('../pages/browse/BrowsePage'));
const TvBrowsePage = lazy(() => import('../pages/browse/TvBrowsePage'));
const MoviesBrowsePage = lazy(() => import('../pages/browse/MoviesBrowsePage'));
const NewAndPopularPage = lazy(() =>
  import('../pages/browse/NewAndPopularPage')
);
const SearchPage = lazy(() => import('../pages/search/SearchPage'));
const MyListPage = lazy(() => import('../pages/my-list/MyListPage'));
const NotFoundPage = lazy(() => import('../pages/not-found/NotFoundPage'));
const AudioSubtitlesPage = lazy(() =>
  import('../pages/info/AudioSubtitlesPage')
);
const AudioDescriptionPage = lazy(() =>
  import('../pages/info/AudioDescriptionPage')
);
const HelpCentrePage = lazy(() => import('../pages/info/HelpCentrePage'));
const GiftCardsPage = lazy(() => import('../pages/info/GiftCardsPage'));
const MediaCentrePage = lazy(() => import('../pages/info/MediaCentrePage'));
const InvestorRelationsPage = lazy(() =>
  import('../pages/info/InvestorRelationsPage')
);
const JobsPage = lazy(() => import('../pages/info/JobsPage'));
const TermsOfUsePage = lazy(() => import('../pages/info/TermsOfUsePage'));
const PrivacyPage = lazy(() => import('../pages/info/PrivacyPage'));
const LegalNoticesPage = lazy(() => import('../pages/info/LegalNoticesPage'));
const CookiePreferencesPage = lazy(() =>
  import('../pages/info/CookiePreferencesPage')
);
const CorporateInfoPage = lazy(() => import('../pages/info/CorporateInfoPage'));
const ContactUsPage = lazy(() => import('../pages/info/ContactUsPage'));

function AppRoutes() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route exact path="/home">
          <Redirect to="/browse" />
        </Route>
        <Route exact path="/browse" component={BrowsePage} />
        <Route path="/browse/tv" component={TvBrowsePage} />
        <Route path="/browse/movies" component={MoviesBrowsePage} />
        <Route path="/browse/trending" component={NewAndPopularPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/mylist" component={MyListPage} />
        <Route path="/audio-subtitles" component={AudioSubtitlesPage} />
        <Route path="/audio-description" component={AudioDescriptionPage} />
        <Route path="/help" component={HelpCentrePage} />
        <Route path="/gift-cards" component={GiftCardsPage} />
        <Route path="/media-centre" component={MediaCentrePage} />
        <Route path="/investor-relations" component={InvestorRelationsPage} />
        <Route path="/jobs" component={JobsPage} />
        <Route path="/terms-of-use" component={TermsOfUsePage} />
        <Route path="/privacy" component={PrivacyPage} />
        <Route path="/legal" component={LegalNoticesPage} />
        <Route path="/cookie-preferences" component={CookiePreferencesPage} />
        <Route path="/corporate-info" component={CorporateInfoPage} />
        <Route path="/contact" component={ContactUsPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
}

export default AppRoutes;
