import React , {useContext, useState} from "react";
import './App.css';
import {Navbar , Nav , NavDropdown , Container } from 'react-bootstrap';
import Data from './data.js';
import { Link , Route , Routes, useNavigate } from 'react-router-dom';
import Detail from "./Detail";
import Slide from "./Slide";
import Footer from "./Footer";
import axios from "axios";
import Cart from './Cart.js';

//같은 변수값을 공유할 범위를 생성해주는 문법
let 재고context = React.createContext();

function App(){
    let [shoes,shoes변경]=useState(Data);
    let [재고,재고변경] = useState([10,11,12,9,10,11]);

    return(
        <div className="App">
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand><Link to="/slide">MY-SHOP</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link to="/">Home</Link></Nav.Link>
                            <Nav.Link><Link to="/detail">Detail</Link></Nav.Link>
                            <NavDropdown title="My page" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.2"><Link to="/cart">Cart</Link></NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Log-in</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Help</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            <Routes>
                <Route path='/' element={<Slide />}/>
                <Route path='/detail' element={<Detail shoes={shoes} 재고={재고} 재고변경={재고변경} />}/>
                <Route path='/cart' element={<Cart />} />
            </Routes>

            <div className="background">
                        <h1>Trending Styles</h1>
                        <h4>Check out the new Valentine's Day collection.</h4>
                        <p><button type="button" class="btn btn-outline-secondary">Learn more</button></p>
                    </div>

                    <div className="container">
                        <재고context.Provider value={재고}>
                            <div className="row">
                                {
                                    shoes.map((a,i)=>{
                                        return <Card shoes={shoes[i]} i={i} key={i} />
                                    })
                                }
                            </div>
                        </재고context.Provider>
                        <button className="btn btn-outline-secondary" onClick={()=>{
                            axios.get('https://codingapple1.github.io/shop/data2.json')
                            .then((result)=>{
                                console.log(result.data);
                                shoes변경( [...shoes , ...result.data] )
                                //사진이 3개라서 버튼 없애기 !!
                            })
                            .catch(()=>{
                                console.log('실패')
                            })
                        }}>Learn more</button>
                    </div>

            

            <Footer />

        </div>
    );
};

function Card(props){

    let 재고 = useContext(재고context);
    let history = useNavigate();

    return(
        <div className="col-md-4" onClick={()=>{ history.push('/detail/' + props.shoes.id ) }}>
            <img src={ 'https://codingapple1.github.io/shop/shoes'+ (props.i + 1) + '.jpg' } width="100%" />
            <h4>{ props.shoes.title }</h4>
            <p>{ props.shoes.content } { props.shoes.price }</p>
            재고 : {재고[props.i]} 개
        </div>
    )
}

export default App;