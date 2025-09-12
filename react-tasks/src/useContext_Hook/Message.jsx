import React from 'react'
import { useContext } from 'react'
import {languageContext} from './Example4'

const Message = () => {
    const {language}=useContext(languageContext)
  return (
    <div>
        <h5>
            {language === "en"?"Hello,Good Morning":"नमस्कार, शुभ प्रभात"}
        </h5>
    </div>
  )
}

export default Message