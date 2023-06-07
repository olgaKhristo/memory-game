export default function Card({card, index, clickhendeler}){
    return(
        <div className={`card ${card.status}`} onClick={()=>clickhendeler(index)}>
        <img src={card.img} alt = {card.name}/>


        </div>
    )
}