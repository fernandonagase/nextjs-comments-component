import { ReactNode } from 'react'

type ModalHeaderProps = {
    children: ReactNode
}

export default function ModalHeader({ children }: ModalHeaderProps) {
    return <header id="alertdialog-header">{children}</header>
}
