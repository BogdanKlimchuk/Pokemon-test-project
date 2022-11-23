import React, {useContext, useState} from "react";


const PageContext = React.createContext(null)
const PageUpdateContext = React.createContext(null)

export function usePage(){
    return useContext(PageContext)
}

export function usePageUpdate(){
    return useContext(PageUpdateContext)
}


export  function PageProvider({children}){
    const [page, setPage] = useState(0)
    const [totalCount, setTotalCount] = useState()



    function setNewPage(newPage){
        setPage(newPage)
    }
    function setNewTotalCount(newTotal){
        setTotalCount(newTotal)
    }


    return(
        <PageContext.Provider value={{page, totalCount}}>
            <PageUpdateContext.Provider value={{setNewPage, setNewTotalCount}}>
                {children}
            </PageUpdateContext.Provider>
        </PageContext.Provider>

    )
}