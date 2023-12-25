import React from 'react'

import CustomUseEffect from './CustomUseEffect'

const loadingMessage = <p>Todo is Loaded</p>

export default function Hooks_DataFetch() {
    const {data, isLoading, error} = CustomUseEffect("https://jsonplaceholder.typicode.com/todos")

    const dataItems = data && data.map((datas)=>{
        return <p key={datas.id}>{datas.title}</p>
    })

  return (  
    <div>
        <h1>Data Fetch</h1>
        {error && <p>{error}</p>}
        {isLoading && loadingMessage}
        {dataItems}
    </div>
  )
}
