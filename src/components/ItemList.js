import Item from './Item';

const ItemList = ({ items }) => {
    return (
        <div>
            {
                items.map( (item) => {
                    return <Item item={item} key={item.id} />       
                })
            }
        </div>
    )
}

export default ItemList;