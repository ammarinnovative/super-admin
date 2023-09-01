import React from 'react'

export default function Features() {
    useEffect(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }, [])
    
      return (
        <>
        <InerBannner simpleHeading={'Bars'}/>
        <TopBar/>
        <AllBars/>
        <Testimonail/>
        </>
      )
}
