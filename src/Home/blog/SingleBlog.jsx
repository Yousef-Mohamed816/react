import React, { useState } from 'react'
import blogList from "/src/utilis/blogdata.js"
import { useParams } from 'react-router-dom'
import PageHeader from '../../components/PageHeader';
import Tags from '../../shop/Tags';
import Popularpost from '../../shop/Popularpost';



const socialList = [ { link: "#", iconName: "icofont-facebook", className: "facebook", }, { link: "#", iconName: "icofont-twitter", className: "twitter", }, { link: "#", iconName: "icofont-linkedin", className: "linkedin", }, { link: "#", iconName: "icofont-instagram", className: "instagram", }, { link: "#", iconName: "icofont-pinterest", className: "pinterest", }, ];

const SingleBlog = () => {
    const [blog,setBlog] = useState(blogList);
    const {id} = useParams()
    const result =  blog.filter((b) => b.id === Number(id));


  return (
    <div>
        <PageHeader title={"Single Blog pages"} curPage={"Blog / Blog Details"}/>
      
        <div className='blog-section blog-single padding-tb section-bg'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className='col-lg-8 col-12'>
                            <article>
                                <div className='section-wrapper'>  
                                    <div className="row row-cols-1 justify-content-center g-4">
                                        <div className='col'>
                                            <div className='post-item style-2 '>
                                                     <div className='post-inner'> 
                                                        {
                                                            result.map((item) => (
                                                                <div key={item.id}>
                                                                    <div className='post-thumb'>
                                                                        <img src={item.imgUrl} alt="" className='w-100'/>
                                                                    </div>
                                                                    <div className='post-content'>
                                                                            <h3 className=''>{item.title}</h3>
                                                                            <div className='meta-post'>
                                                                            <ul className='lab-ul'>
                                                        {                
                                                                item.metaList.map((val,i) => (
                                                             <li key={i}><i className={val.iconName}></i>{val.text}</li>
                                                                ))
                                                                    }
                                                                        </ul>
                                                                        </div>
                                                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, assumenda unde! Eius, nihil. Nemo modi deleniti nesciunt? Dicta est ipsa vel neque, sint molestias provident hic pariatur ad quaerat suscipit? Iure vel voluptatem dicta facilis cumque ipsa commodi sunt laboriosam dolore recusandae ex provident blanditiis, id reprehenderit facere, vero sit!</p>
                                                                            <blockquote>
                                                                                <p>Dynamically recaptiualize distributed technologies is wherase 
                                                                                Dynamically recaptiualize distributed technologies is wherase
                                                                                Dynamically recaptiualize distributed technologies is wherase
                                                                                </p>
                                                                                <cite>
                                                                                     <a href="#">...Melissa Hunter</a>
                                                                                </cite>
                                                                            </blockquote>
                                                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum beatae corporis culpa quas aut incidunt quia, illum rerum possimus atque necessitatibus molestias. Maiores nobis, eum voluptatem, ducimus ipsam libero iure maxime eos ratione in consequuntur et possimus inventore impedit quas?

                                                                            </p>
                                                                            <img src="/src/assets/images/blog/single/01.jpg" alt="" />
                                                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus asperiores repellat cupiditate fugiat nemo magnam nulla dolore. Aliquid rerum dolor rem aut velit? Officiis distinctio, saepe facilis consequatur, est praesentium error minima cumque in laborum ullam minus, porro numquam quasi!</p>
                                                                                    <div className='video-thumb'>
                                                                                                    <img src="/src/assets/images/blog/single/02.jpg" alt="" />
                                                                                                    <a href="https://youtu.be/_W3R2VwRyf4?si=dQfEMwVnu0lv6x"
                                                                                                    className='video-button popup'>
                                                                                                        <i className='icofont-ui-play'></i>
                                                                                                    </a>
                                                                                    </div>
                                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam vel quasi animi saepe ad velit rerum repudiandae excepturi doloremque architecto minus, itaque odit, sequi consequuntur, in dolorem illo sunt nemo? Eaque tempora facilis pariatur ab nisi ullam expedita distinctio consequatur numquam molestias nobis molestiae reiciendis, mollitia veritatis possimus rerum. Quaerat!</p>
                                                                                    
                                                                                    <div className='tags-section'>
                                                                                            <ul className='tags lab-ul'>
                                                                                                            <li>
                                                                                                                <a href="#">Agency</a>
                                                                                                            </li>
                                                                                                            <li>
                                                                                                                <a href="#">Busingess</a>
                                                                                                            </li>
                                                                                                            <li>
                                                                                                                <a href="#">Personal</a>
                                                                                                            </li>
                                                                                            </ul>
                                                                                            <ul className='lab-ul social-icons'>
                                                                                                                { 
                                                                                                                    socialList.map((val, i) => (
                                                                                                                        <li key={i}>
                                                                                                                            <a href="#" className={val.className}>
                                                                                                                                <i className={val.iconName}></i>
                                                                                                                            </a>
                                                                                                                        </li>
                                                                                                                    ))

                                                                                                                 }
                                                                                            </ul>
                                                                                    </div>
                                                                    </div>
                                                                </div>
                                                            ) )
                                                        }
                                                    </div>   
                                            </div>
                                            <div className='navigations-part'>
                                                        <div className='left'>
                                                            <a href="#" className='prev'>
                                                                <i className='icofont-double-left'></i> Previous Blog

                                                            </a>
                                                            <a href="#" className='title'>
                                                                    Evisculate Parallel Processes vis Tachnica Sound Models Authoritative
                                                            </a>
                                                        </div>
                                                        <div className='right'>
                                                            <a href="#" className='prev'>
                                                                <i className='icofont-double-right'></i> Previous Blog

                                                            </a>
                                                            <a href="#" className='title'>
                                                                    Evisculate Parallel Processes vis Tachnica Sound Models Authoritative
                                                            </a>
                                                        </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>


                        <div className='col-lg-4 col-12'>
                            <aside>
                                <Tags/>
                                <Popularpost/>
                            </aside>
                        </div>

                    </div>
                </div>

        </div>
    </div>
  )
}

export default SingleBlog