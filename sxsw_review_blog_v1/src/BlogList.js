import { Link } from 'react-router-dom';
import { CContainer ,CCard, CCardBody, CCardGroup, CCardHeader, CCardImage, CCardImageOverlay, CCardLink, CCardSubtitle, CCardText, CCardTitle,  CCardFooter } from '@coreui/react'





const BlogList = ({blogs, title,  }) => {
    // const blogs = props.blogs;
    // const title = props.title;
    return ( 
       
<div className="blog-list">
<CCardBody>
<h2> { title } </h2>
    {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>

<Link to ={`/blogs/${blog.id}`}>
<h2>{ blog.title } </h2>
<p> Written by { blog.author }</p>

    </Link>

        </div>
    ))}
    </CCardBody>
</div>

     );
}
 
export default BlogList;


//   Content here

//         <div className="home">

            

 
        
//         <CCard style={{ width: '18rem' }}>
//   <CCardBody>
//     <CCardTitle> A title  </CCardTitle>
//     <CCardSubtitle className="mb-2 text-medium-emphasis">Card subtitle</CCardSubtitle>
//     <CCardText>
//       Some quick example text to build on the card title and make up the bulk of the card's content.
//     </CCardText>
//     <CCardLink href="#">Card link</CCardLink>
//     <CCardLink href="#">Another link</CCardLink>
//   </CCardBody>
// </CCard>
// </div>