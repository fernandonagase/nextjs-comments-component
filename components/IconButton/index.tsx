import { ComponentPropsWithoutRef } from 'react'
import classNames from 'classnames'

import styles from './styles/icon-button.module.scss'

type IconButtonProps = ComponentPropsWithoutRef<'button'> & {
    iconUrl: string
}

export default function IconButton(props: IconButtonProps) {
    const { children, className, iconUrl, ...rest } = props
    return (
        <button
            {...rest}
            className={classNames([styles.iconButton, props.className])}
        >
            <img src={iconUrl} alt="" />
            {children}
        </button>
    )
}
