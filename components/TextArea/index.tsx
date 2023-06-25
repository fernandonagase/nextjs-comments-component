import { ComponentPropsWithRef, forwardRef } from 'react'

import styles from './styles/text-area.module.scss'

type TextAreaProps = ComponentPropsWithRef<'textarea'>

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
    function TextArea(props, ref) {
        const { children, ...otherProps } = props

        return (
            <textarea
                rows={3}
                className={styles.textArea}
                ref={ref}
                {...otherProps}
            >
                {children}
            </textarea>
        )
    }
)

export default TextArea
