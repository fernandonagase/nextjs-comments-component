import { ComponentPropsWithoutRef } from 'react'
import classNames from 'classnames'

import styles from './styles/button.module.scss'

type ButtonProps = ComponentPropsWithoutRef<'button'>

export default function Button(props: ButtonProps) {
    const { children, ...otherProps } = props

    return (
        <button
            {...otherProps}
            className={classNames(styles.button, props.className)}
        >
            {children}
        </button>
    )
}
