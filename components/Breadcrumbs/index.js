import { BASE_URL } from '@env'
import React from 'react'
import { observer } from 'startupjs'
import { View, Text, ImageBackground, Linking } from 'react-native'
import './index.styl'

export default observer(() => {
    return pug`
        ImageBackground.breadcrumbsBg(source={ uri: 'https://demo.hasthemes.com/neha-preview-tm/neha/assets/img/bg/breadcrumb.jpg' })
            View.breadcrumbsContainer
                Text.pageTitle Shop
                Text.breadcrumbs
                    Text.breadcrumb Home 
                    Text / 
                    Text.breadcrumb(styleName='last') Shop
    `
})