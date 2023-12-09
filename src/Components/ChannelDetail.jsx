
import {React , useEffect , useState}  from "react";
import { useParams } from "react-router-dom";
import{Box} from '@mui/material'
import {Videos , ChannelCard} from'./index'
import fetchFromAPI from'../utils/fetchFromAPI'
function ChannelDetail(){
    const {id} = useParams();
    const [channelDetail , setChannelDetail]=useState(null);
    const [videos , setVideos]=useState([]);

    // console.log(videos);
    // console.log("channelDetail");
    // console.log(channelDetail);

    useEffect(()=>{
        fetchFromAPI(`channels?part=snippet&id=${id}`)
        .then((data)=>setChannelDetail(data?.items[0]))
        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
        .then((data)=>setVideos(data?.items))
         
    },[id])


    return (
        <Box minHeight = '95vh'>
            <Box>
                <div
                    style={{
                        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(224,64,89,0.38636363636363635) 35%, rgba(0,212,255,1) 100%)'
                        ,zIndex:10,
                        height:'300px'
                    }}
                />
                     <ChannelCard channelDetail = {channelDetail} marginTop={'-93px'}/>   
            </Box>
            <Box display='flex' p ="2">
                <Box
                    sx={{
                        mr:{sm:'100px'}
                    }}
                 />

                 
                    <Videos videos={videos}/>
            </Box>
        </Box>
    );
}

export default ChannelDetail;


