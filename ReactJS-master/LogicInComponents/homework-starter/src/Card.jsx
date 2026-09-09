import './Card.css';
import { useEffect, useRef, useState } from 'react';

export const Card = ({
  id,
  title,
  onTitleChange,
  done,
  onToggle,
  onDelete,
  isNew
}) => {
  const [isDone, setIsDone] = useState(done);
  const [valueTitle, setValueTitle] = useState(title)
  // const []
  const handleTitleChange = (event) => {
    setValueTitle(event.target.value)
    onTitleChange(id, event.target.value);
  };

  const handleCheckboxChange = (e) => {
    onToggle(id);
    setIsDone(!isDone);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onToggle(id);
  };

  const handleTitleBlur = () => {
    if (title === '') {
      onDelete(id);
    }
  };

  const inputRef = useRef(null);

  useEffect(() => {
    if (isNew && inputRef.current) {
      inputRef.current.focus();
      
      isNew = false; 
    }
  }, []);

  return (
    <form className="card" onSubmit={handleSubmit}>
      <input
        className="card__done"
        id={id + '-01'}
        type="checkbox"
        checked={isDone}
        onChange={handleCheckboxChange}
        tabIndex={-1}
      />

      <input
        className="card__title"
        ref={inputRef}
        type="text"
        value={valueTitle}
        id={id}
        onChange={handleTitleChange}
        onBlur={handleTitleBlur}
      />
    </form>
  );
};
