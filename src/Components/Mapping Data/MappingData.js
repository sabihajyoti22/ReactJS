import React from 'react'

import {v4 as uuidv4} from "uuid";

import Data from "../../Data.json"
import CardForProp from '../CardForProp/CardForProp';

export default function MappingData() {
  // var items = [];
    // for(let i = 0; i < Data.length; i++){
    //     items[i] = <module.CardForProp key={i} cardTitle = {Data[i].title} cardDes = {Data[i].desc}/>
    // }
    return <div >
        <h1 className="Header" style={{textAlign: "center"}}>Mapping Data to Components</h1>
        <div className="cardContainer">
            {
                Data.map((items) => <CardForProp key = {uuidv4()} cardTitle = {items.title} cardDes = {items.desc} />)
            }
            {/* {items} */}
        </div>
    </div>
}
