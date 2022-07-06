import * as React from 'react';
import TableOrders from './components/TableOrders';
import './index.css'




const Result: React.FunctionComponent = () => {




function getUrl(name: string) {
    const filial = url[2]
    const items = url[3]
    const page = url[4]
    return `http://${import.meta.env.VITE_BACKEND_URL}/get/painelCliente/${name}/${filial}/${page}/${items}`
}

const url = window.location.pathname.split('/')
const filial = url[2]
const items = url[3]


return (
    <div className='containers-orders'>
        <TableOrders
            title='Separação'
            bgColorHeader={"#060606"}
            colorHeader="#fff"
            filial={filial}
            urlName="separacao"
            qtdItems={items}

             />
        <TableOrders
            title='Caixa'
            bgColorHeader={"#2f8fc7"}
            colorHeader="#fff"
            filial={filial}
            urlName="caixa"
            qtdItems={items}
        />
        <TableOrders
            title='Expedição'
            bgColorHeader={"#23ab2c"}
            colorHeader="#fff"
            filial={filial}
            urlName="expedicao"
            qtdItems={items}
        />
    </div>
)
};

export default Result;
