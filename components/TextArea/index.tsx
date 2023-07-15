import { ComponentPropsWithRef, forwardRef } from 'react'

import styles from './styles/text-area.module.scss'

type TextAreaProps = ComponentPropsWithRef<'textarea'>

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
    function TextArea(props, ref) {
        return (
            <textarea
                rows={3}
                className={styles.textArea}
                ref={ref}
                {...props}
            ></textarea>
        )
    }
)

export default TextArea
