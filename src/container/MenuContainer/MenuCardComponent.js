import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const MenuCardComponent = ({ data, send }) => {
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
        </>
    )
}

export default MenuCardComponent