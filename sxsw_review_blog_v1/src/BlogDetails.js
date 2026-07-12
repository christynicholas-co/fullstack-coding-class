import { useHistory, useParams } from "react-router-dom";
import useFetch from './useFetch'
import { CContainer ,CCard, CCardBody, CCardGroup, CCardHeader, CCardImage, CCardImageOverlay, CCardLink, CCardSubtitle, CCardText, CCardTitle,  CCardFooter } from '@coreui/react'


const BlogDetails = () => {

    const{ id } = useParams ()
    const{ data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id)
    const history = useHistory()
const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
        method: 'DELETE',
    }).then(() => {
        history.push('/')
    })
}

    return (  
        
        <div className="blog-detail home">
            { isPending && <div> Loading.. .</div>}
            { error && <div> { error } </div>}
            { blog && (
               <CContainer fluid>
                   <CCardBody>
                   <CCard style={{ width: '18rem' }}>
                   <CCardTitle> <h1>{ blog.title } </h1></CCardTitle>  
                   <CCardSubtitle className="mb-2 text-medium-emphasis">{ blog.time } : { blog.location } </CCardSubtitle> 
                   <CCardSubtitle>Words by { blog.author }</CCardSubtitle>
                    
                   <CCardText>
                    <div> { blog.body } </div> </CCardText>
                    <button onClick={handleClick}>Delete</button>
                    </CCard>
                    </CCardBody>
                    <CCardLink href="https://www.google.com">RSVP Link</CCardLink>
                    </CContainer>
            )}
        </div> 
    );
}
 
export default BlogDetails




        