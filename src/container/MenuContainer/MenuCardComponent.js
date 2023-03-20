import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const MenuCardComponent = ({ data, send }) => {
    const [page, setPage] = useState(1)
    const selectPageHandler = (selectedPage) => {
        if (selectedPage >= 1 && selectedPage <= data.length / 10 && selectedPage !== page) {
            console.log("page", page);
            setPage(selectedPage)
        }
    }
    return (
        <>
            {
                data.map((item) => {
                    return (
                        <Card key={item.id} style={{ width: '22rem', border: "none" }} className="mx-2 mt-4 card_style">
                            <Card.Img variant="top" src={item.imgdata} style={{ height: "16rem" }} className="mt-3" />
                            <Card.Body>
                                <Card.Title>{item.rmenu}</Card.Title>
                                <Card.Text>
                                    Price : ₹ {item.price}
                                </Card.Text>
                                <div className="button_div d-flex justify-content-center">
                                    <Button variant="primary"
                                        onClick={() => send(item)}
                                        className='col-lg-12'>Add to Cart</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    )
                })
            }
            {/* {
                <div className="pagination">
                    <span onClick={() => selectPageHandler(page - 1)} className={page > 1 ? "" : "pagination__disable"}>◀ span</span>
                    {[...Array(data.length / 9)].map((_, i) => {
                        return <span key={i} className={page === i + 1 ? "pagination__selected" : ""} onClick={() => selectPageHandler(i + 1)}>{i + 1}</span>
                    })}
                    <span onClick={() => selectPageHandler(page + 1)} className={page < data.length / 9 ? "" : "pagination__disable"}>▶span</span>
                </div>
            } */}
        </>
    )
}

export default MenuCardComponent