import { useState, useRef } from 'react';

export function useList() {
  const [list, setList] = useState([
    { id: '001', title: 'хлеб', done: false },
    { id: '002', title: 'молоко', done: true },
    { id: '003', title: 'сметана', done: false }
  ]);

  const [changeTitle, setChangeTitle] = useState(null);

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
  const toggleItem = (id) => {
    // console.log(e.target.checked)
    // if(e.target.checked) {
    //   e.target.checked = true;
    // }
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
