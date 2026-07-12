import { TwitterTimelineEmbed } from 'react-twitter-embed';

const Twitterfeed = () => {
    return (  
        <twit className="twitfeed">
            <h1>SXSW Twitter Feed</h1>
            <div className="feed">
             
             <TwitterTimelineEmbed
                  sourceType="list"
                  id="1492017716118622208"
                 options={{height: 800, width: 220 }}
            />
           </div>
        </twit>
    );
}
 
export default Twitterfeed;



