 import { TwitterTimelineEmbed } from 'react-twitter-embed';

const Feed = () => {
    return (  
        <div>
            
        <twit className="twitfeed">
            <h1>SXSW Twitter Feed</h1>
            <div className="feed">
             
             <TwitterTimelineEmbed
                  sourceType="list"
                  id="1492017716118622208"
                 options={{height: 600, width: 820 }}
            />
                 </div>
        </twit>
        </div>
    );
}
 

    export default Feed