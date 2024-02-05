import React from 'react';
import blogheaderImg from '../../assets/img/blogs_head_img.jpg';

const TipsHeadSection = () => {
  return (
    <div className='container mt-5 '>


      <div className="row flex-wrap-reverse">
        <div className="col-8 col-sm-12 col-md-8 d-flex flex-column justify-content-center " style={{minWidth:'450px'}}>
        <h1 className='font-weight-bold mb-4'>Welcome to my Tips Section!</h1>
          <p className='mb-4' style={{ fontSize: '1.1rem', fontWeight: 400 }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi molestiae minima iure perspiciatis ad iusto saepe harum nihil. Nihil, sequi mollitia fugiat maxime eum repellat provident modi libero recusandae repellendus qui aliquid exercitationem quisquam est officiis debitis illo earum ducimus aliquam ut. Labore commodi tenetur facere quibusdam repellat asperiores velit?
          </p>


        </div>
        <div className="col-4 col-sm-12 col-md-4 d-flex justify-content-center" style={{minWidth:'330px'}}>
        <img className='img-fluid rounded' src={blogheaderImg} alt='' style={{width:'70%'}} />
        </div>
      </div>
      {/* <div className='row flex-column-reverse flex-lg-row'>
        
        <div className='col-lg-6 mb-4 mb-lg-0'>
          <h1 className='font-weight-bold mb-4'>Welcome to my Tips Section!</h1>
          <p className='mb-4' style={{ fontSize: '1.1rem', fontWeight: 400 }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi molestiae minima iure perspiciatis ad iusto saepe harum nihil. Nihil, sequi mollitia fugiat maxime eum repellat provident modi libero recusandae repellendus qui aliquid exercitationem quisquam est officiis debitis illo earum ducimus aliquam ut. Labore commodi tenetur facere quibusdam repellat asperiores velit?
          </p>
          <button className='btn btn-dark mt-3'>Check Tips</button>
        </div>

        <div className='col-lg-6 '>
          <img className='img-fluid rounded' src={blogheaderImg} alt='' style={{width:'50%'}} />
        </div>
      </div> */}
    </div>
  );
};

export default TipsHeadSection;
