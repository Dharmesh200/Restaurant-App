import React, { Fragment, useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { DLT, ADD, REMOVE } from '../redux/actions/action'
import Header from '../NavBar/Header'

const CardsDetails = () => {
    const [data, setData] = useState([])
    const { id } = useParams()
    const history = useNavigate()
    const dispatch = useDispatch()

    const getdata = useSelector((state) => state.cartreducer.carts)

    const compare = () => {
        let comparedata = getdata.filter((e) => {
            return e.id == id
        })
        setData(comparedata)
    }

    // add data
    const send = (e) => {
        dispatch(ADD(e))
    }

    const dlt = (id) => {
        dispatch(DLT(id))
        history("/")
    }

    // remove one
    const remove = (item) => {
        dispatch(REMOVE(item))
    }


    useEffect(() => {
        compare()
    }, [id])

    return (
        <>
            <Header></Header>
            <div className="container mt-2">
                <h2 className='text-center'>Iteams Details Page
                </h2>
                <section className='container mt-3'>
                    <div className="iteamsdetails">
                        {
                            data.map((ele) => {
                                return (
                                    <Fragment key={ele.id}>
                                        <div className="items_img">
                                            <img src={ele.imgdata} alt="" />
                                        </div>
                                        <div className="details">
                                            <Table>
                                                <tr>
                                                    <td>
                                                        <span style={{ display: "inline-block" }}> <strong>Restaurant</strong>  : {ele.rname}</span>
                                                        <span style={{ display: "inline-block" }}> <strong>Price</strong>  : ₹{ele.price}</span>
                                                        <span style={{ display: "inline-block" }}> <strong>Dishes</strong>  : {ele.address}</span>
                                                        <span style={{ display: "inline-block" }}> <strong>Total</strong>  :₹  {ele.price * ele.qnty}</span>
                                                        <div className='mt-5 d-flex justify-content-between align-items-center' style={{ width: 100, cursor: "pointer", background: "#ddd", color: "#111" }}>
                                                            <span style={{ fontSize: 24 }} onClick={ele.qnty <= 1 ? () => dlt(ele.id) : () => remove(ele)}>-</span>
                                                            <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                                                            <span style={{ fontSize: 24 }} onClick={() => send(ele)}>+</span>

                                                        </div>
                                                    </td>
                                                    <td>
                                                        <p><strong>Rating :</strong> <span style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>{ele.rating} ★	</span></p>
                                                        <p><strong>Order Review :</strong> <span >{ele.somedata}	</span></p>
                                                        <p><strong>Remove :</strong> <span ><i className='fas fa-trash' onClick={() => dlt(ele.id)} style={{ color: "red", fontSize: 20, cursor: "pointer" }}></i>	</span></p>
                                                    </td>
                                                </tr>
                                            </Table>
                                        </div>
                                    </Fragment>
                                )
                            })
                        }
                    </div>
                </section>
            </div>
        </>
    )
}

export default CardsDetails