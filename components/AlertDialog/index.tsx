import { ReactNode } from 'react'
import { createPortal } from 'react-dom'
import AlertDialogOverlay from './alertdialog-overlay'
import AlertDialogContent from './alertdialog-content'

type AlertDialogProps = {
    children: ReactNode
    isOpen: boolean
    onClose: () => void
}

export default function AlertDialog({
    children,
    isOpen,
    onClose,
}: AlertDialogProps) {
    return (
        <>
            {isOpen &&
                createPortal(
                    <AlertDialogOverlay>
                        <AlertDialogContent onClose={onClose}>
                            {children}
                        </AlertDialogContent>
                    </AlertDialogOverlay>,
                    document.body
                )}
        </>
    )
}
