import { ReactNode } from 'react'

import styles from './styles/form-control.module.scss'

type FormControl = {
    children: ReactNode
    label: string
    inputId: string
}

export default function FormControl(props: FormControl) {
    return (
        <div className={styles.formControl}>
            <label
                htmlFor={props.inputId}
                className={styles.formControl__label}
            >
                {props.label}
            </label>
            {props.children}
        </div>
    )
}
