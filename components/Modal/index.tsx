import { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import ModalOverlay from './modal-overlay'
import ModalContent from './modal-content'

type ModalProps = {
    children: ReactNode
    isOpen: boolean
}

export default function Modal({ children, isOpen }: ModalProps) {
    return (
        <>
            {isOpen &&
                createPortal(
                    <ModalOverlay>
                        <ModalContent>{children}</ModalContent>
                    </ModalOverlay>,
                    document.body
                )}
        </>
    )
}
