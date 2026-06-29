const ScrollLink = ({to , name ,  className  }) => {                 
    return (    
      <a href={to} className={className}>{name}</a>
    )              
}

export default ScrollLink;