import React from 'react';
import { connect } from 'react-redux';
import { ModalWrapper } from './styled/ModalWrapper/ModalWrapper';
import { ModalConteiner } from './styled/ModalConteiner/ModalConteiner';
import { DateAndTimePickers } from '../DateAndTimePickers/DateAndTimePickers';
import { ButtonAddTask } from '../ButtonAddTask/ButtonAddTask';
import { ButtonClose } from '../ButtonClose/ButtonClose';
import { ButtonWrapper } from './styled/ButtonWrapper/ButtonWrapper';
import { TextAreaModal } from '../TextAreaModal/TextAreaModal';

function ModalWindow(props) {

    return (
        <ModalConteiner isModalOpen={props.isModalOpen}>
            <ModalWrapper >
                {'Add your task'}
                <DateAndTimePickers />
                <TextAreaModal/>
                <ButtonWrapper>
                    <ButtonClose />
                    <ButtonAddTask />
                </ButtonWrapper>
            </ModalWrapper>
        </ModalConteiner>
    )
};
const mapStateToProps = state => ({
    isModalOpen: state.isModalOpen
})

export default connect(mapStateToProps,null)( ModalWindow );