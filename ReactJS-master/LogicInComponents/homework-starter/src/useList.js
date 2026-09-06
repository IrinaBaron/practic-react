import { useState, useRef } from 'react';

export function useList() {
  const [list, setList] = useState([
    { id: '001', title: 'хлеб', done: false },
    { id: '002', title: 'молоко', done: true },
    { id: '003', title: 'сметана', done: false }
  ]);

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
  const deleteItem = (id) => {};

  return {
    list,
    createItem,
    setItemTitle,
    toggleItem,
    deleteItem,
  };
}
