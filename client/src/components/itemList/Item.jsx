/* eslint-disable react/prop-types */
import { Card, Button } from 'antd'
import { PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons'
const { Meta } = Card;

export default function Item( { item } ) {
    // eslint-disable-next-line react/prop-types
    const { id, name, cost, img } = item

    function handleCart(action, item){
        console.log('item', item)
        // action === 'remove'
        //     ? removeItem(item)
        //     : addItem(item)
    }

    return (
        <Card 
            key={id}
            style={{
                width: 200,
                margin: '1em',
                textAlign: 'center'
            }}
            cover={
                <img
                alt={name}
                src={img}
                />
            }
            actions={[
                <MinusCircleOutlined key={id} onClick={()=> handleCart('remove', item)}/>,
                <Button key={id} type="primary" shape="circle">
                    0
                </Button>,
                <PlusCircleOutlined key="setting"  onClick={()=> handleCart('add', item)}/>,
            ]}
            >
            <Meta
                title={name}
                description={`$${cost/100}`}
                />
        </Card>
    )
}