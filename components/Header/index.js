import React from 'react'
import { observer, u } from 'startupjs'
import { View, Text, Image } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTable } from '@fortawesome/free-solid-svg-icons'
import './index.styl'

export default observer(() => {
    return pug`
        View.headerContainer
            View.header
                Image.logo(source={ uri: 'https://demo.hasthemes.com/neha-preview-tm/neha/assets/img/logo/logo.png' })
                View.nav
                    Text.navItem(styleName='first') Home
                    Text.navItem About us
                    Text.navItem Shop
                    Text.navItem Pages
                    Text.navItem Blog
                    Text.navItem Contact
                View.actions
                    FontAwesomeIcon.action.icon(styleName='first' icon=faTable size=u(3))
                    FontAwesomeIcon.action.icon(icon=faTable size=u(3))
                    View.action.burger
                        FontAwesomeIcon.icon(icon=faTable size=u(3))
    `
})