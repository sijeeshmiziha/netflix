import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'netflix_my_list';

function loadList() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveList(list) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch (e) {
    console.warn('Could not save My List', e);
  }
}

export function useMyList() {
  const [list, setList] = useState(loadList);

  useEffect(() => {
    saveList(list);
  }, [list]);

  const add = useCallback((item) => {
    setList((prev) => {
      const id = item.id;
      const type = item.media_type || (item.title ? 'movie' : 'tv');
      const key = `${type}-${id}`;
      if (
        prev.some(
          (x) => `${x.media_type || (x.title ? 'movie' : 'tv')}-${x.id}` === key
        )
      )
        return prev;
      return [...prev, { ...item, media_type: type }];
    });
  }, []);

  const getType = (x) => x.media_type || (x.title ? 'movie' : 'tv');

  const remove = useCallback((item) => {
    const type = getType(item);
    const id = item.id;
    setList((prev) =>
      prev.filter((x) => !(x.id === id && getType(x) === type))
    );
  }, []);

  const isInList = useCallback(
    (item) => {
      if (!item) return false;
      const type = item.media_type || (item.title ? 'movie' : 'tv');
      const id = item.id;
      return list.some(
        (x) =>
          x.id === id && (x.media_type || (x.title ? 'movie' : 'tv')) === type
      );
    },
    [list]
  );

  const toggle = useCallback(
    (item) => {
      if (isInList(item)) remove(item);
      else add(item);
    },
    [add, remove, isInList]
  );

  return { list, add, remove, isInList, toggle };
}
