import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';

export default function Form() {
    const [form, setForm] = useState({
        totalHours: 0,
        times: '',
        perWeek: 0,
    });

    const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        const updatedForm = {
            ...form,
            [name]: value,
        };

        setForm(updatedForm);
    };

    const makeMath = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <form onSubmit={makeMath}>
            <Input onChange={handleFormChange} />
            <Button />
        </form>
    );
}
