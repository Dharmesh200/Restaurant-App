import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { getMenuCardFetch } from '../redux/actions/ApiFetchAction'
import { ADD } from '../redux/actions/CartAction'
import Header from '../NavBar/Header'
import "../style.css";

const DisplayCard = ({ element, send }) => {
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
}

const MenuCard = () => {
    const [menuFilterList, setMenuFilterList] = useState([])
    const { restId } = useParams();
    const dispatch = useDispatch();
    const menuCardState = useSelector(state => state.menuCardReducer.menuCard)
    console.log("menuCard", menuCardState);

    sessionStorage.setItem("restId", restId)

    useEffect(() => {
        dispatch(getMenuCardFetch(restId))
    }, [])

    const send = (e) => {
        dispatch(ADD(e));
    }

    const handleFilterMenu = (element) => {
        let menuItem = element.target.value.toLowerCase()
        if (menuItem === "") {
            setMenuFilterList(menuCardState)
        } else {
            let storeData = menuCardState.filter((ele, k) => {
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
                    {
                        menuFilterList && menuFilterList.length ? menuFilterList.map((element) => {
                            return <DisplayCard element={element} send={send} />
                        }) : menuCardState.map((element) => {
                            return <DisplayCard element={element} send={send} />
                        })
                    }

                </div>
            </div>
        </>
    )
}

export default MenuCard