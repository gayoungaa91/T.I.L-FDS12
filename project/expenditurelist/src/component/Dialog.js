import React, {useState} from 'react';
import styled from 'styled-components';
import Button from './Button';
// import { useExpenitureDispatch, useExpenitureNextId } from './ExpenditureContext';


const DarkBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  /* 세로 좌우 정렬 */
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.8);
`
const DialogLayout = styled.div`
  width: 270px;
  padding: 1.5rem;
  background: #fff;
  border-radius: 5px;

  h3 {
    margin: 0;
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  `
const DialogBlock = styled.div`
  padding: 10px;

  h4 {
    margin: 0;
    margin-bottom: 5px;
    font-size: 1rem;
    font-weight: bold;
  }

  input {
    height: 20px;
    width: 90%;
    margin-bottom: 20px;
    border-radius: 5px;
    border: 2px solid #ced4da;
  }

  select {
    height: 27px;
    width: 92%;
    border-radius: 5px;
    border: 2px solid #ced4da;
  }

`
const ButtonGroup = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: flex-end;

  Button {
    margin-right: 10px;
    border-radius: 5px;
    font-size: 0.9rem;
    padding: 5px 10px;
}
`

function Dialog({
  text,
  children,
  confirmText,
  cancelText,
  onCancel,
  onConfirm,
  confirmColor,
  cancelColor,
}) 
{


  return (
    <DarkBackground>
      <DialogLayout>
        <h3>{text}</h3>
        <DialogBlock>
          {children}
        </DialogBlock>
        <ButtonGroup>
          <Button color={cancelColor} onClick={onCancel}> 
            {cancelText}
          </Button>
          <Button color={confirmColor} onClick={onConfirm} >
            {confirmText}
          </Button>
        </ButtonGroup>
      </DialogLayout>
    </DarkBackground>
  )
}

Dialog.defaultProps = {
  cancelText: ' 취소',
  confirmText: ' 확인',
}

export default Dialog