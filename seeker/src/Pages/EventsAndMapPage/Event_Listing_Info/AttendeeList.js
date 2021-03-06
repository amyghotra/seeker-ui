import React from 'react'
import './AttendeeList.css'
import '../../UserProfile/matchrequests.css'
import person1 from '../../../images/person1.jpeg'
import person2 from '../../../images/person2.jpeg'
import person3 from '../../../images/person3.jpeg'
import person4 from '../../../images/person4.jpeg'
import person5 from '../../../images/person5.jpeg'
import person6 from '../../../images/person6.jpeg'
import person7 from '../../../images/person7.jpeg'
import person8 from '../../../images/person8.jpeg'



import 'semantic-ui-css/semantic.min.css'
import { Button, Card, Image } from 'semantic-ui-react'

import Fade from 'react-reveal/Fade';

export default function AttendeeList(props) { 
    function sendRequest(e){
        alert("sent")
        e.target.style.backgroundColor = "#bee3db"
    }

    return(
        <>
            <Fade bottom cascade>
                <div id="attendee_list_container" style={{height:"64vh", overflow:"hidden"}}>
                    <button id="back_button" onClick={props.handleClick}>back</button>
                    <div style={{width:"81vw", height:"64vh", paddingLeft:"70px", marginTop:"10px", marginRight:"5px", display:"flex", flexFlow:"row", overflow:"scroll", alignContent:"flex-start", flexWrap:"wrap"}} className="match_request_items">

                        <div style={{
                                backgroundColor:"white",
                                // backgroundColor:"coral",
                                border:"1px solid black",
                                marginTop:"10px",
                                marginRight:"10px",
                                flexShrink:"0",
                                borderRadius:"7px",
                                boxShadow:"none",
                                height:"max-content",
                                width:"250px",
                                display:"flex",
                                padding:"10px",
                                flexFlow:"row"
                            }}>
                                <div
                                    style={{
                                    display:"flex",
                                    flexFlow:"row",
                                    // backgroundColor:"teal"
                                    }}
                                >
                                    <img
                                    floated='right'
                                    size='mini'
                                    src={person1}
                                    style={{
                                        height:"75px",
                                        width:"75px",
                                        borderRadius:"7px",
                                        objectFit:"cover"
                                    }}
                                    />
                                    <div style={{display:"flex",flexFlow:"column"}}>
                                        <div
                                            style={{
                                                display:"flex",
                                                flexFlow:"column"
                                            }}
                                        >
                                            <div style={{textAlign:"left", marginLeft:"5px", color:"black", width:"150px", height:"max-content", fontSize:"16px", fontWeight:"600",fontFamily:"'Raleway', sans-serif"}}>Steven Parks</div>
                                        </div>
                                        <button id="send_req"
                                            style={{
                                                height:"30px", 
                                                width:"55px", 
                                                marginTop:"30px",
                                                marginLeft:"90px",
                                                border:"1px solid black",
                                                borderRadius:"4px",
                                                textAlign:"center",
                                                display:"inline-block",
                                                padding: "0",
                                                backgroundColor:"transparent",
                                                fontSize:"12px"
                                            }} onClick={sendRequest}>
                                                Connect
                                        </button>
                                    </div>
                                </div>
                        </div>

                        <div style={{
                                backgroundColor:"white",
                                // backgroundColor:"coral",
                                border:"1px solid black",
                                marginTop:"10px",
                                marginRight:"10px",
                                flexShrink:"0",
                                borderRadius:"7px",
                                boxShadow:"none",
                                height:"max-content",
                                width:"250px",
                                display:"flex",
                                padding:"10px",
                                flexFlow:"row"
                            }}>
                                <div
                                    style={{
                                    display:"flex",
                                    flexFlow:"row",
                                    // backgroundColor:"teal"
                                    }}
                                >
                                    <img
                                    floated='right'
                                    size='mini'
                                    src={person2}
                                    style={{
                                        height:"75px",
                                        width:"75px",
                                        borderRadius:"7px",
                                        objectFit:"cover"
                                    }}
                                    />
                                    <div style={{display:"flex",flexFlow:"column"}}>
                                        <div
                                            style={{
                                                display:"flex",
                                                flexFlow:"column"
                                            }}
                                        >
                                            <div style={{textAlign:"left", marginLeft:"5px", color:"black", width:"150px", height:"max-content", fontSize:"16px", fontWeight:"600",fontFamily:"'Raleway', sans-serif"}}>Rebecca Jordan</div>
                                        </div>
                                        <button id="send_req"
                                            style={{
                                                height:"30px", 
                                                width:"55px", 
                                                marginTop:"30px",
                                                marginLeft:"90px",
                                                border:"1px solid black",
                                                borderRadius:"4px",
                                                textAlign:"center",
                                                display:"inline-block",
                                                padding: "0",
                                                backgroundColor:"transparent",
                                                fontSize:"12px"
                                            }} onClick={sendRequest}>
                                                Connect
                                        </button>
                                    </div>
                                </div>
                        </div>

                        <div style={{
                                backgroundColor:"white",
                                // backgroundColor:"coral",
                                border:"1px solid black",
                                marginTop:"10px",
                                marginRight:"10px",
                                flexShrink:"0",
                                borderRadius:"7px",
                                boxShadow:"none",
                                height:"max-content",
                                width:"250px",
                                display:"flex",
                                padding:"10px",
                                flexFlow:"row"
                            }}>
                                <div
                                    style={{
                                    display:"flex",
                                    flexFlow:"row",
                                    // backgroundColor:"teal"
                                    }}
                                >
                                    <img
                                    floated='right'
                                    size='mini'
                                    src={person3}
                                    style={{
                                        height:"75px",
                                        width:"75px",
                                        borderRadius:"7px",
                                        objectFit:"cover"
                                    }}
                                    />
                                    <div style={{display:"flex",flexFlow:"column"}}>
                                        <div
                                            style={{
                                                display:"flex",
                                                flexFlow:"column"
                                            }}
                                        >
                                            <div style={{textAlign:"left", marginLeft:"5px", color:"black", width:"150px", height:"max-content", fontSize:"16px", fontWeight:"600",fontFamily:"'Raleway', sans-serif"}}>Michael K.</div>
                                        </div>
                                        <button id="send_req"
                                            style={{
                                                height:"30px", 
                                                width:"55px", 
                                                marginTop:"30px",
                                                marginLeft:"90px",
                                                border:"1px solid black",
                                                borderRadius:"4px",
                                                textAlign:"center",
                                                display:"inline-block",
                                                padding: "0",
                                                backgroundColor:"transparent",
                                                fontSize:"12px"
                                            }} onClick={sendRequest}>
                                                Connect
                                        </button>
                                    </div>
                                </div>
                        </div>

                        <div style={{
                                backgroundColor:"white",
                                // backgroundColor:"coral",
                                border:"1px solid black",
                                marginTop:"10px",
                                marginRight:"10px",
                                flexShrink:"0",
                                borderRadius:"7px",
                                boxShadow:"none",
                                height:"max-content",
                                width:"250px",
                                display:"flex",
                                padding:"10px",
                                flexFlow:"row"
                            }}>
                                <div
                                    style={{
                                    display:"flex",
                                    flexFlow:"row",
                                    // backgroundColor:"teal"
                                    }}
                                >
                                    <img
                                    floated='right'
                                    size='mini'
                                    src={person4}
                                    style={{
                                        height:"75px",
                                        width:"75px",
                                        borderRadius:"7px",
                                        objectFit:"cover"
                                    }}
                                    />
                                    <div style={{display:"flex",flexFlow:"column"}}>
                                        <div
                                            style={{
                                                display:"flex",
                                                flexFlow:"column"
                                            }}
                                        >
                                            <div style={{textAlign:"left", marginLeft:"5px", color:"black", width:"150px", height:"max-content", fontSize:"16px", fontWeight:"600",fontFamily:"'Raleway', sans-serif"}}>Josh Nicks</div>
                                        </div>
                                        <button id="send_req"
                                            style={{
                                                height:"30px", 
                                                width:"55px", 
                                                marginTop:"30px",
                                                marginLeft:"90px",
                                                border:"1px solid black",
                                                borderRadius:"4px",
                                                textAlign:"center",
                                                display:"inline-block",
                                                padding: "0",
                                                backgroundColor:"transparent",
                                                fontSize:"12px"
                                            }} onClick={sendRequest}>
                                                Connect
                                        </button>
                                    </div>
                                </div>
                        </div>

                        <div style={{
                                backgroundColor:"white",
                                // backgroundColor:"coral",
                                border:"1px solid black",
                                marginTop:"10px",
                                marginRight:"10px",
                                flexShrink:"0",
                                borderRadius:"7px",
                                boxShadow:"none",
                                height:"max-content",
                                width:"250px",
                                display:"flex",
                                padding:"10px",
                                flexFlow:"row"
                            }}>
                                <div
                                    style={{
                                    display:"flex",
                                    flexFlow:"row",
                                    // backgroundColor:"teal"
                                    }}
                                >
                                    <img
                                    floated='right'
                                    size='mini'
                                    src={person5}
                                    style={{
                                        height:"75px",
                                        width:"75px",
                                        borderRadius:"7px",
                                        objectFit:"cover"
                                    }}
                                    />
                                    <div style={{display:"flex",flexFlow:"column"}}>
                                        <div
                                            style={{
                                                display:"flex",
                                                flexFlow:"column"
                                            }}
                                        >
                                            <div style={{textAlign:"left", marginLeft:"5px", color:"black", width:"150px", height:"max-content", fontSize:"16px", fontWeight:"600",fontFamily:"'Raleway', sans-serif"}}>Kimberly Richards</div>
                                        </div>
                                        <button id="send_req"
                                            style={{
                                                height:"30px", 
                                                width:"55px", 
                                                marginTop:"30px",
                                                marginLeft:"90px",
                                                border:"1px solid black",
                                                borderRadius:"4px",
                                                textAlign:"center",
                                                display:"inline-block",
                                                padding: "0",
                                                backgroundColor:"transparent",
                                                fontSize:"12px"
                                            }} onClick={sendRequest}>
                                                Connect
                                        </button>
                                    </div>
                                </div>
                        </div>
                        
                        <div style={{
                                backgroundColor:"white",
                                // backgroundColor:"coral",
                                border:"1px solid black",
                                marginTop:"10px",
                                marginRight:"10px",
                                flexShrink:"0",
                                borderRadius:"7px",
                                boxShadow:"none",
                                height:"max-content",
                                width:"250px",
                                display:"flex",
                                padding:"10px",
                                flexFlow:"row"
                            }}>
                                <div
                                    style={{
                                    display:"flex",
                                    flexFlow:"row",
                                    // backgroundColor:"teal"
                                    }}
                                >
                                    <img
                                    floated='right'
                                    size='mini'
                                    src={person6}
                                    style={{
                                        height:"75px",
                                        width:"75px",
                                        borderRadius:"7px",
                                        objectFit:"cover"
                                    }}
                                    />
                                    <div style={{display:"flex",flexFlow:"column"}}>
                                        <div
                                            style={{
                                                display:"flex",
                                                flexFlow:"column"
                                            }}
                                        >
                                            <div style={{textAlign:"left", marginLeft:"5px", color:"black", width:"150px", height:"max-content", fontSize:"16px", fontWeight:"600",fontFamily:"'Raleway', sans-serif"}}>Edward L.</div>
                                        </div>
                                        <button id="send_req"
                                            style={{
                                                height:"30px", 
                                                width:"55px", 
                                                marginTop:"30px",
                                                marginLeft:"90px",
                                                border:"1px solid black",
                                                borderRadius:"4px",
                                                textAlign:"center",
                                                display:"inline-block",
                                                padding: "0",
                                                backgroundColor:"transparent",
                                                fontSize:"12px"
                                            }} onClick={sendRequest}>
                                                Connect
                                        </button>
                                    </div>
                                </div>
                        </div>


                    </div>
                </div>
            </Fade>    
        </>
    )
}