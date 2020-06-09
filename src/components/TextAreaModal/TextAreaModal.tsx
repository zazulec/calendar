import React, { useState } from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

interface TextAreaModalProps {
    handleChange: ()=> string;
    onTextChange: (props:string)=> void;
}

function TextAreaModal(props: TextAreaModalProps) {

    const [textValue, setTextValue] = useState('');

    const handleChange = (event: any) => {
        setTextValue(event.target.value)
        props.onTextChange(textValue)
    }

    return (
        <TextareaAutosize
            rowsMin={4}
            rowsMax={4}
            aria-label="maximum height"
            placeholder="Enter information text here"
            value={textValue}
            onChange={handleChange}
        />
    );

}

export { TextAreaModal };
