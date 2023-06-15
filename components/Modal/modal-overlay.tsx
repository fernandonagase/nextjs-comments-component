import { ReactNode } from 'react'

type ModalOverlayProps = {
    children: ReactNode
}

export default function ModalOverlay({ children }: ModalOverlayProps) {
    return <div>{children}</div>
}
