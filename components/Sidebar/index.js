import { BASE_URL } from '@env'
import React from 'react'
import { observer, u } from 'startupjs'
import { View, Text, TextInput, TouchableOpacity, Image, Linking } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faTable } from '@fortawesome/free-solid-svg-icons'
import './index.styl'

export default observer(() => {
    const [searchInputText, setSearchInputText] = React.useState('')

    const categories = [
        {
            title: 'Accessories',
            value: 4
        },
        {
            title: 'Book',
            value: 9
        },
        {
            title: 'Clothing',
            value: 5
        },
        {
            title: 'Homelife',
            value: 3
        },
        {
            title: 'Kids & Baby',
            value: 4
        }
    ]
    const colors = ['red', 'pink', 'blue', 'sky', 'green', 'purple']
    const sizes = ['XL', 'M', 'L', 'ML', 'LM']
    const topProducts = [
        {
            id: '1',
            img: 'https://demo.hasthemes.com/neha-preview-tm/neha/assets/img/product/sidebar-product/1.jpg',
            title: 'Flying Drone',
            rating: 2,
            price: 140
        },
        {
            id: '2',
            img: 'https://demo.hasthemes.com/neha-preview-tm/neha/assets/img/product/sidebar-product/2.jpg',
            title: 'Flying Drone',
            rating: 2,
            price: 140
        },
        {
            id: '3',
            img: 'https://demo.hasthemes.com/neha-preview-tm/neha/assets/img/product/sidebar-product/3.jpg',
            title: 'Flying Drone',
            rating: 2,
            price: 140
        },
        {
            id: '4',
            img: 'https://demo.hasthemes.com/neha-preview-tm/neha/assets/img/product/sidebar-product/4.jpg',
            title: 'Flying Drone',
            rating: 2,
            price: 140
        },
    ]

    return pug`
        React.Fragment
            View.section(styleName='first')
                Text.sectionTitle Search Products
                View.search
                    TextInput.searchInput(placeholder='Search Products...' value=searchInputText onChangeText=text => setSearchInputText(text))
                    TouchableOpacity.searchBtn
                        FontAwesomeIcon.searchIcon(icon=faTable size=u(4))
            View.section
                Text.sectionTitle Filter by Price
            View.section
                Text.sectionTitle Categories
                View.categories
                    each category in categories
                        View.category(key=category.title)
                            Text.categoryTitle #{category.title}
                            Text.categoryValue #{category.value}
            View.section
                Text.sectionTitle Color
                View.colors
                    each color in colors
                        View.color(key=color styleName=color)
                            Text.colorLink
            View.section
                Text.sectionTitle Size
                View.sizes
                    each size in sizes
                        Text.size(key=size) #{size}
            View.section
                Text.sectionTitle Top rated products
                each product in topProducts
                    View.topProduct(key=product.id)
                        Image.topProductImg(source={ uri: product.img })
                        View.topProductInfo
                            Text.topProductTitle #{product.title}
                            View.rating
                                Text.star(styleName=['first', product.rating > 0 && 'fillStar'])
                                Text.star(styleName=product.rating > 1 && 'fillStar')
                                Text.star(styleName=product.rating > 2 && 'fillStar')
                                Text.star(styleName=product.rating > 3 && 'fillStar')
                                Text.star(styleName=product.rating > 4 && 'fillStar')
                            Text.topProductPrice $#{product.price.toFixed(2)}
    `
})