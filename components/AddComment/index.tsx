import classNames from 'classnames'

import Avatar from '../Avatar'
import Button from '../Button'
import User from '@/lib/types/user'
import FormControl from '../FormControl'
import TextArea from '../TextArea'
import styles from './styles/add-comment.module.scss'
import buttonStyles from '@/components/Button/styles/button.module.scss'
import { useMediaQuery } from '@/lib/hooks/useMediaQuery'
import { useEffect, useRef } from 'react'

type AddCommentProps = {
    currentUser: User
    isReplying?: boolean
    autofocus?: boolean
    onSubmit: () => void
}

export default function AddComment(props: AddCommentProps) {
    const isLargerThan1440 = useMediaQuery('screen and (min-width: 1440px)')

    const { onSubmit, isReplying = false, autofocus = false } = props
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null)

    useEffect(() => {
        if (autofocus && textAreaRef.current) {
            textAreaRef.current.focus()
        }
    }, [autofocus])

    return (
        <form
            className={styles.commentForm}
            onSubmit={(e) => {
                e.preventDefault()
                onSubmit()
            }}
        >
            {isLargerThan1440 && (
                <Avatar pictureUrl={props.currentUser.profilePictureUrl} />
            )}
            <div className={styles.commentForm__textBox}>
                <FormControl
                    label="Add a comment"
                    inputId="add-comment-textarea"
                >
                    <TextArea
                        placeholder="Add a comment..."
                        id="add-comment-textarea"
                        ref={textAreaRef}
                    ></TextArea>
                </FormControl>
            </div>
            {isLargerThan1440 && (
                <Button
                    type="submit"
                    className={classNames(
                        buttonStyles['button--primary'],
                        buttonStyles['button--rounded']
                    )}
                >
                    {isReplying ? 'Reply' : 'Send'}
                </Button>
            )}
            {!isLargerThan1440 && (
                <div className={styles.commentForm__action}>
                    <Avatar pictureUrl={props.currentUser.profilePictureUrl} />
                    <Button
                        type="submit"
                        className={classNames(
                            buttonStyles['button--primary'],
                            buttonStyles['button--rounded']
                        )}
                    >
                        {isReplying ? 'Reply' : 'Send'}
                    </Button>
                </div>
            )}
        </form>
    )
}
