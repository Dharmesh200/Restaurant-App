import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import axios from '../Data/RestaurantData'
import "../style.css";
import { ADD } from '../redux/actions/action'
import Header from '../NavBar/Header'

const MenuCard = () => {
    const [menuData, setMenuData] = useState([])
    const [isError, setIsError] = useState("")
    const { restId } = useParams();
    const dispatch = useDispatch();

    sessionStorage.setItem("restId", restId)

    const getApiData = async () => {
        try {
            const res = await axios.get(`/restaurant/${restId}`)
            setMenuData(res.data)
        } catch (error) {
            setIsError(error.message);
        }
    }

    useEffect(() => {
        getApiData()
    }, [])

    const send = (e) => {
        dispatch(ADD(e));
    }

    return (
        <>
            <Header></Header>
            <div className='container mt-3'>
                <div className="row d-flex justify-content-center align-items-center">
                    {isError !== "" && <h2>{isError}</h2>}
                    {
                        menuData?.[0]?.foodData?.map((element) => {
                            return (
                                <Card key={element.id} style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style">
                                    <Card.Img variant="top" src={element.imgdata} style={{ height: "16rem" }} className="mt-3" />
                                    <Card.Body>
                                        <Card.Title>{element.rname}</Card.Title>
                                        <Card.Text>
                                            Price : ₹ {element.price}
                                        </Card.Text>
                                        <div className="button_div d-flex justify-content-center">
                                            <Button variant="primary"
                                                onClick={() => send(element)}
                                                className='col-lg-12'>Add to Cart</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default MenuCard