import React, { useRef, useEffect } from "react"
import gsap from "gsap"

const LogoJavascript = () => {
  const svgTypeRef = useRef(null)
  const svgBkgrndRef = useRef(null)

  useEffect(() => {
    tl.to(svgBkgrndRef.current, { duration: 1, opacity: 1 })
      .to(svgTypeRef.current, { duration: 0.7, scale: 0.6 }, "<")
      .to(svgTypeRef.current, { duration: 0.7, x: 250 }, "<")
      .to(svgTypeRef.current, { duration: 0.7, y: 260 }, "<")
  }, [svgTypeRef, svgBkgrndRef])

  var tl = gsap.timeline({ paused: true })

  const onMouseEnter = () => {
    tl.play()
  }

  const onMouseLeave = () => {
    tl.reverse()
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1000"
      height="1000"
      viewBox="0 0 1000 1000"
      onMouseEnter={() => onMouseEnter()}
      onMouseLeave={() => onMouseLeave()}
    >
      <path
        ref={svgBkgrndRef}
        opacity="0"
        fill="#F7DF1E"
        d="M99 100h802v800H99z"
      />
      <path
        ref={svgTypeRef}
        d="M595.934 613.646c24.482 39.975 56.336 69.356 112.67 69.356 47.326 0 77.559-23.653 77.559-56.334 0-39.166-31.063-53.037-83.152-75.822l-28.553-12.252c-82.42-35.112-137.174-79.1-137.174-172.092 0-85.661 65.268-150.871 167.271-150.871 72.617 0 124.824 25.273 162.445 91.449l-88.941 57.106c-19.582-35.113-40.707-48.946-73.504-48.946-33.455 0-54.66 21.222-54.66 48.946 0 34.265 21.225 48.136 70.229 69.358l28.553 12.23c97.043 41.615 151.836 84.041 151.836 179.426 0 102.832-80.781 159.166-189.264 159.166-106.072 0-174.602-50.548-208.133-116.799l92.818-53.921zm-403.473 9.897c17.941 31.832 34.264 58.746 73.505 58.746 37.524 0 61.197-14.682 61.197-71.769V222.154h114.214v389.908c0 118.268-69.338 172.096-170.549 172.096-91.448 0-144.408-47.327-171.34-104.328l92.973-56.287z"
      />
    </svg>
  )
}

export default LogoJavascript
