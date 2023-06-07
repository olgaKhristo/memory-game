
import { useState, useRef } from "react"
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
      
    ].sort(()=> Math.random() - 0.5))

    const [previousCardState, setPreviosCardState] = useState(-1)
    const previouseIndex = useRef(-1)
    const matchCheck = (currentCard) =>{
         if(cards[currentCard].id === cards[previousCardState].id){
            cards[previousCardState].status = 'active matched'
            cards[currentCard].status = 'active matched'
            setPreviosCardState(-1)

         }else{
            cards[currentCard].status = 'active'
            setCards([...cards])
            setTimeout(()=>{
                setPreviosCardState(-1)
                cards[currentCard].status ='unmatch'
                cards[previousCardState].status = 'unmatch'
                setCards([...cards])
            },1000)
         }
    }
    const clickhendeler = (index) =>{
        if(index !== previouseIndex.current){
            if(cards[index].status ==='active matched'){
                alert('alredy mached')

            }else{
                  if(previousCardState === -1){
                     previouseIndex.current = index
                     cards[index].status = 'active'
                     setCards([...cards])
                     setPreviosCardState(index)
                  }else{
                      matchCheck(index)
                      previouseIndex.current =  -1
                  }
            }


        }else{
            alert('card has been already selected')

        }
        

    }

    return(
        <div className="container">
        {cards.map((card, index) => {
            return <Card card = {card} key={index} index={index} clickhendeler={clickhendeler}/>

        })}


        </div>
    )
}