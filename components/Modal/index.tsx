import { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import ModalOverlay from './modal-overlay'
import ModalContent from './modal-content'

type ModalProps = {
    children: ReactNode
    isOpen: boolean
    onClose: () => void
}

export default function Modal({ children, isOpen, onClose }: ModalProps) {
    return (
        <>
            {isOpen &&
                createPortal(
                    <ModalOverlay>
                        <ModalContent onClose={onClose}>
                            {children}
                        </ModalContent>
                    </ModalOverlay>,
                    document.body
                )}
        </>
    )
}
