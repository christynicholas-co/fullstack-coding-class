const Garfield = () => {  
    return (
        <div className="theImage">
        <h1 className="name">Life</h1>
       <img src="https://i.imgur.com/F67Eq7J.jpeg"/>
        <h3>How does he feel?</h3>
        <FeelingsList/>
        </div>
    );
}

const FeelingsList = () => {
    const theStyles = {fontSize: "24px"};
    return (
        <ul style= {theStyles}>
            <li>Happy</li>
            <li>Sad</li>
          </ul>
    )
  }

export default Garfield;