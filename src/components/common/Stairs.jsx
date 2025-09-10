import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useLocation } from 'react-router-dom'

const Stairs = (props) => {
  const currentPath = useLocation().pathname

  const stairParentRef = useRef(null)
  const pageRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.set(stairParentRef.current, { autoAlpha: 1 })

    tl.from('.stair', {
      height: 0,
      stagger: { amount: 0.2, from: 'end' },
    })

    tl.to('.stair', {
      y: '100%',
      stagger: { amount: 0.25, from: 'start' },
    })

    tl.set(stairParentRef.current, { autoAlpha: 0 })
    tl.set('.stair', { y: '0%' })

    gsap.from(pageRef.current, {
      opacity: 0,
      delay: 1.3,
      scale: 1.2,
      duration: 0.8,
      ease: 'power2.out',
    })
  }, [currentPath])

  return (
    <div>
      <div ref={stairParentRef} className="h-screen w-full fixed z-20 top-0">
        <div className="h-full w-full flex">
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
          <div className="stair h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={pageRef}>{props.children}</div>
    </div>
  )
}

export default Stairs
