<!--
 * @Description: 
 * @Author: 幺五六
 * @Date: 2019-12-25 17:17:30
 * @LastEditors: 幺五六
 * @LastEditTime: 2020-09-09 17:56:28
-->

<script>
import * as icons from 'vue-feather-icons'

export default {
    functional:true,
    name: 'feather-icon',
    props: {
        icon: { required: true },
        svgClasses: { type: [String, Object, Array], default: "" },
        badge: {},
        badgeClass: { type: String, default: "" }
    },
    render(h, {props, data}) {
        // Add feather classes
        data.staticClass ? data.staticClass = data.staticClass + ' feather-icon select-none relative' : data.staticClass = 'feather-icon select-none relative'

        let svg = h(icons[props.icon], {class: props.svgClasses})
        const badgeBg = props.badgeClass || 'bg-primary';
        let badgeEl = h('span', {class: `feather-icon-badge bg-primary text-white h-5 w-5 absolute rounded-full text-xs flex items-center justify-center ${badgeBg}`, style: 'top: -7px; right: -5px'}, [props.badge])
        let children = [svg]
        if(props.badge) children.push(badgeEl)
        return h('span', data, children)
    }
}

</script>

<style lang="scss">
@import "@/assets/scss/vuexy/components/featherIcon.scss"
</style>
