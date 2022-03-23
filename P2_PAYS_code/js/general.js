function clickFiltres(id) {
    const tabFiltres = document.getElementsByClassName("item_filtres")

    toggleActive('is_active_filtres',tabFiltres[id])
}

function clickNav(id) {
    const tabNav = document.getElementsByClassName("element_nav")
    let i=0

    while (i<tabNav.length) { 
        const isActiveBis = isActive("element_nav_active",tabNav[i])
        if ( isActiveBis && i!=id) {
            removeActive("element_nav_active",tabNav[i])
        }else if(!isActiveBis && i==id){
            addActive("element_nav_active",tabNav[i])
        }

        i++
    }

    addActive("element_nav_active",tabNav[id])
}

function toggleActive(classActive,dom) {
    if (isActive(classActive,dom)) {
        removeActive(classActive,dom)
    } else {
        addActive(classActive,dom)
    }
}

function isActive(classActive,dom){
    return dom.classList.contains(classActive)
}

function removeActive(classActive,dom){
    dom.classList.remove(classActive)
}

function addActive(classActive,dom){
    dom.classList.add(classActive)
}