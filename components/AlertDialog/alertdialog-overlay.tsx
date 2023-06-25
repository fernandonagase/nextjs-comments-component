import { ReactNode } from 'react'

import styles from './styles/alert-dialog.module.scss'

type AlertDialogOverlayProps = {
    children: ReactNode
}

export default function AlertDialogOverlay({
    children,
}: AlertDialogOverlayProps) {
    return <div className={styles.alertDialog__overlay}>{children}</div>
}
