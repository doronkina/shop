import { BASE_URL } from '@env'
import React from 'react'
import { observer, u } from 'startupjs'
import { View, Text, Image, Linking } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTable } from '@fortawesome/free-solid-svg-icons'
import './index.styl'

export default observer(() => {
    return pug`
        View.footerContainer
            View.footer
                View.section
                    Text.text 20 Years Experience
                    View.soc
                        View.socItem(styleName='first')
                            FontAwesomeIcon.icon(icon=faTable size=u(2))
                        View.socItem
                            FontAwesomeIcon.icon(icon=faTable size=u(2))
                        View.socItem
                            FontAwesomeIcon.icon(icon=faTable size=u(2))
                        View.socItem
                            FontAwesomeIcon.icon(icon=faTable size=u(2))
                View.section
                    Image.logo(source={ uri: 'https://demo.hasthemes.com/neha-preview-tm/neha/assets/img/logo/logo.png' })
                    View.nav
                        Text.navItem(styleName='first') Home
                        Text.navItem About us
                        Text.navItem Shop
                        Text.navItem Blog
                        Text.navItem Pages
                    View.hr
                    Text.copy
                        Text Copyright © 
                        Text(onPress=() => Linking.openURL(BASE_URL)) neha 
                        Text 2018. All Right Reserved.
                View.section
                    Text.contactRow(styleName='first')
                        Text.contactType Phone: 
                        Text.contact +012 345 678 102
                    Text.contactRow
                        Text.contactType Email: 
                        Text.contact(onPress=() => Linking.openURL(BASE_URL)) info@example.com
                    Text.contactRow
                        Text.contactType Address: 
                        Text.contact Dhaka Bangladesh
    `
})