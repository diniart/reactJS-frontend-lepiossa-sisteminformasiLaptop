import { Carousel } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

 
const CaruselHome = () => {

    
        return (
            <div style={{ height:"600px" }}>


            <Carousel>
            <Carousel.Item>
            <img style={{ height:"600px", width:"100%", padding:"100px", }}
            // className="d-block w-100"
            src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2020/06/25/636287272.jpg"
            alt="First slide"
            />
            <br/>
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img style={{ height:"600px", width:"100%", padding:"100px",}}
            // className="d-block w-100"
            src="https://ae01.alicdn.com/kf/H07eff788a5f74718995323eb6f423f76u/2019-XIDU-Tour-Pro-Laptop-Touchscreen-Notebook-8GB-DDR3-Tablet-2K-IPS-Layar-Laptop-PC-Backlit.jpg"
            alt="Second slide"
            />
            <br/>
            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img style={{ height:"600px", width:"100%", padding:"100px",}}
            className="d-block w-100"
            src="https://images.tokopedia.net/img/KRMmCm/2022/1/18/c3da9c56-635d-4039-a867-23323ec7a6a0.jpg"
            alt="Third slide"
            />
            <br/>
            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <img style={{ height:"600px", width:"100%", padding:"100px",}}
            className="d-block w-100"
            src="https://asset-a.grid.id/crop/96x0:878x476/700x0/photo/2019/05/02/113869916.jpg"
            alt="Third slide"
            />
            <br/>
            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <img style={{ height:"600px", width:"100%", padding:"100px",}}
            className="d-block w-100"
            src="https://ruanglaptop.com/wp-content/uploads/2020/02/Laptop-5-jutaan.jpg"
            alt="Third slide"
            />
            <br/>
            <Carousel.Caption>
            <h3>Fourth slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
            <img style={{ height:"600px", width:"100%", padding:"100px",}}
            className="d-block w-100"
            src="https://akcdn.detik.net.id/visual/2020/01/07/0550eee4-f2d8-43db-a784-2e63256cca2c_169.jpeg?w=650"
            alt="Third slide"
            />
            <br/>
            <Carousel.Caption>
            <h3>five slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
    
            </div>
    )

}
export default  CaruselHome