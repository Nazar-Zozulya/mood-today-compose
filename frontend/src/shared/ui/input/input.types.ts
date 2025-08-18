import { InputHTMLAttributes, Ref } from 'react';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string;
    inputRef?: Ref<HTMLInputElement>;
}
