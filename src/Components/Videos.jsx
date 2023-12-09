import React from "react";
import {Stack , Box} from '@mui/material' ; 
import {VideoCard , ChannelCard} from './index' ;

function Videos({videos , direction}){
    return (
        <Stack
            direction={direction || "row" }flexWrap="wrap"
            justifyContent="center" 
            gap={5}
        >
            {
                videos.map((video , idx)=> (
                    <Box  key ={idx}>
                        {
                            video.id.videoId && <VideoCard video={video}/> 
                        }
                        {
                            video.id.channelId && 
                            <ChannelCard channelDetail={video}/> 
                        }
                    </Box>
                ))
            }
        </Stack>
    )
}
export default Videos;