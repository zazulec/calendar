import React, { useState } from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';



function TextAreaModal() {

    const [textValue, setTextValue] = useState('');

    const handleChange = (event: any) => (
        setTextValue(event.target.value))
    console.log(textValue)
    
    return (
        <TextareaAutosize
            rowsMax={4}
            aria-label="maximum height"
            placeholder="Enter information text here"
            value={textValue}
            onChange={handleChange}
        />
    );

}

export { TextAreaModal };
