import 'bootstrap/dist/css/bootstrap.css';
import { Link,Input,Button } from "@nextui-org/react";

export default function AppFooter () {
   

    return (
        <footer className='container'>

            <div className='row'>
                <div className='col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3'>
                    <h4>Get in Touch</h4>
                    <p>Phone:</p>
                    <p>Email:</p>
                    <div className='my-3'>
                        <Input className='mb-2'
                            label="Newsletter:"
                            placeholder="Email"
                            color="default" />
                        <Button color='success'>Subscribe</Button>
                    </div>
                </div>
                <div className='col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3'>
                    <h4>Get in Touch</h4>
                    <p>Phone:</p>
                    <p>Email:</p>
                    <div className='my-3'>
                        <Input className='mb-2'                    
                            label="Newsletter:"
                            placeholder="Email"
                            color="default" />
                        <Button color='success'>Subscribe</Button>
                    </div>
                </div>
                <div className='col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3'>
                    <h4>Get in Touch</h4>
                    <p>Phone:</p>
                    <p>Email:</p>
                    <div className='my-3'>
                        <Input className='mb-2'
                            label="Newsletter:"
                            placeholder="Email"
                            color="default" />
                        <Button color='success'>Subscribe</Button>
                    </div>
                </div>
                <div className='col-12 col-sm-12 col-md-12 col-lg-3 col-xl-3 col-xxl-3'>
                    <h4>Get in Touch</h4>
                    <p>Phone:</p>
                    <p>Email:</p>
                    <div className='my-3'>
                        <Input className='mb-2'
                            label="Newsletter:"
                            placeholder="Email"
                            color="default" />
                        <Button color='success'>Subscribe</Button>
                    </div>
                </div>
            </div>

            
        </footer>
    );
}







