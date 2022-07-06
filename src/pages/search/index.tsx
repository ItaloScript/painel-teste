import * as React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import './index.css'

export interface ISearchProps {
}

export default function Search(props: ISearchProps) {

    const navigate = useNavigate()

    const submitForm = (e:any) => {
        e.preventDefault()
        navigate('/result/' + e.target.filial.value + '/' + e.target.items.value + '/0')
    }

    return (
        <div className='container-search'>
            <div className='search-box'>
                <form className='container-form-search' onSubmit={submitForm}>
                    <input id="filial" className='filial' type='number' placeholder='Filial' required />
                    <input id="items" type='number' placeholder='Quantidade de Itens' required />
                    <button type='submit'>Buscar</button>
                </form>
            </div>
        </div>
    )
}
