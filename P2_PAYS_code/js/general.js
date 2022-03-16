function clickFiltres(id) {
    let tabFiltres = document.getElementsByClassName("item_filtres")
    let isActive = tabFiltres[id].classList.contains('is_active_filtres')
    if(isActive){
        tabFiltres[id].classList.remove("is_active_filtres")
    }else{
        tabFiltres[id].classList.add("is_active_filtres")
    }
}

function clickNav(id) {
    let tabNav = document.getElementsByClassName("element_nav")
    let isActive = false
    let i = 0
    
    while(i<tabNav.length){
        isActive = tabNav[i].classList.contains("element_nav_active")
            if(i!=id && isActive){
                tabNav[i].classList.remove("element_nav_active")
            }else if(i==id){
                tabNav[i].classList.add("element_nav_active")
            }
        i++
    }
}