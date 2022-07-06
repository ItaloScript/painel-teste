import * as React from 'react';
import TableOrders from './components/TableOrders';
import './index.css'
interface IResultProps {
}

const Result: React.FunctionComponent<IResultProps> = (props) => {

    const [data, setData] = React.useState<any>({
        separacao: [
            '324252'
        ],
        caixa: [],
        expedicao: [],
    });

    React.useEffect(() => {
        //get the url and split numbers
        const url = window.location.pathname.split('/')
        const filial = url[2]
        const items = url[3]
        const page = url[4]

        //get the data from the api

        const getData = async () => {
            const separacao = (await fetch(`http://${import.meta.env.VITE_BACKEND_URL}/get/painelCliente/separacao/${filial}/${page}/${items}`)).json()
            const caixa = (await fetch(`http://${import.meta.env.VITE_BACKEND_URL}/get/painelCliente/caixa/${filial}/${page}/${items}`)).json()
            const expedicao = (await fetch(`http://${import.meta.env.VITE_BACKEND_URL}/get/painelCliente/expedicao/${filial}/${page}/${items}`)).json()
            
            setData({
                separacao,
                caixa,
                expedicao
            })
        }

        const interval = setInterval(()=>{
            // getData()
            console.log('requisição')
        },1000)

        return ()=>{
            clearInterval(interval)
        }


    },[])

  return (
    <div className='containers-orders'>
        <TableOrders title='Separação' orders={data.separacao} bgColorHeader={"#060606"} colorHeader="#fff"/>
        <TableOrders title='Caixa' orders={data.caixa} bgColorHeader={"#2f8fc7"} colorHeader="#fff"/>
        <TableOrders title='Expedição' orders={data.expedicao} bgColorHeader={"#23ab2c"} colorHeader="#fff"/>
    </div>
  );
};

export default Result;
