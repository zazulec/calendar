import React, { useState } from 'react';
import { connect } from 'react-redux';
import { ModalWrapper } from './styled/ModalWrapper/ModalWrapper';
import { ModalConteiner } from './styled/ModalConteiner/ModalConteiner';
import { DateAndTimePickers } from '../DateAndTimePickers/DateAndTimePickers';
import  ButtonAddTask  from '../ButtonAddTask/ButtonAddTask';
import  ButtonClose  from '../ButtonClose/ButtonClose';
import { ButtonWrapper } from './styled/ButtonWrapper/ButtonWrapper';
import { TextAreaModal } from '../TextAreaModal/TextAreaModal';
import { ACTION_TYPES } from '../../redux/actionTypes/actionTypes';

function ModalWindow(props) {

    const [text, setText] = useState('');
    const [date, setDate] = useState('');

    const handleDateAndTimePickersChange = (date) => {
        setDate(date);
    };

    const handleTextAreaModalChange = (text) => {
        setText(text);
        console.log("text z modal window", text)
    };

    const handleAddTask = () => {
        const taskData = {
            text: text,
            date: date,
        }
        props.actionSetTask(taskData);
    };

    return (
        <ModalConteiner isModalOpen={props.isModalOpen}>
            <ModalWrapper >
                {'Add your task'}
                <DateAndTimePickers onDataAndTimeChange={handleDateAndTimePickersChange}/>
                <TextAreaModal onTextChange={handleTextAreaModalChange}/>
                <ButtonWrapper>
                    <ButtonClose />
                    <ButtonAddTask onClicked={handleAddTask} /> 
                </ButtonWrapper>
            </ModalWrapper>
        </ModalConteiner>
    )
};
const mapStateToProps = state => ({
    isModalOpen: state.isModalOpen
});

const mapDispatchToProps = dispatch => ({
    actionSetTask: (data)=> dispatch({ type: ACTION_TYPES.SET_TASK, value: data})
})

export default connect(mapStateToProps, mapDispatchToProps)( ModalWindow );