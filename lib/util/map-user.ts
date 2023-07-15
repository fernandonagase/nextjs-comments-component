import ApiUser from '@/app/api/lib/types/user'

export default function mapUser(user: ApiUser) {
    return {
        username: user.username,
        profilePictureUrl: user.image.png,
    }
}
