import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import "../style.css";
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';
import { useParams } from 'react-router-dom';
import { restaurantData } from '../Data/RestaurantData';
import Header from '../NavBar/Header';

const MenuCard = () => {
    const { restId } = useParams();
    // console.log(restId);

    sessionStorage.setItem("restId", restId)

    const filterMenuList = restaurantData.filter((val) => {
        return val.id == restId
    })

    const [data, setData] = useState([]);
    // console.log(data);

    // useEffect(() => {
    //     setData(filterMenuList)
    // }, [data])

    const dispatch = useDispatch();


    const send = (e) => {
        // console.log(e);
        dispatch(ADD(e));
    }

    return (
        <>
            <Header></Header>
            <div className='container mt-3'>
                <div className="row d-flex justify-content-center align-items-center">
                    {
                        filterMenuList?.[0]?.foodData?.map((element) => {
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