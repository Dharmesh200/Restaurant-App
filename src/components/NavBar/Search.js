import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from 'react-bootstrap/Form'
import { getRestaurantFetch } from '../redux/actions/ApiFetchAction'
import '../style.css'
import RestLogo from '../../Assets/png-clipart-graphics-restaurant-logo-restaurant-thumbnail.png'
import RestaurantCard from '../Home/RestaurantCard'

const Search = () => {
    const [restaurantFilterList, setRestaurantFilterList] = useState([])
    const dispatch = useDispatch();
    const restaurantState = useSelector(state => state.restaurantReducer.restaurant)

    useEffect(() => {
        dispatch(getRestaurantFetch())
    }, [])

    const handleFilterRestaurant = (e) => {
        let restaurantName = e.target.value.toLowerCase()
        if (restaurantName === "") {
            setRestaurantFilterList(restaurantState)
        } else {
            let storeData = restaurantState.filter((ele, k) => {
                return ele.rname.toLowerCase().match(restaurantName)
            })
            setRestaurantFilterList(storeData)
        }
    }

    return (
        <>
            <div className="container d-flex justify-content-between align-items-center">
                <img
                    className='mt-3'
                    src={RestLogo}
                    style={{
                        width: '8rem',
                        position: "relative",
                        left: '2%',
                        cursor: 'pointer'
                    }}
                    alt='Loading....' />
                <h2 className='mt-3'
                    style={{
                        color: "#1b1464",
                        cursor: "pointer"
                    }}>
                    Restaurant App
                </h2>
            </div >
            <Form className='d-flex justify-content-center align-items-center mt-3'>
                <Form.Group className="mx-2 col-lg-4" controlId="formBasicEmail">
                    <Form.Control
                        type="text"
                        onChange={handleFilterRestaurant}
                        placeholder="Search Restaurant" />
                </Form.Group>
                <button
                    className='btn text-light col-lg-1'
                    style={{ background: '#ed4c67' }}>Search</button>
            </Form>
            <section className='item_section mt-4 container'>
                <h2 className='px-4' style={{ fontWeight: 400 }}>
                    Restaurants Available Near to You
                </h2>
                <div className='row mt-2 d-flex justify-content-center align-items-center'>
                    {restaurantFilterList && restaurantFilterList.length ? <RestaurantCard data={restaurantFilterList} /> : <RestaurantCard data={restaurantState} />}
                </div>

            </section>
        </>
    )
}

export default Search