import { ComponentPropsWithoutRef } from 'react'

type IconButtonProps = ComponentPropsWithoutRef<'button'> & {
    iconUrl: string
}

export default function IconButton(props: IconButtonProps) {
    const { children, iconUrl, ...rest } = props
    return (
        <button {...rest}>
            <img src={iconUrl} alt="" />
            {children}
        </button>
    )
}
