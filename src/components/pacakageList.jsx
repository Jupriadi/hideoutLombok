import React from 'react';


const PackageList =(props)=>{
    return(
        <div className="card shadow-sm" style={{width: "15rem"}}>
            <img src={require('../img/svg/beach.jpg')} className="card-img-top" alt="Gambar Paket" />
            <div className="card-body">
                <h5 className="card-title">{props.judul}</h5>
                <p className="card-text">Deskripsi Singkat</p>
                <a href="#" className="btn btn-primary">Book Now</a>
            </div>
        </div>
    )
}

export default PackageList;