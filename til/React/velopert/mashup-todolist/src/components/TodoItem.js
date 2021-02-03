import React from 'react';
import styled, {css} from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { useTodoDisPatch } from './TodoContext';

// 오른쪽 쓰레기통 아이콘
const Remove = styled.div` 
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size:24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;
// 왼쪽 체크박스
const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props => 
    props.done && 
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

// 텍스트
const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #495057;
  ${props => 
    props.done && 
    css`
      color: #ced4da;
    `}
`;

// 위에 세가지 컴포넌트가 보여직 되는것
const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top:12px;
  padding-bottom: 12px;

  &:hover {
    ${Remove} {
      opacity: 1
    }
  }
`;

function TodoItem({ id, done, text }) {
  const dispatch = useTodoDisPatch();
  const onToggle = () => 
    dispatch({
      type: 'TOGGLE',
      id
    })
  const onRemove = () => 
    dispatch({
      type: 'REMOVE',
      id
    })
  


  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  )
}
//  const dispatch = useTodoDisPatch();만 사용했기때문에 (state와 dispatch하지 않고)
// react.memo로 최적화 할수 있고, 내가 선택한 아이템을 제외시 리렌더링 하지 않음, 아니였음 리렌더링 되었음
// state와 dispatch 컨텍스트를 각각 만들어 사용하면 이런 효율성이 있음
// dispatch만 가져오기 때문에
export default TodoItem ;
 
