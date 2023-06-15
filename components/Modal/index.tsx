import { ReactNode } from 'react'

type ModalProps = {
    children: ReactNode
    isOpen: boolean
}

export default function Modal({ children, isOpen }: ModalProps) {
    return <>{isOpen && <div>{children}</div>}</>
}
