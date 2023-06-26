import React from 'react'
interface props{
items:listItems[]
}

type listItems={

    itemsKey:number,
    itemName:string,
    itemLink:string,
}
function ExportaItemLists({items}:props) {
    return(
    <>
       <div className='hidden  gap-2 md:flex mr-5'>
        <ul className='flex flex-row gap-3'>
        {items.map((item: listItems) => (
            <li key={item.itemsKey}>
                <a href={item.itemLink} className="p-2 text-white hover:bg-white hover:text-black rounded">
                {item.itemName}
                </a>
            </li>
        ))}

        </ul>
    </div>
    </>
    );

}

export default ExportaItemLists