// import logo from './logo.svg';
import './App.css';
import { nanoid } from 'nanoid'

import React, { useState } from 'react';
import uuid from 'react-uuid';
import Product from './Product';
import User from './User';

function id() {
  return uuid()
}
// function App() {
//   const res = users.map(function(item) {
//     return <li key={item.id}>
//       Name: {item.name};
//       Surname: {item.surn};
//       Age: {item.age}
//     </li>
//   })
//   return <ul>
//     { res }
//   </ul>
// }

// function App() {
//   let [inCart, setInCart] = useState(false);

//   return <div>
//     <span>{inCart ? 'в корзине' : 'не в корзине'}</span>

//     <button onClick={() => setInCart(!inCart)}>btn</button>
//   </div>
// }

// function App() {
//   let [name, setName] = useState('Ivan');
//   let [surname, setSurname] = useState('Ivanov');
//   let [age, setAge] = useState(20);
//   let [inStatus, setStatus] = useState(false);

//   return <div>
//     <span>{name}</span>
//     <span>{surname}</span>
//     <span>{age}</span>
//     <span>{inStatus ? 'blocked' : 'unblocked'}</span>
//     <button onClick={() => setName('Dimitar')}>change name</button>
//     <button onClick={() => setSurname('Dimitrov')}>change surname</button>
//     <button onClick={() => setAge(age + 1)}>add age</button>
//     <button onClick={() => setAge(age - 1)}>remove age</button>
//     <button onClick={() => setStatus(!inStatus)}>{inStatus ? 'unblock' : 'block'}</button>
//   </div>
// }

// function showYear(age) {
//   let year = new Date().getFullYear() - age
//   return year
// }

// function App() {
//   const [value1, setValue1] = useState('');
//   // const [value2, setValue2] = useState('');

//   function handleChange(e) {
//     setValue1(e.target.value)
//   }

//   return <div>
//     <input value={value1} onChange={handleChange} />
//     <p>{showYear(value1)}</p>

//     {/* <input value={value2} onChange={ e => setValue2( e.target.value)} />
//     <p>text: {value2 ** 3}</p> */}
//   </div>
// }

function middleSum(arr) {
  let sum = 0;
  let res = 0;
  for (const elem of arr) {
    sum += +elem;
  }
  res = sum/ arr.length;
  return res;
}

const initNotes = [
	{
		id: 'GYi9G_uC4gBF1e2SixDvu',
		prop1: 'value11',
		prop2: 'value12',
		prop3: 'value13',
	},
	{
		id: 'IWSpfBPSV3SXgRF87uO74',
		prop1: 'value21',
		prop2: 'value22',
		prop3: 'value23',
	},
	{
		id: 'JAmjRlfQT8rLTm5tG2m1L',
		prop1: 'value31',
		prop2: 'value32',
		prop3: 'value33',
	},
];
const initNotes2 = [
	{
		id: id(),
		name: 'name1',
		desc: 'long description 1',
		show: false,
	},
	{
		id: id(),
		name: 'name2',
		desc: 'long description 2',
		show: false,
	},
	{
		id: id(),
		name: 'name3',
		desc: 'long description 3',
		show: false,
	},
];

const initNotes3 = [
	{text: 'note1', isEdit: false},
	{text: 'note2', isEdit: false},
	{text: 'note3', isEdit: false},
];
// const id = 'IWSpfBPSV3SXgRF87uO74';
const newElem = {
	id: 'GMNCZnFT4rbBP6cirA0Ha',
	prop1: 'value41',
	prop2: 'value42',
	prop3: 'value43',
};

const data = {
	id: 'IWSpfBPSV3SXgRF87uO74',
	prop1: 'value21 !',
	prop2: 'value22 !',
	prop3: 'value23 !',
};

const prop = 'prop1';
const valueProp = '!!!';
const prop2 = 'prop2';
const valueProp2 = '!!!';

const initProds = [
	{id: id(), nameHead: 'Name', name: 'prod1', nameCatg: 'catalog', catg: 'catg1', cost: 100},
	{id: id(), nameHead: 'Name', name: 'prod2', nameCatg: 'catalog', catg: 'catg2', cost: 200},
	{id: id(), nameHead: 'Name', name: 'prod3', nameCatg: 'catalog', catg: 'catg3', cost: 300},
];

const initProds2 = [
	{
		id: id(),
		name: 'prod1',
		cost: 'cost1',
		desc: 'long description 1',
		comm: 'my super comment 1'
	},
	{
		id: id(),
		name: 'prod2',
		cost: 'cost2',
		desc: 'long description 2',
		comm: 'my super comment 2'
	},
	{
		id: id(),
		name: 'prod3',
		cost: 'cost3',
		desc: 'long description 3',
		comm: 'my super comment 3'
	},
];

function App() {
  const [value1, setValue1] = useState('2022-11-10');
  const [value2, setValue2] = useState(new Date());
  const [value3, setValue3] = useState('');
  const [result, setResult] = useState(0);
  const [checked, setChecked] = useState(true);
  const [valueSelect, setValueSelect] = useState('');
  const [value, setValue] = useState(1)
  const texts = ['text1', 'text2', 'text3'];
  const [notes, setNotes] = useState([1,2,3,4,5]);
  const [notes1, setNotes1] = useState(['a', 'b', 'c', 'd', 'e']);
  const [valueInputArr, setValueInputArr] = useState('');
  const [notes2, setNotes2] = useState([1,2,3,4,5,6,7,8,9]);
  const [notes3, setNotes3] = useState([1,2,3,4,5]);
  const [editNum, setEditNum] = useState(null);
  const [obj, setObj] = useState({
    prop1: 'value1',
    prop2: 'value2',
    prop3: 'value3',
  });
  const [valueTab1, setValueTab1] = useState('');
	const [valueTab2, setValueTab2] = useState('');
	const [valueTab3, setValueTab3] = useState('');
  const [notes4, setNotes4] = useState(initProds);
  const [notes5, setNotes5] = useState(initNotes);
	const [editId, setEditId] = useState(null);
  const rows = notes4.map(function(item) {
		return <tr key={item.id}>
			<td>{item.name}</td>
			<td>{item.cost}</td>
      <td><button onClick={() => setEditId(item.id)}>edit</button></td>
      <td><button onClick={() => remItem2(item.id)}>remove</button></td>
		</tr>;
	});
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);

	const [notes6, setNotes6] = useState(initNotes2);
	const [notes7, setNotes7] = useState(initProds2);
  const [notes8, setNotes8] = useState(initNotes3);
	
	const result10 = notes8.map((note, index) => {
		let elem;
	
    if (!note.isEdit) {
      elem = <span  onClick={() => startEdit2(index)}>{note.text}</span>;
    } else {
      elem = <input
			value={note.text}
			onChange={event => changeNote2(index, event)}
      onBlur={() => endEdit(index)}
		/>;
    }
    
    return <li key={index}>{elem}</li>;
	});

  function changeNote2(index, event) {
    const copy = Object.assign([], notes8);
    copy[index].text = event.target.value;
    setNotes8(copy);
  }

  function endEdit(index) {
    const copy = Object.assign([], notes8);
    copy[index].isEdit = false;
    setNotes8(copy);
  }

  const [valueText, setValueText] = useState('text');

  const [valueText2, setValueText2] = useState('text2');
	const [isEditText, setIsEditText] = useState(false);

  let elemText;
	if (!isEditText) {
		elemText = <span onClick={( ) => setIsEditText(true)} >{valueText}</span>;
	} else {
		elemText = <input
			value={valueText}
      onChange= { event => setValueText(event.target.value)} 
		/>;
	}

  let elemA, elemB, elemC;
	if (visible1) {
		elemA = <p>text1</p>;
	} 
  if (visible2) {
		elemB = <p>text2</p>;
  } 
  if (visible3) {
		elemC = <p>text3</p>;
  }

  function getValue3(prop) {
    return notes4.reduce((res, note) => {
      if (note.id === editId) {
        return prop;
      } else {
        return res;
      }
    }, '');
  }

  function changeItem2(prop, event) {
    console.log(prop)
    setNotes4(notes4.map(note =>
			note.id === editId ? {...note, [prop]: event.target.value} : note
		));
  }

  const rowsHead = initProds.map(function(item) {
		return <tr key={item.id}>
			<th>{item.nameHead}</th>
			<th>{item.nameCatg}</th>
		</tr>;
	});

  const options = texts.map((text, index) => {
    return <option key={index} value={index}>{text}</option>
  });

  const resultArr = notes.map( (note, index) => {
    return <p key={index}>{note}</p>
  })

  const resultList = notes1.map((note, index) => {
    return <li className='relative pad-5' key={index}>{note}
      <span className='close' onClick={() => remItem(index)} >&#10005;</span>
    </li>
  })

  function handleChange() {
    let date1 = new Date(value1);
    let date2 = new Date(value2);
    let result = ((date1.getTime() - date2.getTime()) / (1000 * 3600 * 24));
    setResult(result)
    // setResult(Number(value1) + Number(value2))
  }

  function handleChange2(prop, event) {
    setObj({...obj, ...{[prop]: event.target.value}})
  }

  function remItem2(id) {
    setNotes4(notes4.filter(note => note.id !== id));
  }

  function addItem() {
		let obj = {
			id: id(),
			name: valueTab1,
      cost: valueTab2,
		};
		
		setNotes4([...notes4, obj]);
	}

  const result2 = notes2.map((note, index) => {
    return <input key={index} value={note} onChange={event => changeHandler(index, event)} />
  });

  const result3 = notes3.map((note, index) => {
    return <p key={index} onClick={() => setEditNum(index)}>
      {note}
    </p>
  });

  const result4 = notes3.map((note, index) => {
    return <p key={index} onClick={() => startEdit(index)}>
      {note}
    </p>
  });

  const result5 = notes5.map(note => {
		return <p key={note.id}>
			<span>{note.prop1}</span>
			<span>{note.prop2}</span>
			<span>{note.prop3}</span>
		</p>;
	});

  const result6 = notes4.reduce((res, note) => note.id === id ? note[prop] : res, '');

  const result7 = notes4.map(note => {
		return <p key={note.id}>
			<span>{note.prop1}</span>
			<span>{note.prop2}</span>
			<span>{note.prop3}</span>
			<button onClick={() => remItem2(note.id)}>remove</button>
		</p>;
	});

  const result8 = notes6.map(note => {
		let desc;
		if (note.show) {
			desc = <i>{note.desc}</i>;
		}
		
		return <p key={note.id}>
			{note.name}
      <button onClick={() => showDesc(note.id)}>show</button>
			{desc}
		</p>;
	});
  function showDesc(id) {
    setNotes6(notes6.map(note => {
      if (note.id === id) {
        return {...note, show: !note.show};
      } else {
        return note;
      }
    }));
  }

  const result9 = notes7.map(note => {
		let desc, comm;
		if (note.show) {
			desc = <i>{note.desc}</i>;
      comm = <i>{note.comm}</i>
		}
		
		return <li key={note.id}>
			{note.name}
      <button onClick={() => showDesc2(note.id)}>show</button>
			<span>{desc}</span> 
      <span>{comm}</span>
      
		</li>;
	});
  function showDesc2(id) {
    setNotes7(notes7.map(note => {
      if (note.id === id) {
        return {...note, show: !note.show};
      } else {
        return note;
      }
    }));
  }

  function startEdit(index) {
    setEditNum(index)
  }

  function editItem(event) {
    setNotes3( [...notes3.slice(0, editNum), event.target.value, ...notes3.slice(editNum + 1)]);
  }

  function createItem() {
    if (!editNum) {
      const res = [...notes3, ''];
      setNotes3(res);
      setEditNum(res.length - 1);
    }
  }

  function stopEdit() {
    setEditNum(null)
  }

  function changeItem(event) {
    setNotes3(...notes3.slice(0, editNum), event.target.value, ...notes3.slice(editNum + 1))
  }

  function changeHandler(index, event) {
    setNotes2([...notes2.slice(0, index), event.target.value, ...notes2.slice(index + 1)])
  }

  function changeObj() {
    setNotes5(notes5.map(note => {
      if(note.id === id) {
        return {...note, [prop]: valueProp, [prop2]: valueProp2};
      }  else {
        return note
      }
    } ))
  }
  let message;
  if(checked) {
    message = <p>сообщение 1</p>
  } else {
    message = <p>сообщение 2</p>
  }

  function addChange() {
    setResult(Number(value1) * Number(value2));
  }

  function addElem() {
    const copyArr = Object.assign([], notes)
    copyArr.push(6);
    setNotes(copyArr)
  }

  function removeElem() {
    const copyArrNew = Object.assign([], notes);
    copyArrNew.splice(resultArr.index, 1);
    setNotes(copyArrNew)
  }

  function remItem(index) {
    setNotes1([...notes1.slice(0, index), ... notes.slice(index + 1)])
  }

  function startEdit2(index) {
    const copy = Object.assign([], notes8);
    copy[index].isEdit = true;
    setNotes8(copy)
  }

  return <div>
    <Product name="product" cost="100" />
    <User name="Ivan" surname="Ivanov" salary="2000" />
    <User name="David" surname="Thompson" salary="2000" />
    <User name="Jhon" surname="Down" salary="2000" />

    <div className='wrapper'>

      <div className='wrapper__box'>
        <input defaultValue={value1} onChange={e => setValue1(e.target.value)} />

        <input defaultValue={value2} onChange={ e => setValue2(e.target.value)} />
        <button onClick={handleChange}>btn</button>
        <button onClick={addChange}>btn 2</button>
        <textarea value={value3} onChange={e => setValue3(e.target.value)}/>
        <p>{value3}</p>
        <p>text: {result}</p>
      </div>

      <div className='wrapper__box'>
        <input type="checkbox" checked={checked} onChange={() => setChecked(!checked)} />
        <button onClick={() => setChecked(!checked)}>btn 2</button>
        <p>состояние: {checked ? 'отмечен' : 'не отмечен'}</p>
        <div>{message}</div>
      </div>

      <div className='wrapper__box'>
        <select value={valueSelect} onChange={(e) => setValueSelect(e.target.value)}>
          {options}
        </select>
        <p>
          ваш выбор: {texts[valueSelect]}
        </p>
      </div>

      <div className='wrapper__box'>
        <label>
          <input type="radio" value="HTML" name="radio" checked={value === 'HTML' ? true : false} onChange={e => setValue(e.target.value)} />
          HTML
        </label>
        <label>
          <input type="radio" value="JS" name="radio" checked={value === 'JS' ? true : false} onChange={e => setValue(e.target.value)}/>
          JS
        </label>
        <label>
          <input type="radio" value="CSS" name="radio" checked={value === 'CSS' ? true : false} onChange={e => setValue(e.target.value)}/>
          CSS
        </label>
        <p>{value === 'JS' ?  value + ' вы молодец' : value}</p>

      </div>

      <div className='wrapper__box'>
        <button onClick={addElem} onChange={addElem}>add elem in arr</button>
        <button onClick={removeElem} onChange={removeElem}>remove elem from arr</button>
        <div>

          {resultArr}
        </div>
      </div>

      <div className='wrapper__box'>
        <input value={valueInputArr} onBlur={() => setNotes1([...notes1, valueInputArr], setValueInputArr(''))} onChange={ e => setValueInputArr(e.target.value)} />

        <ul>
          {resultList}
        </ul>
      </div>

      <div className='wrapper__box'>
        {result2}
        {middleSum(notes2)}
      </div>

      <div className='wrapper__box'>
        <p> Click on elements</p>
        {result4}
        <input value={editNum ? notes3[editNum] : ''} onChange={editItem} onFocus={createItem} onBlur={stopEdit} />
      </div>

      <div className='wrapper__box'>
        <span>{obj.prop1}</span>
        <span>{obj.prop2}</span>
        <span>{obj.prop3}</span>

        <button onClick={() => setObj({...obj, ...{prop1: '!'}})}>change 1</button>
        <button onClick={() => setObj({...obj, ...{prop2: '2222'}})}>change 2</button>
        <button onClick={() => setObj({...obj, ...{prop3: '333'}})}>change 3</button>
      </div>

      <div className='wrapper__box'>
        <input value={obj.prop1} onChange={e => handleChange2('prop1', e)} />
        <input value={obj.prop2} onChange={e => handleChange2('prop2', e)} />
        <input value={obj.prop3} onChange={e => handleChange2('prop3', e)} />

        <br />
        {obj.prop1} - {obj.prop2} - {obj.prop3}
      </div>

      <div className='wrapper__box'>
        {result5}
        <button onClick={() => setNotes5(notes5.filter(note => note.id !== id))}>click for delete </button>
        <button onClick={() => setNotes5([...notes5, newElem])} >click for add</button>
        <button onClick={() => setNotes5(notes5.map(note => note.id === data.id ? data : note))}>click for change</button>
        <button onClick={changeObj}>click for change an element</button>
      </div>


      <div className='wrapper__box-big'>
        <table width={300}>
          <thead>
            <tr>
              <th>
                Name
              </th>
              <th>
                Cost
              </th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
        <input value={valueTab1} onChange={event => setValueTab1(event.target.value)}  />
        <input value={valueTab2} onChange={event => setValueTab2(event.target.value)}  />

        <button onClick={addItem} >save</button>
      </div>

      <div className='wrapper__box'>
        <button onClick={() => setVisible1(!visible1)}>{visible1 ? 'hideA' : 'showA'}</button>
        <button onClick={() => setVisible2(!visible2)}>{visible2 ? 'hideB' : 'showB'}</button>
        <button onClick={() => setVisible3(!visible3)}>{visible3 ? 'hideC' : 'showC'}</button>
        {elemA} {elemB} {elemC}
      </div>

      <div className='wrapper__box'>
        {result8}
      </div>

      <div className='wrapper__box'>
        <ul>
          {result9}
        </ul>
      </div>

      <div className='wrapper__box'>
        {elemText}
        <button onClick={event => {setIsEditText(true); setValueText(valueText.value)}} >edit</button>
        <button onClick={() => setIsEditText(false)}>show</button>
      </div>

      <div className='wrapper__box'>
        {result10}
      </div>

    </div>
  </div>
}

export default App;
