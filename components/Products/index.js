import { BASE_URL } from '@env'
import React from 'react'
import { observer, u } from 'startupjs'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import RNPickerSelect from 'react-native-picker-select'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTable } from '@fortawesome/free-solid-svg-icons'
import './index.styl'

export default observer(() => {
    const [pickerValue, setPickerValue] = React.useState('Default')
    const [viewType, setViewType] = React.useState('grid')
    
    const pickerItems = [
        {label: 'A to Z', value: '1'},
        {label: 'Z to A', value: '2'},
        {label: 'In stock', value: '3'}
    ]

    const activeView = (item) => {
        if (viewType === item) return 'active'

        return false
    }

    const products = [
        {
            id: '1',
            img: 'https://demo.hasthemes.com/neha-preview-tm/neha/assets/img/shop/shop-grid-1/1.jpg',
            title: 'Flying Drone with Remote',
            categories: 'Electronic',
            price: 110,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur',
            sale: true,
            liked: true
        },
        {
            id: '2',
            img: 'https://demo.hasthemes.com/neha-preview-tm/neha/assets/img/shop/shop-grid-1/1.jpg',
            title: 'Flying Drone with Remote',
            categories: 'Electronic',
            price: 110,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur',
            sale: false,
            liked: false
        },
        {
            id: '3',
            img: 'https://demo.hasthemes.com/neha-preview-tm/neha/assets/img/shop/shop-grid-1/1.jpg',
            title: 'Flying Drone with Remote',
            categories: 'Electronic',
            price: 110,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur',
            sale: true,
            liked: false
        },
        {
            id: '4',
            img: 'https://demo.hasthemes.com/neha-preview-tm/neha/assets/img/shop/shop-grid-1/1.jpg',
            title: 'Flying Drone with Remote',
            categories: 'Electronic',
            price: 110,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur',
            sale: false,
            liked: false
        },
        {
            id: '5',
            img: 'https://demo.hasthemes.com/neha-preview-tm/neha/assets/img/shop/shop-grid-1/1.jpg',
            title: 'Flying Drone with Remote',
            categories: 'Electronic',
            price: 110,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur',
            sale: true,
            liked: false
        },
        {
            id: '6',
            img: 'https://demo.hasthemes.com/neha-preview-tm/neha/assets/img/shop/shop-grid-1/1.jpg',
            title: 'Flying Drone with Remote',
            categories: 'Electronic',
            price: 110,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur',
            sale: false,
            liked: false
        },
        {
            id: '7',
            img: 'https://demo.hasthemes.com/neha-preview-tm/neha/assets/img/shop/shop-grid-1/1.jpg',
            title: 'Flying Drone with Remote',
            categories: 'Electronic',
            price: 110,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur',
            sale: true,
            liked: false
        },
        {
            id: '8',
            img: 'https://demo.hasthemes.com/neha-preview-tm/neha/assets/img/shop/shop-grid-1/1.jpg',
            title: 'Flying Drone with Remote',
            categories: 'Electronic',
            price: 110,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur',
            sale: false,
            liked: false
        },
        {
            id: '9',
            img: 'https://demo.hasthemes.com/neha-preview-tm/neha/assets/img/shop/shop-grid-1/1.jpg',
            title: 'Flying Drone with Remote',
            categories: 'Electronic',
            price: 110,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur',
            sale: true,
            liked: false
        },
        {
            id: '10',
            img: 'https://demo.hasthemes.com/neha-preview-tm/neha/assets/img/shop/shop-grid-1/1.jpg',
            title: 'Flying Drone with Remote',
            categories: 'Electronic',
            price: 110,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur',
            sale: false,
            liked: false
        },
        {
            id: '11',
            img: 'https://demo.hasthemes.com/neha-preview-tm/neha/assets/img/shop/shop-grid-1/1.jpg',
            title: 'Flying Drone with Remote',
            categories: 'Electronic',
            price: 110,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur',
            sale: true,
            liked: false
        },
        {
            id: '12',
            img: 'https://demo.hasthemes.com/neha-preview-tm/neha/assets/img/shop/shop-grid-1/1.jpg',
            title: 'Flying Drone with Remote',
            categories: 'Electronic',
            price: 110,
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor in ut labore et magna aliqua. Ut enim ad minim veniam, quis nostrud exercl itatio ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor sit amet, consectetur',
            sale: false,
            liked: false
        },
    ]

    return pug`
        View
            View.header
                Text.text
                    Text.redText 23 
                    Text Product Found of 
                    Text.redText 50
                View.sort
                    Text.text Sort By : 
                    RNPickerSelect(onValueChange=(value) => setPickerValue(value) items=pickerItems placeholder={label: 'Default', value: '0'})
                View.view
                    TouchableOpacity.viewItem(styleName='first' onPress=() => setViewType('grid'))
                        FontAwesomeIcon.viewIcon(styleName={active: activeView('grid')} icon=faTable size=u(4))
                    TouchableOpacity.viewItem(onPress=() => setViewType('list'))
                        FontAwesomeIcon.viewIcon(styleName={active: activeView('list')} icon=faTable size=u(4))
            if viewType === 'grid'
                View.products(styleName='grid')
                    each product in products
                        View.product(styleName='grid' key=product.id)
                            Image.productImg(styleName='grid' source={ uri: product.img })
                            if product.sale
                                Text.sale sale
                            View.info(styleName='grid')
                                View.infoRight
                                    Text.productTitle(styleName='grid') #{product.title}
                                    Text.productCategories #{product.categories}
                                View
                                    Text.redText $#{product.price.toFixed(2)}
            else if viewType === 'list'
                View.products
                    each product in products
                        View.product(styleName='list' key=product.id)
                            Image.productImg(styleName='list' source={ uri: product.img })
                            View.info(styleName='list')
                                Text.productTitle #{product.title}
                                Text.productPrice $#{product.price.toFixed(2)}
                                Text.productDescription #{product.description}
                                View.btns
                                    TouchableOpacity.btn(styleName='first')
                                        Text.btnText add to cart
                                    TouchableOpacity.btn
                                        FontAwesomeIcon.btnIcon(icon=faTable size=u(2))
    `
})