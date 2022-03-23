function clickfilters(id) {
    const tabfilters = document.getElementsByClassName("item_filters")
    toggleActive('is_active_filters', tabfilters[id])
}

function clickNav(id) {
    const tabNav = document.getElementsByClassName("element_nav")

    while (i < tabNav.length) {

        if (i == id) {

        }

        i++
    }
}

function toggleActive(classActive, dom) {
    const tabClassList = dom.classList
    const isActive = tabClassList.contains(classActive)
    if (isActive) {
        tabClassList.remove(classActive)
    } else {
        tabClassList.add(classActive)
    }
}
