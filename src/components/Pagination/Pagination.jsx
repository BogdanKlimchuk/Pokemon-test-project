import React, {useMemo} from 'react';
import {usePage} from "../../context/PageContext";
import {PER_PAGE} from "../../utils/consts";
import classes from "./Pagination.module.css";
import PaginationItem from "../PaginationItem/PaginationItem";

const Pagination = () => {
    const {page, totalCount} = usePage()
    // console.log('render pages')

    const totalPages = useMemo(() => {
        if(!totalCount)
            return null
        return  Math.trunc(totalCount/PER_PAGE)
    }, [totalCount])


    const computePages = useMemo(() => {
        if(!totalPages)
            return []
        console.log(totalPages)
        const offset  = 4;
        const itemsCount = 8
        if(page < offset)
            return Array.from({ length: (itemsCount - 1) + 1}, (_, i) => 1 + i)
        if(totalPages - page > offset)
            return Array.from({ length: ((page - offset + itemsCount) - (page - offset + 1)) + 1}, (_, i) => (page - offset + 1) + i)
        return Array.from({ length: ((totalPages - 1) - (totalPages - itemsCount)) + 1}, (_, i) => (totalPages - itemsCount) + i)

    }, [page, totalPages])


        // let pages = [0];
        // if(page < offset)
        //     for (let i = 1; i < itemsCount; i++){
        //         pages.push(i)
        //     }
        // else if(totalPages - page > offset) {
        //     for (let i = page - offset + 1; i < page - offset + itemsCount; i++) {
        //         pages.push(i)
        //     }
        // }
        // else{
        //     for (let i = totalPages - itemsCount + 1; i < totalPages; i++){
        //         pages.push(i)
        //     }
        // }

    return (
        <ul className={classes.pagination} >

            <PaginationItem value={page-1} text={'<'}  total={totalPages}/>

            <PaginationItem value={0} text={'1'}  total={totalPages}/>

            {totalPages && <>
                {computePages[0] !== 1 &&  <PaginationItem  text={'...'}/>}

                {computePages.map(item =>
                    <PaginationItem key = {item} value={item} text={item+1}  total={totalPages}/>
                )}

                {computePages[computePages.length-1] !== totalPages - 1 &&  <PaginationItem  text={'...'}/>}

                <PaginationItem value={totalPages} text={`${totalPages + 1}`}  total={totalPages}/>
            </>}

            <PaginationItem value={page+1} text={'>'} total={totalPages}/>


        </ul>
    );
};

export default Pagination;