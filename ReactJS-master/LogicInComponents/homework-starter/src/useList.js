import { useState, useEffect } from 'react';
const LOCAL_STORAGE_KEY = 'shopping_list_items';

export function useList() {
  const [list, setList] = useState(() => {
    const savedList = localStorage.getItem(LOCAL_STORAGE_KEY);
    
    if (savedList) {
      try {
        return JSON.parse(savedList);
      } catch (error) {
        console.error("error localStorage:", error);
      }
    }
    
    return [
      { id: '001', title: 'хлеб', done: false },
      { id: '002', title: 'молоко', done: true },
      { id: '003', title: 'сметана', done: false }
    ];
  });

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(list));
  }, [list]);

  /** Создать новый элемент. */
  const createItem = () => {
    const item = {
      id: crypto.randomUUID(),
      title: '',
      done: false,
      isNew: true
    };

    setList([...list, item]);

  };
  /**
   * Установить заголовок элемента.
   *
   * @param id - ID элемента.
   * @param title - Заголовок элемента.
   */
  const setItemTitle = (id, title) => {
    setList(currentList => {
      if (!currentList || !Array.isArray(currentList)) {
        return currentList; 
      }

      return currentList.map(item => {
        if (item.id === id) {
          return { ...item, title: title };
        }
        return item;
      })
    })
  };

  /**
   * Переключить выполненность элемента.
   *
   * @param id - ID элемента.
   */
  const toggleItem = (id, isDone) => {
    setList(currentList => {
      if (!currentList || !Array.isArray(currentList)) return currentList;

      return currentList.map(item => {
        if (item.id === id) {
          return { ...item, done: isDone };
        }
        return item;
      })
    })
  };

  /**
   * Удалить элемент.
   *
   * @param id - ID элемента.
   */
  const deleteItem = (id) => {
    setList(currentList => {
      if (!currentList || !Array.isArray(currentList)) return currentList;

      return currentList.filter(item => item.id !== id);
    })
  };

  return {
    list,
    createItem,
    setItemTitle,
    toggleItem,
    deleteItem,
  };
}
