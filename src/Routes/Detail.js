import React from "react";
import {Query} from "react-apollo/index";

/*react apollo 만 가지고 있는 기능 match! */
const Detail = ({match: {
    params : {movieId}
    }
    }) => {
    return <div>Detail</div>
}

export default Detail;
