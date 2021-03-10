import React, { useState } from 'react';
import styled, {css} from 'styled-components';
import { MdModeEdit, MdDelete } from 'react-icons/md';
import { useExpenitureDispatch, useExpenitureState } from './ExpenditureContext';
import Dialog from './Dialog'

const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size:24px;
  cursor: pointer;
  `
const Edit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size:24px;
  cursor: pointer;
  margin-right: 8px;
`
const Cost = styled.div`
  font-size: 16px;
  font-weight: bold;
  color: #c92a2a;
  margin-right: 16px;
`

const Contents = styled.div`
  font-size: 16px;
  font-weight: bold;
  flex: 1;
`

const categoryPalette = {
  식사: 'yellow',
  식료품: 'lime',
  교통: 'orange',
  생활: 'purple',
  의료: 'lightblue',
};

const FilterItem = styled.div`
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  margin-right: 16px;

  ${({ theme, category }) => {
    const color = categoryPalette[category];

    return css`
      ${category &&
        css`
          background: ${theme.palette[color]};
        `};
    `;
  }}
  /* margin-right: 10px; */
`
const ExpenditureItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;

`

function ExpenditureItem({id, category, title, amount}) {
  const dispatch = useExpenitureDispatch();
  const state = useExpenitureState();
  const item = state.find(initialItem => initialItem.id === id)
  


  const [removeDialog, setRemoveDialog] = useState(false);
  const [editDialog, setEditDialog] = useState(false);
  const [inputs, setInputs] = useState({
    title: item.title,
    amount: item.amount,
  })
  const [select, setSelect] = useState(item.category);

  const removeOpen = () => setRemoveDialog(true);
  const removeCancel = () => setRemoveDialog(false);
  const editOpen = () => setEditDialog(true);
  const editCancel = () => setEditDialog(false);

  const onRemove = () =>
    dispatch({
      type: 'REMOVE',
      id
    })
  
  const onChange = e => {
    const {name, value} = e.target;
    
    setInputs({
      ...inputs,
      [name]: value,
    })
  }

  const onSelect = e => {
    setSelect(e.target.value);
  }

  const onEdit = () => {
    dispatch({
      type: 'EDIT',
      item: {
        id,
        title: inputs.title,
        category: select,
        amount: Number(inputs.amount),
      }
    })
    editCancel();
  }

  return (
    <>
    <ExpenditureItemBlock>
     <FilterItem category={category}>{category}</FilterItem>
     <Contents>{title}</Contents>
     <Cost>{amount}</Cost>
     <Edit onClick={editOpen}>
       <MdModeEdit />
     </Edit>
     <Remove onClick={removeOpen}>
       <MdDelete />
     </Remove>
    </ExpenditureItemBlock>
     {removeDialog && (
     <Dialog
      text="정말 삭제 하시겠습니까?"
      confirmText="삭제"
      confirmColor="pink"
      cancelColor="gray"
      onConfirm={onRemove}
      onCancel={removeCancel}
     >
     </Dialog>
    )}
    {editDialog && (
     <Dialog
     text="지출 수정"
     confirmText="수정"
     cancelColor="gray"
     onCancel={editCancel}
     onConfirm={onEdit}
     >
      <h4>내용</h4>
      <input name="title" onChange={onChange} value={inputs.title}/>
      <h4>금액</h4>
      <input type="number" name="amount"  min="0"
      step="1000" onChange={onChange} value={inputs.amount}/>
      <h4>카테고리</h4>
      <select onChange={onSelect} value={select}>
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
export default React.memo(ExpenditureItem);