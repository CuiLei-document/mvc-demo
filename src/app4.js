import $ from 'jquery'
import './app4.css'

const $radius = $('#app4 .radius')
$radius.on('mouseenter',()=>{
    $radius.addClass('active')
}).on('mouseleave',()=>{
    $radius.removeClass('active')
})