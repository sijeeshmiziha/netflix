import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './App.css';
import MovieModal from './components/MovieModal';
import AppRoutes from './routes/AppRoutes';
import { ModalProvider, useModal } from './context/ModalContext';
import { MyListProvider, useMyListContext } from './context/MyListContext';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppContent() {
  const { showModal, selectedMovie, closeModal, openModal } = useModal();
  const { isInList, toggle: toggleList } = useMyListContext();

  return (
    <div className="App">
      <ScrollToTop />
      <AppRoutes />
      {showModal && selectedMovie && (
        <MovieModal
          item={selectedMovie}
          onClose={closeModal}
          isInList={isInList}
          onToggleList={toggleList}
          onMovieClick={openModal}
        />
      )}
    </div>
  );
}

function App() {
  return (
    <ModalProvider>
      <MyListProvider>
        <AppContent />
      </MyListProvider>
    </ModalProvider>
  );
}

export default App;
