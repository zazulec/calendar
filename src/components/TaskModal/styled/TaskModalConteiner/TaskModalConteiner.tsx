import styled from 'styled-components';

interface TaskModalConteinerProps {
  isTaskModalOpen: any,
}

const TaskModalConteiner = styled.div<TaskModalConteinerProps>`
  display: ${props => props.isTaskModalOpen ? 'flex' : 'none'};
  position: fixed; 
  z-index: 1; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto; 
  background-color: rgb(0,0,0); 
  background-color: rgba(0,0,0,0.4);

`

export { TaskModalConteiner };