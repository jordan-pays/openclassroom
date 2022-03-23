function clickFiltres(id) {
    const tabFiltres = document.getElementsByClassName("item_filtres")
    toggleActive('is_active_filtres', tabFiltres[id])
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
    let tabClassList = dom.classList
    const isActive = tabClassList.contains(classActive)

    if (isActive) {
        tabClassList.remove(classActive)
    } else {
        tabClassList.add(classActive)
    }
}