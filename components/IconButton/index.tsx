import { ComponentPropsWithoutRef, ReactNode } from 'react'
import classNames from 'classnames'

import styles from './styles/icon-button.module.scss'

type IconButtonVariant = 'primary' | 'danger'

type IconButtonProps = ComponentPropsWithoutRef<'button'> & {
    icon: ReactNode
    variant?: IconButtonVariant
}

export default function IconButton(props: IconButtonProps) {
    const { children, className, icon, variant = 'primary', ...rest } = props
    return (
        <button
            {...rest}
            className={classNames([
                styles.iconButton,
                styles[`iconButton--${variant}`],
            ])}
        >
            <div className={styles.iconButton__icon}>{icon}</div>
            {children}
        </button>
    )
}
