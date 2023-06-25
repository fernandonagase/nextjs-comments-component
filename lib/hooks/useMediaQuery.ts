import { useEffect, useState } from 'react'

function useMediaQuery(query: string) {
    const [matches, setMatches] = useState(false)

    useEffect(() => {
        const media = matchMedia(query)
        setMatches(media.matches)

        function synchronizeMediaMatch(event: MediaQueryListEvent) {
            setMatches(event.matches)
        }

        media.addEventListener('change', synchronizeMediaMatch)
        return () => {
            media.removeEventListener('change', synchronizeMediaMatch)
        }
    }, [query])

    return matches
}

export { useMediaQuery }
