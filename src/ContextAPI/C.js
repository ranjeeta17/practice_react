import React from 'react'
import { ContextConsumer } from './UserContext'
import { useContext } from 'react'
import {UseName} from './UserContext'

function C() {

    const context = useContext(UseName)
  return (

    <>{context}
    
        
    
         {/* <ContextConsumer>
             {
               (name)=>{
                    return<h1>{name}</h1>
                    
                }
             }
         </ContextConsumer> */}

        </>
  )
}

export default C