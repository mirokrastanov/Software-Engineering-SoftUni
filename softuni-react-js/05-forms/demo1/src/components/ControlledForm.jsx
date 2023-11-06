import { useState } from "react";
import styles from "./ControlledForm.module.css"

const FORM_KEYS = {
    username: 'username',
    password: 'password',
    age: 'age',
    gender: 'gender',
    hobbies: ['Swimming', 'Shopping', 'Running'],
};

const formInitialState = {
    [FORM_KEYS.username]: '',
    [FORM_KEYS.password]: '',
    [FORM_KEYS.age]: '',
    [FORM_KEYS.gender]: 'f',
    [FORM_KEYS.hobbies[0]]: false,
    [FORM_KEYS.hobbies[1]]: false,
    [FORM_KEYS.hobbies[2]]: false,
};

export default function ControlledForm() {
    const [formValues, setFormValues] = useState(formInitialState);
    const [errors, setErrors] = useState({});

    const changeHandler = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);

        let value = '';

        switch (e.target.type) {
            case 'number':
                value = Number(e.target.value);
                break;
            case 'checkbox':
                value = e.target.checked;
                break;
            default:
                value = e.target.value;
                break;
        }

        setFormValues(state => ({
            ...state,
            [e.target.name]: value,
        }));
    };

    const resetFormHandler = (e) => {
        console.log(formValues[FORM_KEYS.hobbies[0]]);
        setFormValues(formInitialState);
    };

    const usernameBlurHandler = (e) => {
        console.log('on blur'); // for validation as soon as the user clicks somewhere else
    };

    const validateAgeHandler = (e) => {
        if (formValues.age < 0 || formValues.age > 120) {
            setErrors(state => ({
                ...state,
                age: 'Age should be between 0 and 120',
            }));
        } else {
            if (errors.age) {
                setErrors(state => ({
                    ...state,
                    age: '',
                }));
            }
        }
    };

    const submitHandler = () => {
        console.log(formValues);
        resetFormHandler();
    };

    return (
        <>
            <h1>Controlled Form</h1>

            <form>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        name={FORM_KEYS.username}
                        id="username"
                        value={formValues.username}
                        onChange={changeHandler}
                        onBlur={usernameBlurHandler}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="text"
                        name={FORM_KEYS.password}
                        id="password"
                        value={formValues.password}
                        onChange={changeHandler}
                    />
                </div>
                <div>
                    <label htmlFor="age">Age:</label>
                    <input
                        type="number"
                        name={FORM_KEYS.age}
                        id="age"
                        value={formValues.age}
                        onChange={changeHandler}
                        onBlur={validateAgeHandler}
                        className={errors.age && styles['error-border']}
                    />
                    {errors && (
                        <p className={styles['error-message']}>{errors.age}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="gender">Gender</label>
                    <select name="gender" id="gender" onChange={changeHandler} value={formValues.gender}>
                        <option value="f">F</option>
                        <option value="m">M</option>
                    </select>
                </div>
                <div>
                    <h2>Hobbies</h2>
                    <label htmlFor="hobbies">{FORM_KEYS.hobbies[0]}</label>
                    <input type="checkbox" name={FORM_KEYS.hobbies[0]} id={FORM_KEYS.hobbies[0]}
                        onChange={changeHandler} checked={formValues[FORM_KEYS.hobbies[0]]} />
                    <label htmlFor="hobbies">{FORM_KEYS.hobbies[1]}</label>
                    <input type="checkbox" name={FORM_KEYS.hobbies[1]} id={FORM_KEYS.hobbies[1]}
                        onChange={changeHandler} checked={formValues[FORM_KEYS.hobbies[1]]} />
                    <label htmlFor="hobbies">{FORM_KEYS.hobbies[2]}</label>
                    <input type="checkbox" name={FORM_KEYS.hobbies[2]} id={FORM_KEYS.hobbies[2]}
                        onChange={changeHandler} checked={formValues[FORM_KEYS.hobbies[2]]} />
                </div>
                <div>
                    <button type="button" onClick={submitHandler}>Register</button>
                    <button type="button" onClick={resetFormHandler}>Reset</button>
                </div>
            </form>
        </>
    );
}