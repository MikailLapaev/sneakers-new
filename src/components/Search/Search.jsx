import "./Search.css"
export default function Search({action}){
    return(
        <>
         <form action={action} method="get">
            <input className="search" type="search" placeholder="&#128269; Поиск..." name="search" id="" />
        </form>
        </>
    )
   
}