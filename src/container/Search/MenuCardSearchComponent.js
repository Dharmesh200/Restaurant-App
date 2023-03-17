import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Form from 'react-bootstrap/Form'
import { getMenuCardFetch } from '../../redux/actions/ApiFetchAction'
import { ADD } from '../../redux/actions/CartAction'
import MenuCardComponent from '../MenuContainer/MenuCardComponent'
import "../../components/style.css";

const MenuCardSearchComponent = () => {
    const [menuFilterList, setMenuFilterList] = useState([])
    const { restId } = useParams();
    const dispatch = useDispatch();
    const menuCardState = useSelector(state => state.menuCardReducer.menuCard)
    console.log("menuCard", menuCardState);

    sessionStorage.setItem("restId", restId)

    useEffect(() => {
        dispatch(getMenuCardFetch(restId))
    }, [])

    const sendToCart = (e) => {
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
                        menuFilterList && menuFilterList.length ? <MenuCardComponent data={menuFilterList} send={sendToCart} /> : <MenuCardComponent data={menuCardState} send={sendToCart} />
                    }
                </div>
            </div>
        </>
    )
}

export default MenuCardSearchComponent