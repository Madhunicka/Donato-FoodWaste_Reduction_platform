import React, { useState,useEffect } from 'react';
import './App.css';
import image from './Images/colorlogo.png';
import Header from './Header';
import MenuBar from './MenuBar';
import Posting from './Posting';
import PostBox from './PostBox';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from './slices/slices';
import axios from 'axios';
import PostBox1 from './PostBox1';
import LogOut from './LogOut';
import Rectangle from './Rectangle';


function Myposts()
{
    const user = useSelector(selectUser);
    const token = user.token;
    const [posts, setPosts] = useState([]);
    const [isUpdate, setIsUpdate] = useState(false);
  
  
    useEffect(() => {
      if (!token) {
        window.location.href = '/login';
      }
  
        axios.get(`http://localhost:3001/api/post/all`, {
          headers: {
            'x-access-token': token
          }
        }).then((response) => {
          let data = response.data;
          data = data.filter((post) => post.user === user._id);
          console.log(data)
          setPosts(data)
         
        })
      
    }, []);
   
 
        return(
          
            <div className='Appx' >
                 {/* <Rectangle /> */}
             
             <div className='Recthead1' >
              
            <img src={image} className='imgHead' alt='imgx'></img>
           
                <LogOut/>
      
            </div>
          <PostBox1 posts={posts} style={{aligntop: '40px'}}/>
       
              </div>
        );

}


export default Myposts;