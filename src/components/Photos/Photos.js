import React from 'react';
import './Photos.css';
import unsplash from '../../api/unsplash';

class Photos extends React.Component{
  state = {
    images: []
  }

  getImages = async (term) => {
    const response = await unsplash.get('/photos/random', {
      params: {
        colections: '10274903',
        count: 12,
        orientation: 'landscape'
      }

    });
  
    this.setState({ images : response.data});
  }

  renderImages(){
    return (
      
      this.state.images.map(({alt_description, id, urls} ) => <img alt ={alt_description}
          src={urls.regular}
          key={id} 
          className="photo"
        />
      )

    );
  }

  componentDidMount(){
    this.getImages();
    
  }
render(){
  return (
      <section className="photos">            
              <div className="container">
                <h2 className="heading-secondary">Photos</h2>
                  <div className="photos__content">
                    {this.renderImages()}
                  </div>
              </div>
          </section>
    )
  }
}
export default Photos;