import Acc from './images/acc_logo.jfif'
import Kevin from './images/kevin.jpg'
import Christy from './images/christy.jpeg'
import Michelle from './images/michelle.JPG'

const About = () => {
    return(
<div>

<h1>The Story</h1>
<p>After a few years as a standalone review blog SXSW Review has gotten a makeover as part of the ACC Full Stack Coding Bootcamp.  </p>
<br />
<h1>The Team</h1>

<br />
<div>
<h1>Project ACC Bootcamp</h1>
<img src={Acc} width="100" height="100" with alt='acc logo'/>
<p>As students in the August cohort of the ACC Full Stack Coding Bootcamp, the team caem together to give the SXSW Review website a major overhaul. Adding maps, a twitter feed and enabling live blog addition.  </p>
</div>

<div>
    <h1>Kevin Ketterlin</h1>
    <img src={Kevin} width="100" height="100" with alt='kevin'/>
    <p>The guy who keeps wandering around SXSW looking for the best music, movies, and tech while putting together the most judgemental reviews ever.  Jk.  Now with a little more tech experience he's going out looking to code his way to newer and bigger opportunities and challenges.</p>

</div>

<div>
    <h1>Christy Nicholas</h1>
    <img src={Christy} width="100" height="100" with alt='kevin'/>
<p>Artist turned tech! Loves to paint, hike and lean all things Javascript.</p>
</div>

<div>
    <h1>Michelle Fernandez</h1>
    <img src={Michelle} width="100" height="100" with alt='kevin'/>
<p>Software Development student looking for new opportunities and will be a hard-working asset to any team to learn, grow and develop long-term. Dog mom, plant mom and loves the outdoors. </p>
</div>



<p>  </p>

</div>

    )}

export default About

