
import BlogList from './BlogList';
import useFetch from './useFetch';
import Bag from './images/bag.jpg'
import CatBag from './images/catbag.jpg'


//card elements
import { CContainer ,CCard, CCardBody, CCardGroup, CCardHeader, CCardImage, CCardImageOverlay, CCardLink, CCardSubtitle, CCardText, CCardTitle,  CCardFooter } from '@coreui/react'

import Sxswlogo from './images/sxsw_logo.png'


const Home = () => {

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs') 
    //     [
    //     { title: 'My new website', body: ' some many many words', author: 'mario', id: 1},
    //     { title: 'My second website', body: ' so few words', author: 'luigi', id: 2},
    //     { title: 'A retrospective of websites', body: ' exactly this  many words', author: 'mario', id: 3}
    // ]);

//const [name, setName] = useState('mario')
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs) 
    // }


    return ( 
<CContainer fluid>
<div>
    <h1>Welcome to The Unofficial SXSW Review! </h1>
    <p>Here you'll find reviews of all things SXSW </p>  
    <br />

    <img src={Sxswlogo} width="500" height="500" with alt='logo'/>

    {/* </div>

        <div className="home">
            {error && <div>{error} </div>}
            {isPending  && <div>Loading...this thing</div>}
            
        
        <CCard style={{ width: '18rem' }}>
  <CCardBody>
    <CCardTitle>  {blogs && <BlogList blogs={blogs}  title="All of The Events" />} </CCardTitle>
   
  

  </CCardBody>
</CCard>*/}
<br />
<div className="container">

<h1>
Do(n't) 512 and SXSW RSVPs

</h1>
<br />
<h3>DO 512 is a great source for shows, festivals, and fun around the ATX most of the year, but when SXSW comes around DO 512 is full of DON'Ts.</h3>
<br />
<p>
While there are always a handful of big shows that feature some quality acts, as a rule don't expect to find the best of SXSW through a free DO512 RSVP. Finding the best is hard enough and venues that advertise this way on DO512 have a bottomless RSVP list because they just want bodies in the venue. Don't expect to find special guests. Don't expect to find great venues. Don't expect to find free drinks, free food or any sort of swag that makes it past the first trash can you find. These are the parties for the unprepared. 19 out of 20 times they won't even have an RSVP list at the door. You can find good music at some of the parties you find on DO512, but 9 out of 10 times you won't find much in the way of freebies. As with every rule there are exceptions, but we highly recommend you expand your RSVP efforts beyond the offerings of Do512.

</p>

<br />
<br />
<br />

<h1>
The Beginners Guide To The Daily Essentials
</h1>

<img src={Bag}alt="SXSW Supply bag" />
<br />
<br />
<h3>SXSW is just a day away but before you head the door we recommend a few key supplies for your day out.</h3>
<ul>
<li><strong>Inner Soles.</strong> Think about your feet. You are about to blow up that fit bit and your 10,000 step daily goal is going to look like a joke by noon. SXSW events are spread all across the city and as the city grows the greater SXSW footprint gets wider and wider.  Strategic planning can help limit the number of 20 block treks you make from one side of Austin to the other but some devilish event planner is invariably going to schedule one of your "must see" bands at in the 1700 block of E. 6th, right after that Media Temple open house on W. 6ths, that you have to go to for your last chance to get VIP passes for their impossible to get into closing party.</li>
</ul>
<ul>
<li><strong>Bring a Bag.</strong> Do I really need a bag? Well it depends on what you want to do. A bag is essential for a long day, but cumbersome for late-night parties. Unfortunately if you are planning on a full day and all night out, pockets just aren't going to cut it. There's a reason drawstring bags are one of the most sought after swag items at SXSW. We've used them at our events multiple times and they are always snatched up like gold. It doesn't take long to find yourself virtually buried under a pile of free swag, add that to the essentials you're already carrying, and suddenly you don't have a free hand to put a free drink in. A small messenger bag or large purse is ideal. You'll see people wandering around with full back-packs and probably get bumped into by one. Don't be that guy.  A small bag can hold your essentials and leave room for your must have swag or a t-shirt from that new band you just fell in love with. Once the day parties wind down, consider dropping the bag off at your hotel or stashing it in your designated driver's vehicle.</li>
</ul>
<ul>
<li> <strong>Power, Power and more Power</strong>.I don't know how SXSW existed before smart phones. We use them for everything, from coordinating with friends, tracking new and secret shows on twitter, pulling up schedules and tickets, loading soon to be deleted apps in exchange for free drinks, taking picture after picture after picture. No matter how good your battery is, it will die at Southby without a recharge. You can often find companies passing out free lipstick chargers, but these are barely give most phones half a charge. I always carry a charging cord and a dual-port 18,500mAh power bank from iDaye, which I bought for about $20 on Amazon. It will charge my Samsung Galaxy Note all day long and the second port has helped make a friend of more than one stranger in line desperate for a little juice.</li>
</ul>
<ul>
<li><strong>Camera</strong>. Do you need a camera? Probably. The crowds are thick at Southby and you can't always get close enough to get a decent picture on your phone. A pocket camera with a high super zoom is ideal. I've lugged around various large-body super-zooms and DSLR's with cumbersome lenses, but found they just aren't worth the effort. Many Official SXSW venues won't let you past the door with a DSLR unless you have registered the camera with SXSW and had it tagged. For sub-DSLR cameras they tend to be more lenient and even the strictest venues won't bother checking your pockets for a small camera.</li>
</ul>
<ul>
<li><strong>Lanyard.</strong> A nice lanyard is handy to hang all your various multi-day unofficial passes from. If you have a SXSW badge you'll need to have it scanned every time you enter an official event, so keep it separate from all your unofficial passe. I like to keep a few passes from my favorite parties on the lanyard as well as a clear pocket to hold all my various free drink tickets that otherwise seem to lose themselves.</li>
<li><strong>Ear Plugs.</strong> Bring an extra pair. If someone is passing them out take them. Ear Plugs are essential and easily lost. If you like being close to the stage you'll eventually find yourself in front of a ten foot tall speaker. If you drop one of them onto the muddy beer-soaked floor moments before that speaker explodes like a jack hammer in your ear, you will regret not having a back-up.</li>
</ul>
<ul>
<li><strong>Water Bottle.</strong> A water bottle that you're not too attached to is especially handy on long walks between far flung venues. Most venues will let you bring an empty water bottle in, but some will make you toss it. So bring a water bottle, but don't plan on coming home with it.</li>
</ul>
<ul>
<li><strong>Sunscreen.</strong> It may be cloudy when you head out for the day, but this is Austin, and that powerful Texas sun is always lurking just around the corner.Be prepared, don't be burned.</li>
</ul>
<ul>
<li><strong>Umbrella/Raincoat/Jacket</strong>. Check the weather, check your schedule and plan one day at a time. During Southby it will invariably be hot, cold, rainy and sunny. Sometimes it will do all four the same day. I recommend a rain jacket or emergency poncho, over an umbrella. Umbrellas may seem convenient but they don't work in crowds and many venues will not let you bring them in. If you are planning on going to anything at Stubbs, plan on throwing your umbrella in a giant pile by the main gate and picking up a random one on your way out.</li>
</ul>
<ul>
<li><strong>Gum.</strong>It's a long day. You'll be drinking lots of fragrant beverages and eating who knows what. Do your fellow festival goers a favor and bring a pack of spearmint.</li>
</ul>
<img src={CatBag}alt="SXSW Supply bag" />
<br />
<br />

<ul>

    
<li><strong>Cat.</strong> Everyone loves SXSW and in typical Austin fashion efforts have even been made to include the family dog at a handful of events. That hospitality has not been extended to our feline friends. When the cat invariably tries to sneak into your bag while you're loading your inner-soles into your Nikes, you just have to say no.</li>
</ul>

</div>


</div> 
        </CContainer>
     );
}
 
export default Home;



         //    <h2>Homepage</h2>
        //     <p>{name} is { age } years old</p>
        //     <button onClick={handleClick}>Click Me </button> 
        //       <button onClick={ () => handleClickAgain(' Mario')}>Click Me Again </button>  */}