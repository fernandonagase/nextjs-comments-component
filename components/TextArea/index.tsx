import { ComponentPropsWithoutRef } from 'react'

import styles from './styles/text-area.module.scss'

type TextAreaProps = ComponentPropsWithoutRef<'textarea'>

export default function TextArea(props: TextAreaProps) {
    const { children, ...otherProps } = props

    return (
        <textarea {...otherProps} rows={3} className={styles.textArea}>
            {children}
        </textarea>
    )
}
