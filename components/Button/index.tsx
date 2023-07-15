import { ComponentPropsWithoutRef } from 'react'
import classNames from 'classnames'

import styles from './styles/button.module.scss'

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    variant?: 'solid' | 'rounded'
    color?: 'primary' | 'secondary' | 'danger'
}

export default function Button({
    children,
    variant = 'solid',
    color = 'primary',
    className,
    ...otherProps
}: ButtonProps) {
    return (
        <button
            {...otherProps}
            className={classNames(
                styles.button,
                styles[`button--${variant}`],
                styles[`button--${color}`],
                className
            )}
        >
            {children}
        </button>
    )
}
