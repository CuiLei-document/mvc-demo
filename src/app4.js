import $ from 'jquery'
import './app4.css'

const html = `
<section id="app4">
    <div class="radius">
    </div>
</section>
`
const $element = $(html).appendTo('body>.page')
const $radius = $('#app4 .radius')
$radius.on('mouseenter',()=>{
    $radius.addClass('active')
}).on('mouseleave',()=>{
    $radius.removeClass('active')
})
const eventBus = $({})
console.log(eventBus)