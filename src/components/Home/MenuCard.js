import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import axios from '../Data/RestaurantData'
import "../style.css";
import { ADD } from '../redux/actions/action'
import Header from '../NavBar/Header'

const MenuCard = () => {
    const [menuData, setMenuData] = useState([])
    const [menuFilterList, setMenuFilterList] = useState([])
    const [isError, setIsError] = useState("")
    const { restId } = useParams();
    const dispatch = useDispatch();

    sessionStorage.setItem("restId", restId)

    const getApiData = async () => {
        try {
            const res = await axios.get(`/${restId}`)
            setMenuFilterList(res.data.foodData)
            setMenuData(res.data.foodData)
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

    const handleFilterMenu = (element) => {
        let menuItem = element.target.value.toLowerCase()
        if (menuItem === "") {
            setMenuFilterList(menuData)
        } else {
            let storeData = menuFilterList.filter((ele, k) => {
                return ele.rmenu.toLowerCase().match(menuItem)
            })
            setMenuFilterList(storeData)
        }

    }
    return (
        <>
            <Header></Header>
            <Form className='d-flex justify-content-center align-items-center mt-3'>
                <Form.Group className="mx-2 col-lg-4" controlId="formBasicEmail">
                    <Form.Control
                        type="text"
                        onChange={handleFilterMenu}
                        placeholder="Search Restaurant" />
                </Form.Group>
                <button
                    className='btn text-light col-lg-1'
                    style={{ background: '#ed4c67' }}>Search</button>
            </Form>

            <div className='container mt-3'>
                <div className="row d-flex justify-content-center align-items-center">
                    {isError !== "" && <h2>{isError}</h2>}
                    {
                        menuFilterList && menuFilterList.length ? menuFilterList.map((element) => {
                            return (
                                <Card key={element.id} style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style">
                                    <Card.Img variant="top" src={element.imgdata} style={{ height: "16rem" }} className="mt-3" />
                                    <Card.Body>
                                        <Card.Title>{element.rmenu}</Card.Title>
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
                        }) : menuFilterList
                    }

                </div>
            </div>
        </>
    )
}

export default MenuCard