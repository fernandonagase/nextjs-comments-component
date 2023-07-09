import BaseComment from './types/comment'

function editContent(comment: BaseComment, content: string) {
    return {
        ...comment,
        content,
    }
}

function toggleUpvote(comment: BaseComment, userId: string) {
    return comment.upvoted.includes(userId)
        ? removeUpvote(comment, userId)
        : upvote(comment, userId)
}

function toggleDownvote(comment: BaseComment, userId: string) {
    return comment.downvoted.includes(userId)
        ? removeDownvote(comment, userId)
        : downvote(comment, userId)
}

function upvote(comment: BaseComment, userId: string) {
    return {
        ...comment,
        upvoted: [...comment.upvoted, userId],
        downvoted: comment.downvoted.includes(userId)
            ? comment.downvoted.filter((user) => user !== userId)
            : comment.downvoted,
    }
}

function downvote(comment: BaseComment, userId: string) {
    return {
        ...comment,
        downvoted: [...comment.downvoted, userId],
        upvoted: comment.upvoted.includes(userId)
            ? comment.upvoted.filter((user) => user !== userId)
            : comment.upvoted,
    }
}

function removeUpvote(comment: BaseComment, userId: string) {
    return {
        ...comment,
        upvoted: comment.upvoted.filter((user) => user !== userId),
    }
}

function removeDownvote(comment: BaseComment, userId: string) {
    return {
        ...comment,
        downvoted: comment.downvoted.filter((user) => user !== userId),
    }
}

export { toggleUpvote, toggleDownvote, editContent }
