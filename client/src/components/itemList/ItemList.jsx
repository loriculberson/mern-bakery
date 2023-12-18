import { useQuery } from '@apollo/client';
import Item from './Item'
import { QUERY_ITEMS } from '../../utils/queries'
import './Item.scss'

export default function ItemList(){
    const { loading, data } = useQuery(QUERY_ITEMS)
    const items = data?.items || [];
    const foodList = items?.map(item => {
        return(
            <Item key={item._id} item={item} />
        )
    })

    return(
        <>
            <h3>Welcome to the Bakery</h3>
            {loading ? (
                <div>Loading...</div>
            ) : (
                <section className="food-list">{foodList}</section>
            )}
        </>
    )
}