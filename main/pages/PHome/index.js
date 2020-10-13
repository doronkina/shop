import React from 'react'
import { observer } from 'startupjs'
import { View } from 'react-native'
import { Sidebar, Products } from 'components'
import './index.styl'

export default observer(function PHome () {
  return pug`
    View.pageContainer
      View.page
        View.sidebar
          Sidebar
        View.main
          Products
  `
})