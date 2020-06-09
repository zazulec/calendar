import React, { useState } from 'react';
import { connect, ReactReduxContext } from 'react-redux';
import { ModalWrapper } from './styled/ModalWrapper/ModalWrapper';
import { ModalConteiner } from './styled/ModalConteiner/ModalConteiner';
import { DateAndTimePickers } from '../DateAndTimePickers/DateAndTimePickers';
import  ButtonAddTask  from '../ButtonAddTask/ButtonAddTask';
import  ButtonClose  from '../ButtonClose/ButtonClose';
import { ButtonWrapper } from './styled/ButtonWrapper/ButtonWrapper';
import { TextAreaModal } from '../TextAreaModal/TextAreaModal';

function ModalWindow(props) {

    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    
    const handleAddTask = () => {
        
    }
    const handleDateAndTimePickersChange = (date) => {
        setDate(date);
        console.log('data', date);
    };
    const handleTextAreaModalChange = (text) => {
        setText(text);
        console.log("text", text);
    }

    return (
        <ModalConteiner isModalOpen={props.isModalOpen}>
            <ModalWrapper >
                {'Add your task'}
                <DateAndTimePickers onDataAndTimeChange={handleDateAndTimePickersChange}/>
                <TextAreaModal onTextChange={handleTextAreaModalChange}/>
                <ButtonWrapper>
                    <ButtonClose />
                    <ButtonAddTask onClicked={handleAddTask}/>
                </ButtonWrapper>
            </ModalWrapper>
        </ModalConteiner>
    )
};
const mapStateToProps = state => ({
    isModalOpen: state.isModalOpen
})

export default connect(mapStateToProps,null)( ModalWindow );