# Netflix Clone — React & TMDB Streaming UI

> Open-source Netflix-style streaming UI for **browsing movies and TV shows**. Built with **React** and **TMDB API** — no backend server, no Redux. Browse by genre, watch trailers on YouTube, search with debounced multi-search, and save titles to My List. Includes Netflix Originals, trending, popular, top rated, and detailed modals with cast and similar titles.

**[Visit live demo](https://sijeesh-netflix.netlify.app)**

[![React 17](https://img.shields.io/badge/React-17.0.2-61dafb?logo=react)](https://reactjs.org/)
[![TMDB API](https://img.shields.io/badge/TMDB-API_v3-01b4e4?logo=themoviedatabase)](https://www.themoviedb.org/documentation/api)
[![Node 14](https://img.shields.io/badge/Node-14.x-339933?logo=node.js)](https://nodejs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](#contributing)

---

## Demo & Screenshots

**See it in action:** [Netflix Clone](https://sijeesh-netflix.netlify.app) — no signup, no install.

| **Home · Browse**                                                                                                                                                                                                                                | **Detail · Trailer**                                                                                                                                                                                                                                |
| :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![Netflix Clone home and browse](https://user-images.githubusercontent.com/91063960/139381648-76a0d2e5-9375-4f5a-8399-030888d8065e.png)](https://user-images.githubusercontent.com/91063960/139381648-76a0d2e5-9375-4f5a-8399-030888d8065e.png) | [![Netflix Clone detail and trailer](https://user-images.githubusercontent.com/91063960/139381555-95df7728-6b7e-4776-95e0-8c47192cdef2.png)](https://user-images.githubusercontent.com/91063960/139381555-95df7728-6b7e-4776-95e0-8c47192cdef2.png) |

| **Search & discovery**                                                                                                                                                                                                                  |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [![Netflix Clone search](https://user-images.githubusercontent.com/91063960/139381568-ac4cd0ed-161d-4e22-9ab3-06268e579e50.png)](https://user-images.githubusercontent.com/91063960/139381568-ac4cd0ed-161d-4e22-9ab3-06268e579e50.png) |

---

## Table of Contents

- [What's inside](#features) — Features and capabilities
  - [Browse by genre & trending](#content-browsing)
  - [Search & discovery](#search-and-discovery)
  - [Movie & TV details](#movie-and-tv-details)
  - [Trailer playback](#trailer-playback)
  - [My List](#my-list)
  - [UI & experience](#user-interface)
  - [Navigation & routes](#navigation-and-routing)
- [Built with](#tech-stack) — Tech stack
- [TMDB API reference](#tmdb-api-endpoints) — Endpoints used
- [Quick start](#getting-started) — Clone, install, run
- [Deploy](#deployment) — Go live
- [Contribute](#contributing)
- [License](#license)
- [Get in touch](#contact)

---

## Features

### Content Browsing

- **Genre rows** — Action, Romance, Horror, Comedy, Documentary via TMDB discover.
- **Netflix Originals** — Discover TV with network ID 213.
- **Trending** — Daily and weekly trending (all, TV, movies).
- **Popular and top rated** — For both movies and TV shows.
- **Movies** — Popular, top rated, upcoming, now playing.
- **TV shows** — Popular and top rated.
- **Horizontal scrolling rows** — Smooth scroll with arrow navigation and lazy-loaded images.

### Search and Discovery

- **Real-time search** — Debounced (400ms) multi-search for movies and TV shows.
- **Separate browse pages** — Movies, TV Shows, and New & Popular.
- **Grid layout** — Search results with posters.

### Movie and TV Details

- **Detail modal** — Backdrop, title, overview, metadata.
- **Cast** — Credits from TMDB.
- **Similar titles** — Recommendations.
- **Maturity ratings** — PG, 13+, 16+, 18+.
- **Match percentage** — Display on cards and in modal.

### Trailer Playback

- **YouTube trailers** — Play trailers in modal via `react-youtube` (video keys from TMDB).
- **Banner** — Hero with trending content; play, info, and list buttons; mute toggle.

### My List

- **Add/remove** — Add or remove movies and TV shows from My List.
- **Persistence** — Stored in `localStorage`.
- **My List page** — Dedicated route to view saved titles.

### User Interface

- **Netflix-style dark theme** — CSS variables (`--color-bg`, `--color-text`, etc.).
- **Responsive design** — Mobile menu and layout.
- **Hover effects** — Card hover with play, add to list, like, dislike, info.
- **Loading skeletons** — Shimmer for banner, rows, cards, and modal.
- **Scroll to top** — On route change.
- **Custom image component** — Loading and error states for TMDB images.

### Navigation and Routing

- **React Router v5** — Centralized routes in [AppRoutes](src/routes/AppRoutes.js); browse, movies, TV, trending, search, My List, profile, and info pages.
- **Layouts** — Browse layout and info layout for shared structure.
- **Profile selection** — Profile page.
- **Footer info pages** — Help, Privacy, Terms, Legal, Cookie preferences, Contact, and more.
- **404 page** — Not found page for unknown routes.

---

## Tech Stack

The app runs on **React** and **TMDB API**. No backend, no Redux.

| Layer        | Stack                                                                                           |
| :----------- | :---------------------------------------------------------------------------------------------- |
| **Frontend** | React 17, React Router 5, Context API (Modal, My List), Axios, react-youtube. Custom hooks (useDebounce, useMyList). |
| **API**      | TMDB API v3 via [tmdbService](src/api/tmdbService.js) — trending, discover, search/multi, movie/TV details with videos, credits, similar. |
| **Styling**  | Custom CSS (component-scoped), CSS variables, Google Fonts (Bebas Neue).                         |
| **Tooling**  | Create React App 4, Prettier, ESLint. Node 14.x.                                                |

### Built With

React · React Router · Context API · Axios · TMDB API · react-youtube · CSS

---

## TMDB API Endpoints

Key endpoints used (see [src/config/urls.js](src/config/urls.js)):

| Endpoint                                                                  | Purpose                                                    |
| :------------------------------------------------------------------------ | :--------------------------------------------------------- |
| `trending/all/day`, `trending/all/week`                                   | Banner and trending content.                               |
| `trending/tv/week`, `trending/movie/week`                                 | Trending by type.                                          |
| `discover/tv?with_networks=213`                                           | Netflix Originals.                                         |
| `discover/movie?with_genres=...`                                          | Genre rows (Action, Romance, Horror, Comedy, Documentary). |
| `tv/popular`, `tv/top_rated`                                              | TV browse.                                                 |
| `movie/popular`, `movie/top_rated`, `movie/upcoming`, `movie/now_playing` | Movies browse.                                             |
| `search/multi?query=...`                                                  | Search movies and TV.                                      |
| `movie/{id}?append_to_response=videos,similar,credits`                    | Movie details, trailer, cast, similar.                     |
| `tv/{id}?append_to_response=videos,similar,credits`                       | TV details, trailer, cast, similar.                        |

Images: `https://image.tmdb.org/t/p/original` and `.../t/p/w500`.

---

## Getting Started

**Prerequisites:** Node.js 14.x (use [.nvmrc](.nvmrc) with `nvm use`), npm. A [TMDB API key](https://www.themoviedb.org/settings/api) is required.

### 1. Clone and install

```bash
git clone https://github.com/sijeeshmiziha/netflix.git
cd netflix
npm install
```

### 2. TMDB API key

Create a `.env` file in the project root and add your [TMDB API key](https://www.themoviedb.org/settings/api):

```
REACT_APP_TMDB_API_KEY=your_api_key_here
```

The app reads the key from [src/config/constants.js](src/config/constants.js). Do not commit `.env` or your API key.

### 3. Run

```bash
npm start
```

Open **http://localhost:3000**

### Available scripts

| Script           | Description               |
| :--------------- | :------------------------ |
| `npm start`      | Start dev server          |
| `npm run build`  | Production build          |
| `npm test`       | Run tests                 |
| `npm run format` | Format code with Prettier |

---

## Deployment

1. **Build:** `npm run build` — output is in the `build/` folder.

2. **Static hosting** — Deploy the `build/` folder to **Vercel**, **Netlify**, **Firebase Hosting**, or any static host. Configure environment variables in the hosting dashboard if you use `.env` for the TMDB API key.

---

## Contributing

Contributions are welcome. Open an issue or submit a pull request. Keep code style consistent and run `npm run format` and `npm test` before submitting.

---

## License

**MIT.** See [LICENSE](LICENSE) for details.

---

## Contact

Feel free to reach out through the links below.

<a href="https://www.google.com/search?q=sijeesh+miziha" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/-WEB-FF4088?style=for-the-badge&logo=Google&logoColor=white" alt="Web"></a>
<a href="https://www.linkedin.com/in/sijeeshmiziha" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/-LinkedIn-0077B5?style=for-the-badge&logo=LinkedIn&logoColor=white" alt="LinkedIn"></a>
<a href="https://www.instagram.com/sijeeshmiziha" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/-Instagram-E4405F?style=for-the-badge&logo=Instagram&logoColor=white" alt="Instagram"></a>
<a href="https://twitter.com/sijeeshmiziha" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/-Twitter-1DA1F2?style=for-the-badge&logo=Twitter&logoColor=white" alt="Twitter"></a>
<a href="mailto:sijeeshmiziha1@gmail.com" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/-Gmail-D14836?style=for-the-badge&logo=Gmail&logoColor=white" alt="Gmail"></a>
<a href="https://www.youtube.com/c/sijeeshmiziha" target="_blank" rel="noopener noreferrer"><img src="https://img.shields.io/badge/-YouTube-FF0000?style=for-the-badge&logo=YouTube&logoColor=white" alt="YouTube"></a>
