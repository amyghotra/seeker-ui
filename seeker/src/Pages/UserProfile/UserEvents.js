import React from 'react'
import './userevents.css'
import pottery from '../../images/pottery.jpeg'
import ai from  '../../images/ai.jpeg'
import js from  '../../images/js.jpeg'
import sculpt from  '../../images/sculpture.jpeg'

import 'semantic-ui-css/semantic.min.css'
import { Button, Card, Image } from 'semantic-ui-react'

import Fade from 'react-reveal/Fade';

class UserEvents extends React.Component {
    constructor() {
        super();
        this.state={
            event_name:"",
            event_location:"",
            event_date:""
        }

        this.onCancel = this.onCancel.bind(this)
    }

    onCancel() {
        alert("event has been cancelled")
    }

    render() {
        return (
            <>
            <Fade bottom>
                <div id="user_events_container">
                    <h3 id="events_section_title">Your Events</h3>
                    <Fade>
                    <Card.Group style={{ height:"30vh", marginTop:"15px", marginLeft:"20px", width:"62vw",  marginRight:"5px", display:"flex", flexFlow:"row", overflow:"scroll", flexWrap:"wrap"}} className="events_container_items">
                        <Fade bottom cascade>
                            <Card style={{
                                backgroundColor:"transparent",
                                flexShrink:"0",
                                borderRadius:"7px",
                                boxShadow:"none",
                                height:"max-content",
                                width:"430px",
                                display:"flex",
                                flexFlow:"row"
                            }}>
                                <Card.Content
                                    style={{
                                    display:"flex",
                                    flexFlow:"row"
                                    }}
                                >
                                    <Image
                                    floated='right'
                                    size='mini'
                                    src={pottery}
                                    style={{
                                        height:"100px",
                                        width:"100px",
                                        borderRadius:"7px",
                                        objectFit:"cover"
                                    }}
                                    />
                                    <div
                                        style={{
                                            display:"flex",
                                            flexFlow:"column"
                                        }}
                                    >
                                    <Card.Header style={{textAlign:"left", marginLeft:"5px", color:"black", fontSize:"20px", fontWeight:"600",fontFamily:"'Raleway', sans-serif"}}>Pottery Class</Card.Header>
                                    <Card.Description style={{fontFamily:"'Raleway', sans-serif",textAlign:"left", marginLeft:"5px", color:"black"}}>
                                        Virtual
                                    </Card.Description>
                                    <Card.Description style={{fontFamily:"'Raleway', sans-serif",textAlign:"left", marginLeft:"5px", color:"black"}}>
                                        9:45am
                                    </Card.Description>
                                    </div>
                                </Card.Content>
                                <Card.Content extra>
                                    <div>
                                        <Button 
                                            style={{
                                                height:"25px", 
                                                width:"60px", 
                                                backgroundColor:"transparent",
                                                marginRight:"0.5px", 
                                                borderRadius:"4px",
                                                boxShadow:"none",
                                                textAlign:"center",
                                                display:"inline-block",
                                                margin: "0 auto",
                                                marginTop:"77px",
                                                padding: "0",
                                                fontSize:"13px",
                                                "fontFamily": "'Raleway', sans-serif"
                                            }}  basic color='black' value="cancel" onClick={this.onCancel}>
                                                Cancel
                                        </Button>
                                    </div>
                                </Card.Content>
                            </Card>

                        </Fade> 
                                                    
                    </Card.Group>
                    </Fade>
                </div>
                </Fade>
            </>
        )
    }
}

export default UserEvents