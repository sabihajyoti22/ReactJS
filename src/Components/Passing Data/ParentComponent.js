import React,{useState} from 'react'

import ChildComponent from './ChildComponent';

export default function ParentComponent() {
    const [childData, setChildData] = useState(false);

    const handleChild = (data) => {
        setChildData(data)
    }
    return (
      <div>
          <h1 className="Header" style={{textAlign: "center"}}>Passing Data from Child to Parent Component</h1>
          <ChildComponent onChildData = {handleChild}/>
          <h4>{childData ? 'true' : 'false'}</h4>
      </div>
    )
}
