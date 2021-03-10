import React, {useState} from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useExpenitureDispatch, useExpenitureNextId } from './ExpenditureContext';
import Dialog from './Dialog'

const AddButton = styled.button`
  background: ${props => props.theme.palette.gray};
  /* &:hover {
    background:${props => props.theme.palette.yellow};
  }
  &:active {
    background: ${props => props.theme.palette.yellow};
  } */
  cursor: pointer; 
  width: 50px;
  height: 50px;
  display: flex; 
  align-items: center;
  margin: 20px;

  font-size: 60px;
  color: white;
  border-radius: 40px;
  
  border: none;
  outline: none;

  /* transition: 0.125s all ease-in;
  ${props => 
    props.open && 
    css`
      background: #ff6b6b;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: rotate(45deg);
    `} */
`

function ExpenditureCreate() {
  const nextId = useExpenitureNextId();
  const dispatch = useExpenitureDispatch(); 

  const [dialog, setDialog] = useState(false);
  const [inputs, setInputs] = useState({
    title: '',
    amount: '',
  })
  const {title, amount} = inputs;
  const [select, setSelect] = useState('식사')

  const open = () => setDialog(true);
  const onCancel = () => setDialog(false);

  const onConfirm = () => {
    dispatch({
      type: 'CREATE',
      item: {
        id: nextId.current,
        title,
        category: select,
        amount: Number(amount),
      }
    })
    onReset()
    nextId.current += 1;
    onCancel()
  }
 
  const onReset = () => {
    setInputs({
      ...inputs,
      title: '',
      amount: '',
    })
  }

  const onChange = e => {
    const {name, value} = e.target;

    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  const onSelect = e => {
    setSelect(e.target.value)
  }

 return (
  <>
   <AddButton onClick={open}>
     <MdAdd />
   </AddButton>
   {dialog && (
     <Dialog 
      text="지출 등록"
      confirmText="등록"
      cancelText="취소"
      onCancel={onCancel}
      onConfirm={onConfirm}
      cancelColor="gray"
     >
         <h4>내용</h4>
          <input name="title" onChange={onChange} value={inputs.title}/>
          <h4>금액</h4>
          <input type="number" name="amount" onChange={onChange} value={inputs.amount} min="0"
          step="1000"/>
          <h4>카테고리</h4>
          <select onChange={onSelect}>
          <option value="식사">식사</option>
          <option value="식료품">식료품</option>
          <option value="교통">교통</option>
          <option value="생활">생활</option>
          <option value="의료">의료</option>
          </select>
     </Dialog>
   )}
  </>
 )
}
export default ExpenditureCreate;