
import { useState } from "react"
import Card from "./Card"
export default function Cards(){
    const [cards, setCards] = useState([
        {id:0, name: 'bryan', status: '', img:'/images/01.jpg'},
        {id:0, name: 'bryan', status: '', img:'/images/01.jpg'},
        {id:1, name: 'ry', status: '', img:'/images/02.jpg'},
        {id:1, name: 'ry', status: '', img:'/images/02.jpg'},
        {id:2, name: 'gu', status: '', img:'/images/03.jpg'},
        {id:2, name: 'gu', status: '', img:'/images/03.jpg'},
        {id:3, name: 'gu', status: '', img:'/images/04.jpg'},
        {id:3, name: 'gu', status: '', img:'/images/04.jpg'},
        {id:4, name: 'gu', status: '', img:'/images/05.jpg'},
        {id:4, name: 'gu', status: '', img:'/images/05.jpg'},
        {id:5, name: 'gu', status: '', img:'/images/06.jpg'},
        {id:5, name: 'gu', status: '', img:'/images/06.jpg'},
      
    ])
    return(
        <div className="container">
        {cards.map((card, index) => {
            return <Card card = {card}/>

        })}


        </div>
    )
}