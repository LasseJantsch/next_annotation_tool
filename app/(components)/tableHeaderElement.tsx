import React from "react";

interface Props {
    title: string;
    width: number;
    shortcut?: string;
    classNames?: string;
}

const TableHeaderElement: React.FC<Props> = ({
    title,
    width,
    classNames,
}) => {

    return(
        <div key={`${title}_header_element`} className={`table_header_element ${classNames}`} style={{width: `${width}px`}}>{title}</div>
    )
}

export default TableHeaderElement