import React, {Component} from 'react';
import './Services.css';
import Background from './services-bg.jpg';
import Strategy from './Recruitment-Strategy.jpg';
import Training from './training-bg.png';
import Outsourcing from './outsourcing-bg.png';
import Consulting from './professional-services-bg.png';
import StaffAug from './augmentation-bg.png';
import Resume from './resume.png';
import Cover from './cover-letter.png';
import Design from './design.jpg';
import Interview from './interview.svg';
//import ApplyForm from './Apply';



class Services extends Component {

    render() {
        return (
            <div>
                
                <div className='begin' style={{  
                    backgroundImage: `url(${Background})`,
                    opacity:'0.75',
                    backgroundBlendMode: 'luminosity',
                    zIndex: '-1',
                    blurRadius:'5',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height:'500px', width:'100%'}} >
                    <br/>
                    <div className='parag'>
                        Our Services
                    </div>
                    <br/> <br/>
                    <div>
                        <input type='button'  value="Contact Us!" className='contactBtn'/>
                    </div>
                </div>
                <br/>

                <div className='title'> We Provide These Services For You! </div>
                <br/>

                <div style={{color:'#003366', paddingLeft:'9px', fontSize:'20px', fontWeight: 'bold'}}>
                    "icon" Companies Services:
                </div>
                <br/>
                <div>
                    <div className='serviceTitle'> Recruitment Services </div>
                    <br/>
                    <div className='serviceDescription'>
                        We offer fast, responsive and efficient,through recuiting services <br/>
                        that address the needs of all types of organizations across industries.
                    </div>
                    <br/>
                    <div className='serviceImg'> 
                        <img src={Strategy} alt="Services-Strategy" /> 
                    </div>
                    <br/> <br/> 
                    <div className='count'>
                        "icon" <br/> 232 Happy Clients            
                    </div> <br/>
                    <div className='count'>
                        "icon" <br/>  15 Hard Worker            
                    </div>
                    <br/><br/><br/><br/><br/><br/>
                    <div style={{paddingLeft: '65%'}}>
                    <input type='button' value="Apply!" className='applyBtn'/>
                    </div>
                </div>
                <br/><br/><br/><br/>
                <div>
                    <div className='serviceTitle'> Training Services </div>
                    <br/>
                    <div className='serviceDescription'>
                        Our training plans are built on the basis of thorough research to help our clients <br/>
                        define andd improve the expertise needed to address existing business requirements, and <br/>
                        the capabilities needed to follow future strategic directionds.
                        <br/> <br/>
                        Our experts provide training programs in the following domains: <br/>
                        <span style={{color:'#ffcc00', fontWeight:'bolder'}}>o </span>
                        Project Management. <br/>
                        <span style={{color:'#ffcc00', fontWeight:'bolder'}}>o </span>
                        Human Resources. <br/>
                        <span style={{color:'#ffcc00', fontWeight:'bolder'}}>o </span>
                        Team Building. <br/>
                    </div>
                    <br/>
                    <div className='serviceImg'> 
                        <img style={{height:'360px', width:'570px'}} src={Training} alt="Training-service" /> 
                    </div>
                    <br/> <br/> 
                    <div className='count'>
                        "icon" <br/> 232 Happy Clients            
                    </div> <br/>
                    <div className='count'>
                        "icon" <br/>  15 Hard Worker            
                    </div>
                    <br/><br/><br/><br/><br/><br/>
                    <div style={{paddingLeft: '65%'}}>
                    <input type='button'  value="Apply!" className='applyBtn'/>
                    </div>
                </div>
                <br/><br/><br/><br/>
                <div>
                    <div className='serviceTitle'> Outsourcing Services </div>
                    <br/>
                    <div className='serviceDescription'>
                        Using outsourcing methods, our experts will help your company evaluate and classify <br/>
                        the positions and activities to be outsourced in order to sustain your business progress.
                        <br/> <br/>
                        Our experts provide outsourcing in the following domains: <br/>
                        <span style={{color:'#ffcc00', fontWeight:'bolder'}}>o </span>
                        Information Technology. <br/>
                        <span style={{color:'#ffcc00', fontWeight:'bolder'}}>o </span>
                        Human Resources. <br/>
                    </div>
                    <br/>
                    <div className='serviceImg'> 
                        <img style={{height:'360px', width:'570px'}} src={Outsourcing} alt="Outsourcing" /> 
                    </div>
                    <br/> <br/>
                    <div className='count'>
                        "icon" <br/> 232 Happy Clients            
                    </div> <br/>
                    <div className='count'>
                        "icon" <br/>  15 Hard Worker            
                    </div>
                    <br/><br/><br/><br/><br/><br/>
                    <div style={{paddingLeft: '65%'}}>
                    <input type='button'  value="Apply!" className='applyBtn'/>
                    </div>
                </div>
                <br/><br/><br/> <br/>
                <div>
                    <div className='serviceTitle'> Consulting Services </div>
                    <br/>
                    <div className='serviceDescription'>
                        Our consulting services are tailored to serve your individual situation <br/>
                        and needs in order to fulfill the strategic objectives of your company.
                        <br/> <br/>
                        Consulting services main domains: <br/>
                        <span style={{color:'#ffcc00', fontWeight:'bolder'}}>o </span>
                        Business / IT Transformation. <br/>
                        <span style={{color:'#ffcc00', fontWeight:'bolder'}}>o </span>
                        Human Resources. <br/>
                        <span style={{color:'#ffcc00', fontWeight:'bolder'}}>o </span>
                        Project Management. <br/>
                    </div>
                    <br/>
                    <div className='serviceImg'> 
                        <img style={{height:'360px'}} src={Consulting} alt="consulting-service" /> 
                    </div>
                    <br/> <br/> 
                    <div className='count'>
                        "icon" <br/> 232 Happy Clients            
                    </div> <br/>
                    <div className='count'>
                        "icon" <br/>  15 Hard Worker            
                    </div>
                    <br/><br/><br/><br/><br/><br/>
                    <div style={{paddingLeft: '65%'}}>
                    <input type='button'  value="Apply!" className='applyBtn'/>
                    </div>
                </div>
                <br/><br/><br/><br/>
                <div>
                    <div className='serviceTitle'> Staff Augmentation </div>
                    <br/>
                    <div className='serviceDescription'>
                        Our Extended Team Services are a proven, reliable and cost-effective way for our clients <br/>
                        to increase the size and productivity of their internal development teams in minimal time.
                    </div>
                    <br/>
                    <div className='serviceImg'> 
                        <img style={{height:'360px'}} src={StaffAug} alt="Staff-Augmentation" /> 
                    </div>
                    <br/> <br/>
                    <div className='count'>
                        "icon" <br/> 232 Happy Clients            
                    </div> <br/>
                    <div className='count'>
                        "icon" <br/>  15 Hard Worker            
                    </div>
                    <br/><br/><br/><br/><br/><br/>
                    <div style={{paddingLeft: '65%'}}>
                    <input type='button'  value="Apply!" className='applyBtn'/>
                    </div>
                </div>
                <br/> <br/> <br/> <br/>

                <div style={{backgroundColor:'#800000', padding:'30px'}}>

                </div>
                <br/> <br/> 
                
                <div>
                <div style={{color:'#003366', paddingLeft:'9px', fontSize:'20px', fontWeight: 'bold'}}>
                    "icon" Candidates Services:
                </div>
                <br/>
                <div>
                    <div className='serviceTitle'> CV Writing </div>
                    <br/>
                    <div className='serviceDescription'>
                        Help you write an effective CV that will show your true skills and accomplishments.
                    </div>
                    <br/>
                    <div className='serviceImg'> 
                        <img style={{height:'360px'}} src={Resume} alt="CV" /> 
                    </div>
                    <br/> <br/> 
                    <div className='count'>
                        "icon" <br/> 232 Happy Clients            
                    </div> <br/>
                    <div className='count'>
                        "icon" <br/>  512 Projects            
                    </div>
                    <br/><br/><br/><br/><br/><br/>
                    <div style={{paddingLeft: '65%'}}>
                    <input type='button'  value="Apply!" className='applyBtn'/>
                    </div>
                </div>
                <br/><br/><br/><br/>
                <div>
                    <div className='serviceTitle'> Cover Letter Writing </div>
                    <br/>
                    <div className='serviceDescription'>
                        You ought to show employers how you can bring value to your company <br/>
                        before reading your CV.
                    </div>
                    <br/>
                    <div className='serviceImg'> 
                        <img style={{height:'380px', width:'470px'}} src={Cover} alt="Cover-Writing" /> 
                    </div>
                    <br/> <br/> 
                    <div className='count'>
                        "icon" <br/> 232 Happy Clients            
                    </div> <br/>
                    <div className='count'>
                        "icon" <br/>  512 Projects            
                    </div>
                    <br/><br/><br/><br/><br/><br/>
                    <div style={{paddingLeft: '65%'}}>
                    <input type='button'  value="Apply!" className='applyBtn'/>
                    </div>
                </div>
                <br/><br/><br/><br/>
                <div>
                    <div className='serviceTitle'> CV Designing </div>
                    <br/>
                    <div className='serviceDescription'>
                        Help you designing a professional CV.
                    </div>
                    <br/>
                    <div className='serviceImg'> 
                        <img style={{height:'360px', width:'570px'}} src={Design} alt="CV-Design" /> 
                    </div>
                    <br/> <br/>
                    <div className='count'>
                        "icon" <br/> 232 Happy Clients            
                    </div> <br/>
                    <div className='count'>
                        "icon" <br/>  512 Projects            
                    </div>
                    <br/><br/><br/><br/><br/><br/>
                    <div style={{paddingLeft: '65%'}}>
                    <input type='button'  value="Apply!" className='applyBtn'/>
                    </div>
                </div>
                <br/><br/><br/> <br/>
                <div>
                    <div className='serviceTitle'> How to prepare for an online interview </div>
                    <br/>
                    <div className='serviceDescription'>
                    </div>
                    <br/>
                    <div className='serviceImg'> 
                        <img style={{height:'360px', width:'570px'}} src={Interview} alt="Prepare-Interview" /> 
                    </div>
                    <br/> <br/> 
                    <div className='count'>
                        "icon" <br/> 232 Happy Clients            
                    </div> <br/>
                    <div className='count'>
                        "icon" <br/>  512 Projects            
                    </div>
                    <br/><br/><br/><br/><br/><br/>
                    <div style={{paddingLeft: '65%'}}>
                    <input type='button'  value="Apply!" className='applyBtn'/>
                    </div>
                </div>
                <br/><br/><br/><br/>
                </div>
                <br/><br/><br/>
                <div style={{paddingLeft: '40%'}}>
                    <input type='button'  value="Get in Touch!" className='touchBtn'/>
                </div>
                <br/><br/><br/>
            </div>
        )
    }
}

export default Services;