
import BlogList from './BlogList';
import useFetch from './useFetch';
//card elements
import { CContainer ,CCard, CCardBody, CCardGroup, CCardHeader, CCardImage, CCardImageOverlay, CCardLink, CCardSubtitle, CCardText, CCardTitle,  CCardFooter } from '@coreui/react'




const Reviews = () => {

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


        <div className="home">
            {error && <div>{error} </div>}
            {isPending  && <div>Loading...this thing</div>}
            

 
        
        <CCard style={{ width: '18rem' }}>
  <CCardBody>
    <CCardTitle>  {blogs && <BlogList blogs={blogs}  title="All of The Events" />} </CCardTitle>
   
  

  </CCardBody>
</CCard>
</div>
        </CContainer>
     );
}
 
export default Reviews;



         //    <h2>Homepage</h2>
        //     <p>{name} is { age } years old</p>
        //     <button onClick={handleClick}>Click Me </button> 
        //       <button onClick={ () => handleClickAgain(' Mario')}>Click Me Again </button>  */}