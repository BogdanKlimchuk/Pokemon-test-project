import React from 'react';
import classes from "./PaginationItem.module.css";
import {usePage, usePageUpdate} from "../../context/PageContext";

const PaginationItem = ({value, text, total}) => {
    const {page} = usePage()
    const {setNewPage} = usePageUpdate()

    return (
            <li className={`${classes.pagination} ${value === page ? classes.active : ''}`}>
                    <a
                        onClick={
                            (e) => {
                                e.preventDefault()
                                if(value >=0 && value <= total)
                                    setNewPage(value)
                            }
                        }
                      >
                       {text}
                    </a>
            </li>
    );
};

export default PaginationItem;