import * as React from 'react';
import './TableOrders.css'

export interface ITableOrdersProps {
    orders: any[];
    title: string;
    bgColorHeader?: string;
    colorHeader?: string;
}

export default function TableOrders ({ orders = ['',''], title, colorHeader, bgColorHeader}: ITableOrdersProps)  {
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
                    {order}
                </div>
            )
        }
    </div>
  );
}
