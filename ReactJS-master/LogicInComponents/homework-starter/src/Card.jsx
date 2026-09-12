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
  const [valueTitle, setValueTitle] = useState(title)
 
  const handleTitleChange = (event) => {
    setValueTitle(event.target.value)
    onTitleChange(id, event.target.value);
  };

  const handleCheckboxChange = (e) => {
    onToggle(id,!done);
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

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault(); 
      handleCheckboxChange(id);
    }
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <input
        className="card__done"
        id={id + '-01'}
        type="checkbox"
        checked={done}
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
        onKeyDown={handleKeyDown}
        onBlur={handleTitleBlur}
      />
    </form>
  );
};
