import React from 'react';

export interface IInput {
    label: string;
    id: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    placeHolder?: string;
    number?: boolean;
}

export default function Input(props: IInput) {
    return (
        <div className='relative flex h-10 w-full flex-row-reverse overflow-clip rounded-lg'>
            <input
                className='peer w-full rounded-r-lg border border-slate-400 px-2 text-slate-900 placeholder-slate-400 transition-colors duration-300 focus:border-sky-400 focus:outline-none'
                type='text'
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeHolder || ''}
            />
            <label
                className='flex items-center rounded-l-lg border border-slate-400 bg-slate-50 px-2 text-sm text-slate-400 transition-colors duration-300 peer-focus:border-sky-400 peer-focus:bg-sky-400 peer-focus:text-white'
                htmlFor={props.id}
            >
                {props.label}
            </label>
        </div>
    );
}
