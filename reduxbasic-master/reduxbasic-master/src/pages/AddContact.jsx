import React,{useState} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
// import { Link, NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { insert } from '../features/action';

function AddContact() {
    const dispatch = useDispatch()
    const [formData, setformData] = useState({
        id:'',
        name:'',
        email:'',
        subject:'',
        msg:''
    })

    const onchange = (e) => {
        setformData({...formData,id:new Date().getMilliseconds().toString(),[e.target.name]:e.target.value})
    }
    const validate = () => {
        let res = true;
        if (formData.name == "" || formData.name == null) {
            res = false;
            toast.error('Name required')
        }
        if (formData.email == "" || formData.email == null) {
            res = false;
            toast.error('Email required')
    }
        if (formData.subject == "" || formData.subject == null) {
            res = false;
            toast.error('Subject required')

        }
        if (formData.msg == "" || formData.msg == null) {
            res = false;
            toast.error('Message required')
        }
        return res
    }
    const onsubmit = async(e) => {
        e.preventDefault()
        if (validate()) {
            dispatch(insert(`http://localhost:3000/contact`,formData))
            setformData({...formData,name:'',email:'',subject:'',msg:''})
            toast.success('Submitted')
        }
    }
    return (
        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">
                <div className="row gy-4 d-flex justify-content-center">
                    <div className="col-lg-12 text-center"><h1>Add Contact</h1></div>
                    <div className="col-lg-6 py-5 px-4 rounded ">
                        <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                            <div className="row">
                                <div className="col-md-12 form-group">
                                    <input type="text" name="name" value={formData.name} onChange={onchange} className="form-control" id="name" placeholder="Your Name" required />
                                </div>
                                <div className="col-md-12 form-group mt-3">
                                    <input type="email" className="form-control" value={formData.email} onChange={onchange} name="email" id="email" placeholder="Your Email" required />
                                </div>
                                <div className="col-md-12 form-group mt-3">
                                    <input type="text" className="form-control" value={formData.subject} onChange={onchange} name="subject" id="email" placeholder="Subject" required />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input type="text" className="form-control" value={formData.msg} onChange={onchange} name="msg" id="email" placeholder="Message" required />
                            </div>
                            <div className="text-center py-5"><button className='btn btn-primary' type="submit" onClick={onsubmit}>Submit</button></div>
                        </form>
                    </div>{/* End Contact Form */}
                </div>
            </div>
        </section>
    )
}

export default AddContact