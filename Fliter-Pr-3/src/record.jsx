const Record  = ({data,category,fliterData}) => {
    return(
        <div >
        <h1 align="center">Apple Store</h1>
           <div className="container-fluid pt-4"align="center">
           <button type="button" className="btn btn-info"style={{marginRight:"20px"}} onClick={() => fliterData("all")}>All</button>
              {
                data.map((val)=>{
                    return(
                        <button type="button" key={val.id} className="btn btn-info"style={{marginRight:"20px"}} onClick={ () => fliterData(val.name)}>{val.name}</button>
                    )
                })
              }
           </div>
           <div className="container-fluid pt-4">
            <div className="row">
              {
                category.map((val)=>{
                    return(
                        <div className="col-3" key={val.id}style={{borderRadius:"20px!important"}}>
                <div className="card card-box" style={{width:"18rem",marginTop:"30px",padding:"10px"}}>
                    <img src={val.img} className="card-img-top" alt="..."style={{height:"250px",objectFit:"contain"}}/>
                    <div className="card-body">
                        <h5 className="card-title">{val.title}</h5>
                        <p className="card-text">₹{val.price}</p>
                        <a href="#" className="btn btn-primary">Add to Cart</a>
                    </div>
                    </div>
                </div>
                    )
                })
              }
            </div>
           </div>
        </div>
    )
}   
export default Record