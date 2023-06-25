import { ComponentPropsWithoutRef, ReactNode } from 'react'
import classNames from 'classnames'

import styles from './styles/icon-button.module.scss'

type IconButtonProps = ComponentPropsWithoutRef<'button'> & {
    icon: ReactNode
}

export default function IconButton(props: IconButtonProps) {
    const { children, className, icon, ...rest } = props
    return (
        <button
            {...rest}
            className={classNames([styles.iconButton, props.className])}
        >
            <div className={styles.iconButton__icon}>{icon}</div>
            {children}
        </button>
    )
}
