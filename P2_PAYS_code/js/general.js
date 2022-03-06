function clickFiltres(id) {
    let tabFiltres = document.getElementsByClassName("item_filtres")
    let tabClass = tabFiltres[id].classList
    let estActif = false
    let i=0
    while(!estActif && i<tabClass.length){
        if(tabClass[i]=="is_active_filtres"){
            estActif=true
        }
        i++
    }
    if(estActif){
        tabFiltres[id].className = tabFiltres[id].className.replace("is_active_filtres")
    }else{
        tabFiltres[id].className +=" is_active_filtres"
    }
}

function clickNav(id) {
    let tabNav = document.getElementsByClassName("element_nav")
    let estActif = false
    let i = 0
    
    while(i<tabNav.length && !estActif){
        let tabClass = tabNav[i].classList
        let j = 0
        while(j<tabClass.length && !estActif){
            if(i==id){
                if(tabClass[j]=="element_nav_active"){
                    estActif=true
                }
            }else{
                if(tabClass[j]=="element_nav_active"){
                    tabNav[i].className = tabNav[i].className.replace("element_nav_active")
                }
            }
            j++
        }
        i++
    }

    if(!estActif){
        tabNav[id].className += " element_nav_active"
    }
}