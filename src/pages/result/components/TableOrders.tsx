import * as React from 'react';
import './TableOrders.css'

export interface ITableOrdersProps {
    title: string;
    bgColorHeader?: string;
    colorHeader?: string;
    filial: string;
    urlName: string;
    qtdItems: string;
}

export default function TableOrders ({ title, colorHeader, bgColorHeader, urlName, filial, qtdItems}: ITableOrdersProps)  {

    const pageSelected = React.useRef(1)
    const [orders, setOrders] = React.useState([])

    React.useEffect(()=>{


        const interval = setInterval(async()=>{
            
            const url = `http://${import.meta.env.VITE_BACKEND_URL}/get/painelCliente/${urlName}/${filial}/${pageSelected.current}/${qtdItems}`
            const data = await fetch(url)
            const result = await data.json()

            pageSelected.current = (pageSelected.current % parseInt(result[0].paginas) ) + 1
            setOrders(result.orders)

        },4000)

        return ()=>{
            clearInterval(interval)
        }

    },[])

  return (
    <div className='container-cards-orders'>
        <div className='container-header-order' style={{
            backgroundColor: bgColorHeader || undefined,
            color: colorHeader
        }}>
            {title}
        </div>
        {
            orders.map((order: any) => 
                <div className='container-card-order'>
                    {order.nr_pedido}
                </div>
            )
        }
    </div>
  );
}
