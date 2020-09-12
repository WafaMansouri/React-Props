import React from 'react'
import PropTypes from 'prop-types'
const Profile=(props)=>{
    const {fullName, bio, profession}=props.profile;
    return(<div onLoad={props.handleName(props.profile)} 
    style={{textAlign:'center',
    backgroundColor:'#ffe6e6', height:'100vh', margin:0, fontSize:'1.5em', color:'#4d004d'}}>

    <h1 style={{paddingTop:50, marginTop:0}}>{fullName}</h1>
    <p>{bio}</p>
    <h3>{profession}</h3>
    {props.children}
    </div>)
}
Profile.defaultProps = {
    profile:{fullName:"Not Given", bio:"", profession:"Undefined"},
    handleName:()=>{alert("Hello")}
};
Profile.propTypes={profile: PropTypes.exact({
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,}),
    handleName: PropTypes.func,
}
export default Profile;