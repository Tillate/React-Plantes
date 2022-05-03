import { useState } from "react";

export default function QuestionForm() {
    const [inputValue, setInputValue] = useState('');
    const [textValue, setTextValue] = useState('');
    const isInputError = inputValue.includes('$');

    function checkValue(value) {
        if (!value.includes('$')) {
            setInputValue(value)
        }
    }

    return (
        <div>
            {isInputError ? (
                <div>🔥 Vous n'avez pas le droit d'utiliser "$" ici.</div>
            ) : (
                null
            )}
            <form>
                <input 
                    type='text' 
                    name='my_input' 
                    onChange={(e) => setInputValue(e.target.value)} />
                <textarea
                    value={textValue}
                    onChange={(e) => { 
                        setTextValue(e.target.value); 
                        checkValue(e.target.value); 
                    }}
                />
                <button onClick={ () => alert(inputValue + " " + textValue)}>Alert value</button>
            </form>
            <br />
           
            <div>
                Votre nom : {inputValue}
                <br />
                Votre question : {textValue}
            </div>
        </div>
    


    )
}
    