import { useEffect, useState } from 'react'

export default function useViewportSize() {
  const defaultSize = window.visualViewport
  const [size, setSize] = useState(() =>
    defaultSize ? { width: 0, height: 0 } : getViewportSize()
  )

  useEffect(() => {
    const onResize = () => {
      setSize((size) => {
        const newSize = getViewportSize()
        if (newSize.width === size.width && newSize.height === size.height) {
          return size
        }
        return newSize
      })
    }

    if (!visualViewport) {
      window.addEventListener('resize', onResize)
    } else {
      visualViewport.addEventListener('resize', onResize)
    }

    return () => {
      if (!visualViewport) {
        window.removeEventListener('resize', onResize)
      } else {
        visualViewport.removeEventListener('resize', onResize)
      }
    }
  }, [])

  return size
}
function getViewportSize() {
  return {
    width: (visualViewport && visualViewport?.width) || window.innerWidth,
    height: (visualViewport && visualViewport?.height) || window.innerHeight,
  }
}
