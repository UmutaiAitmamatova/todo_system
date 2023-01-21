import React from 'react'
import Cookie from 'js-cookie'

const RemoveCookie = (cookiename) => {
    Cookie.remove(cookiename)
}

export default RemoveCookie;