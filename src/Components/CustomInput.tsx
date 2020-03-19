import * as React from 'react';
import { TextField } from "@material-ui/core";

import CustomError from "./CustomError";

interface IProps {
    errorMessage: string;
    value?: string;
    type?: string;
    label?: string;
    hasBorder?: boolean;
    id?: string;

    handleChange?(event: React.ChangeEvent<HTMLInputElement>): void;
};

const CustomInput: React.FunctionComponent<IProps> = ({ errorMessage, value, type, handleChange, label, hasBorder, id }) => (
    <div>
        <TextField
            id={id}
            label={label}
            value={value}
            type={type}
            margin='normal'
            variant={'outlined' || 'standard'}
            onChange={handleChange}
        />
        <CustomError message={errorMessage} textAlign='left' />
    </div>
);

export default CustomInput;