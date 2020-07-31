import React from 'react';
import {faCalendar, faComment} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Blog({img, title, about}) {
    return(
           
                <div className="col-lg-4 col-md-4 col-sm-6">
                    <div className="blog__item">
                        <div className="blog__item__pic">
                            <img src={img} alt=""/>
                        </div>
                        <div className="blog__item__text">
                            <ul>
                                <li><FontAwesomeIcon icon={faCalendar}/> May 4,2019</li>
                                <li><FontAwesomeIcon icon={faComment}/> 5</li>
                            </ul>
                            <h5><a href={'h'}>{title}</a></h5>
                            <p>{about}</p>
                        </div>
                    </div>
                </div>
      

    )
}
export default Blog;