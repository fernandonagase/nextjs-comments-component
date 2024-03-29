import React from 'react'
import { ReactNode } from 'react'
import FocusLock from 'react-focus-lock'

import styles from './styles/alert-dialog.module.scss'

type AlertDialogContentProps = {
    children: ReactNode
    onClose: () => void
}

export default function AlertDialogContent({
    children,
    onClose,
}: AlertDialogContentProps) {
    function handleEsc(event: React.KeyboardEvent) {
        const pressedEsc = event.key === 'Escape'
        if (pressedEsc) onClose()
    }

    return (
        <FocusLock returnFocus>
            <div
                role="alertdialog"
                aria-modal="true"
                aria-labelledby="alertdialog-header"
                aria-describedby="alertdialog-body"
                onKeyDown={handleEsc}
                tabIndex={-1}
                className={styles.alertDialog__content}
            >
                {children}
            </div>
        </FocusLock>
    )
}
