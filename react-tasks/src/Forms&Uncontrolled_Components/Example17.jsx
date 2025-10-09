import React from 'react'
import { useRef } from 'react'

const Example17 = () => {

    const nameRef = useRef();
    const checkRef = useRef();

    function handleSubmit(e) {
        e.preventDefault();  //it avoids the default behaviour i.e. in this form case default behaviour is page reload

        const name = nameRef.current.value;
        const checked = checkRef.current.checked;

        alert(`Name:${name} , CheckStatus:${checked}`)
    }

    return (
        <div>
            <h5>Form Handling (Uncontrolled Components)</h5>
            <form onSubmit={handleSubmit}>
                <input type="text" ref={nameRef} defaultValue={"Darshana"} />
                <input type="checkbox" ref={checkRef} defaultChecked />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Example17