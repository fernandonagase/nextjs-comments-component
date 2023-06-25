import { ReactNode } from 'react'

import styles from './styles/alert-dialog.module.scss'

type AlertDialogHeaderProps = {
    children: ReactNode
}

export default function AlertDialogHeader({
    children,
}: AlertDialogHeaderProps) {
    return (
        <header id="alertdialog-header">
            <p className={styles.alertDialog__title}>{children}</p>
        </header>
    )
}
