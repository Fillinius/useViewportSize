import useViewportSize from './hooks/useViewportSize'

export default function Demo() {
  const { height, width } = useViewportSize()

  return (
    <>
      Width: {width}, height: {height}
    </>
  )
}
