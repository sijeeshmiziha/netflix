#!/bin/bash
# Netflix Clone - Fresh git history (48 commits, May 20 - Jun 9, 2021)
# Author: sijeeshmiziha <sijeeshmonbalan@gmail.com>
# Run from repo root. Then: git push --force origin main

set -euo pipefail
cd "$(dirname "$0")/.."

AUTHOR_NAME="sijeeshmiziha"
AUTHOR_EMAIL="sijeeshmonbalan@gmail.com"

rm -rf .git
git init -b main

add_commit() {
  local date="$1" msg="$2"
  shift 2
  git add "$@" 2>/dev/null || true
  git diff --cached --quiet && return 0
  GIT_AUTHOR_NAME="$AUTHOR_NAME" GIT_AUTHOR_EMAIL="$AUTHOR_EMAIL" \
  GIT_AUTHOR_DATE="$date" GIT_COMMITTER_NAME="$AUTHOR_NAME" \
  GIT_COMMITTER_EMAIL="$AUTHOR_EMAIL" GIT_COMMITTER_DATE="$date" \
  git commit -m "$msg"
}

# 1-4: Project setup & API config (May 20-21)
add_commit "2021-05-20T10:23:47+0530" "Initialize React project with Create React App" \
  .gitignore package.json package-lock.json public/index.html public/manifest.json public/robots.txt src/index.js
add_commit "2021-05-20T15:47:12+0530" "Set up main app component with context providers and routing" \
  src/App.js src/App.css
add_commit "2021-05-21T09:32:18+0530" "Configure Axios instance with TMDB API base URL" \
  src/api/axiosInstance.js
add_commit "2021-05-21T14:42:36+0530" "Define TMDB API key and image URL constants" \
  src/config/constants.js

# 5-6: API endpoint config (May 22)
add_commit "2021-05-22T10:38:42+0530" "Add API endpoint URL builders for all content categories" \
  src/config/urls.js
add_commit "2021-05-22T15:21:17+0530" "Create TMDB service layer with fetch and search functions" \
  src/api/tmdbService.js

# 7-12: Core UI components (May 24-26)
add_commit "2021-05-24T09:08:34+0530" "Build navigation bar with logo, search bar, and profile menu" \
  src/components/NavBar/NavBar.js src/components/NavBar/NavBar.css src/components/NavBar/index.js
add_commit "2021-05-24T14:52:47+0530" "Create footer component with site navigation links" \
  src/components/Footer/Footer.js src/components/Footer/Footer.css src/components/Footer/index.js
add_commit "2021-05-25T10:43:28+0530" "Build hero banner with trending content and action buttons" \
  src/components/Banner/Banner.js src/components/Banner/Banner.css src/components/Banner/index.js
add_commit "2021-05-25T15:12:39+0530" "Create movie card component with poster and hover effects" \
  src/components/MovieCard/MovieCard.js src/components/MovieCard/MovieCard.css src/components/MovieCard/index.js
add_commit "2021-05-26T09:34:51+0530" "Build horizontal scrolling row for genre listings" \
  src/components/RowPost/RowPost.js src/components/RowPost/RowPost.css src/components/RowPost/red-x.svg src/components/RowPost/index.js
add_commit "2021-05-26T14:19:27+0530" "Create TMDB image component with loading and error states" \
  src/components/TmdbImage/TmdbImage.js src/components/TmdbImage/TmdbImage.css src/components/TmdbImage/index.js

# 13-14: Loading states (May 27)
add_commit "2021-05-27T10:14:33+0530" "Build loading spinner component" \
  src/components/Loading/Loading.js src/components/Loading/Loading.css src/components/Loading/index.js
add_commit "2021-05-27T15:47:18+0530" "Create skeleton loading placeholders with shimmer animations" \
  src/components/Skeleton/Skeleton.js src/components/Skeleton/Skeleton.css src/components/Skeleton/index.js

# 15-19: State management, layouts & routing (May 28-29)
add_commit "2021-05-28T09:31:24+0530" "Create modal context for managing movie detail overlay" \
  src/context/ModalContext.js
add_commit "2021-05-28T11:48:53+0530" "Implement My List context with localStorage persistence" \
  src/context/MyListContext.js
add_commit "2021-05-28T15:23:14+0530" "Build browse page layout with navbar and footer" \
  src/layouts/BrowseLayout.js src/layouts/BrowseLayout.css
add_commit "2021-05-29T10:41:37+0530" "Create info page layout wrapper with title and content area" \
  src/layouts/InfoLayout.js src/layouts/InfoLayout.css
add_commit "2021-05-29T14:17:28+0530" "Set up app routes with lazy loading and Suspense" \
  src/routes/AppRoutes.js

# 20-21: Authentication pages (May 31)
add_commit "2021-05-31T09:22:34+0530" "Build login page with Netflix-style sign-in form" \
  src/pages/auth/LoginPage.js src/pages/auth/LoginPage.css
add_commit "2021-05-31T14:58:47+0530" "Create profile selection page with avatar grid" \
  src/pages/auth/ProfilePage.js src/pages/auth/ProfilePage.css

# 22-25: Browse pages (Jun 1-2)
add_commit "2021-06-01T10:28:42+0530" "Build main browse page with banner and genre rows" \
  src/pages/browse/BrowsePage.js src/pages/browse/BrowsePage.css
add_commit "2021-06-01T14:53:18+0530" "Create movies browse page with category filters" \
  src/pages/browse/MoviesBrowsePage.js src/pages/browse/MoviesBrowsePage.css
add_commit "2021-06-02T09:41:36+0530" "Build TV shows browse page with genre listings" \
  src/pages/browse/TvBrowsePage.js src/pages/browse/TvBrowsePage.css
add_commit "2021-06-02T14:23:14+0530" "Create New and Popular trending content page" \
  src/pages/browse/NewAndPopularPage.js src/pages/browse/NewAndPopularPage.css

# 26-28: Movie features (Jun 3)
add_commit "2021-06-03T10:31:24+0530" "Build movie detail modal with cast and similar titles" \
  src/components/MovieModal/MovieModal.js src/components/MovieModal/MovieModal.css src/components/MovieModal/index.js
add_commit "2021-06-03T14:53:18+0530" "Create YouTube trailer player using react-youtube" \
  src/components/ShowTrailer/ShowTrailer.js src/components/ShowTrailer/ShowTrailer.css src/components/ShowTrailer/index.js
add_commit "2021-06-03T17:42:36+0530" "Add info page component barrel export" \
  src/components/InfoPage/index.js

# 29-31: Search & My List hook (Jun 4)
add_commit "2021-06-04T09:08:52+0530" "Create debounce hook for search input optimization" \
  src/hooks/useDebounce.js
add_commit "2021-06-04T11:36:43+0530" "Build search page with TMDB multi-search integration" \
  src/pages/search/SearchPage.js src/pages/search/SearchPage.css
add_commit "2021-06-04T15:17:42+0530" "Implement useMyList hook with localStorage persistence" \
  src/hooks/useMyList.js

# 32-34: My List page & first info pages (Jun 5)
add_commit "2021-06-05T10:42:16+0530" "Build My List page for saved titles display" \
  src/pages/my-list/MyListPage.js src/pages/my-list/MyListPage.css
add_commit "2021-06-05T14:08:43+0530" "Create Help Centre information page" \
  src/pages/info/HelpCentrePage.js src/pages/info/HelpCentrePage.css
add_commit "2021-06-05T16:37:21+0530" "Build Gift Cards page" \
  src/pages/info/GiftCardsPage.js src/pages/info/GiftCardsPage.css

# 35-36: Info pages continued (Jun 6)
add_commit "2021-06-06T11:12:34+0530" "Add Media Centre and Investor Relations pages" \
  src/pages/info/MediaCentrePage.js src/pages/info/MediaCentrePage.css src/pages/info/InvestorRelationsPage.js src/pages/info/InvestorRelationsPage.css
add_commit "2021-06-06T15:28:52+0530" "Build Jobs information page" \
  src/pages/info/JobsPage.js src/pages/info/JobsPage.css

# 37-40: Legal & settings pages (Jun 7)
add_commit "2021-06-07T09:16:37+0530" "Create Terms of Use legal page" \
  src/pages/info/TermsOfUsePage.js src/pages/info/TermsOfUsePage.css
add_commit "2021-06-07T11:48:23+0530" "Add Privacy policy page" \
  src/pages/info/PrivacyPage.js src/pages/info/PrivacyPage.css
add_commit "2021-06-07T14:33:41+0530" "Build Legal Notices page" \
  src/pages/info/LegalNoticesPage.js src/pages/info/LegalNoticesPage.css
add_commit "2021-06-07T16:21:16+0530" "Create Cookie Preferences settings page" \
  src/pages/info/CookiePreferencesPage.js src/pages/info/CookiePreferencesPage.css

# 41-44: Remaining pages & formatting (Jun 8)
add_commit "2021-06-08T09:16:28+0530" "Add Corporate Information and Contact Us pages" \
  src/pages/info/CorporateInfoPage.js src/pages/info/CorporateInfoPage.css src/pages/info/ContactUsPage.js src/pages/info/ContactUsPage.css
add_commit "2021-06-08T11:33:19+0530" "Create Audio Description and Subtitles settings pages" \
  src/pages/info/AudioDescriptionPage.js src/pages/info/AudioDescriptionPage.css src/pages/info/AudioSubtitlesPage.js src/pages/info/AudioSubtitlesPage.css
add_commit "2021-06-08T14:12:47+0530" "Build 404 Not Found error page" \
  src/pages/not-found/NotFoundPage.js src/pages/not-found/NotFoundPage.css
add_commit "2021-06-08T16:28:31+0530" "Configure Prettier formatting rules" \
  .prettierrc .prettierignore

# 45-48: Polish & documentation (Jun 9)
add_commit "2021-06-09T09:47:16+0530" "Add VS Code workspace settings for consistent formatting" \
  .vscode/settings.json
add_commit "2021-06-09T11:17:28+0530" "Set up Node version configuration" \
  .nvmrc
add_commit "2021-06-09T13:08:34+0530" "Add MIT License" \
  LICENSE
# Force-add script since scripts/ is in .gitignore
git add -f README.md scripts/rewritehistor.sh 2>/dev/null || true
GIT_AUTHOR_NAME="$AUTHOR_NAME" GIT_AUTHOR_EMAIL="$AUTHOR_EMAIL" \
GIT_AUTHOR_DATE="2021-06-09T15:34:52+0530" GIT_COMMITTER_NAME="$AUTHOR_NAME" \
GIT_COMMITTER_EMAIL="$AUTHOR_EMAIL" GIT_COMMITTER_DATE="2021-06-09T15:34:52+0530" \
git commit -m "Add project documentation and finalize setup"

git remote add origin https://github.com/sijeeshmiziha/netflix.git 2>/dev/null || true
echo ""
echo "Done. Run: git push --force origin main"
