import React from 'react'
import { ReactNode, useEffect, useRef } from 'react'

// Seletor retirado do artigo de Hidde de Vries
// Não é uma solução universal, mas, por hora, satisfaz este caso de uso
// https://hidde.blog/using-javascript-to-trap-focus-in-an-element/
const interactiveSelector =
    'a[href]:not([disabled]), button:not([disabled]), textarea:not([disabled]), input[type="text"]:not([disabled]), input[type="radio"]:not([disabled]), input[type="checkbox"]:not([disabled]), select:not([disabled])'

type ModalContentProps = {
    children: ReactNode
    onClose: () => void
}

export default function ModalContent({ children, onClose }: ModalContentProps) {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!containerRef.current) throw Error('containerRef is not assigned')

        const container = containerRef.current
        const focusableEls =
            container.querySelectorAll<HTMLElement>(interactiveSelector)
        const firstFocusableEl = focusableEls[0]
        const lastFocusableEl = focusableEls[focusableEls.length - 1]

        function handleTab(event: KeyboardEvent) {
            const pressedTab = event.key === 'Tab'
            if (!pressedTab) return

            if (event.shiftKey) {
                if (document.activeElement === firstFocusableEl) {
                    lastFocusableEl.focus()
                    event.preventDefault()
                }
            } else {
                if (document.activeElement === lastFocusableEl) {
                    firstFocusableEl.focus()
                    event.preventDefault()
                }
            }
        }

        container.addEventListener('keydown', handleTab)
        return () => container.removeEventListener('keydown', handleTab)
    }, [children])

    function handleEsc(event: React.KeyboardEvent) {
        const pressedEsc = event.key === 'Escape'
        if (pressedEsc) onClose()
    }

    return (
        <div
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="alertdialog-header"
            aria-describedby="alertdialog-body"
            onKeyDown={handleEsc}
            tabIndex={-1}
            ref={containerRef}
        >
            {children}
        </div>
    )
}
