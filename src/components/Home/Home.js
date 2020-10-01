import React from 'react';

const Home = () =>{
  return (
    <div className="container">
       <div className="banner-wrap">
        <img 
          className="banner"
          src="https://images.unsplash.com/photo-1542554250-726628a42330?ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80" 
          alt="banner img" 
        />
      </div>
      <h1 className="heading-primary">
        <span className="heading-primary__top">Welcome</span>
        <span className="heading-primary__bottom">It's our Home page</span>
      </h1>
      <p className="home-page__content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Etiam interdum rutrum ante, non rutrum neque vulputate sit amet. Curabitur convallis orci at magna fringilla 
        pulvinar at non elit. Nullam imperdiet faucibus eros id elementum. Integer suscipit convallis efficitur. Proin 
        eget purus elementum, euismod nisl eget, aliquam turpis. Etiam venenatis sem metus, sit amet faucibus urna 
        convallis sed. Pellentesque viverra hendrerit nibh, quis iaculis nibh congue in. Morbi sed eros id magna maximus 
        posuere. Maecenas gravida ipsum quis nisi fringilla hendrerit. In ut cursus libero, quis finibus diam. Vivamus 
        varius tortor vitae sodales ultricies. Quisque eu consequat quam, sed rhoncus mi. Sed sit amet metus sit amet 
        lorem gravida bibendum. Cras dignissim augue ac condimentum blandit.
      </p>
    </div>
  );
};

export default Home;