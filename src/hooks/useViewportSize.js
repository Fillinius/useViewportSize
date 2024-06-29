import { useState } from 'react'

export default function useViewportSize() {
  const [height] = useState('')
  const [width] = useState('')

  return {
    height,
    width,
  }
}
