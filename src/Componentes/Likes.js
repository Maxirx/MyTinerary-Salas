import React, { useEffect, useState } from "react";
import cn from "classnames";
import { ReactComponent as Hand } from "../recursos/hand.svg";
import axios from "axios";
import { connect } from 'react-redux';

import "./likes.scss";
import UserActions from "../Redux/action/registroAction";

const particleList = Array.from(Array(10));

const LikeButton = (props) => {

    console.log(props);
    const [liked, setLiked] = useState(null);
    const [clicked, setClicked] = useState(false);
    const [like, setLike] = useState(0);
    const user = props.usuario





    /*    const likes = props.Iti.likes */


    const LikeDislike = async () => {
        const token = localStorage.getItem("token")
        const id = props.Iti._id
        console.log(id);
        console.log(token);
        await axios.put(`http://localhost:4000/api/likes/${id}`, {}, {
            Headers: {
                'Authorization': 'Bearer ' + token
            }
        }/* .then(response => console.log(response)) */

        )

        /*         console.log(response)
                return response */

    }

    return (<>
        <button
            onClick={() => {
                setLiked(!liked);
                setClicked(true);
                LikeDislike();
            }}
            onAnimationEnd={() => setClicked(false)}
            className={cn("like-button-wrapper", {
                liked,
                clicked,
            })}
        >
            {liked && (
                <div className="particles">
                    {particleList.map((_, index) => (
                        <div
                            className="particle-rotate" key={index}
                            style={{
                                transform: `rotate(${(360 / particleList.length) * index + 1
                                    }deg)`,
                            }}
                        >
                            <div className="particle-tick" />
                        </div>
                    ))}
                </div>
            )}
            <div className="like-button">
                <Hand />
                <span>Like</span>
                <span className={cn("suffix", { liked })}>d</span>
            </div>
        </button>{like}</>
    );
};

const mapStateToProps = (state) => {
    return {
        usuario: state.UseReduc.usuario,
    }
}

/* const mapDispatchToProps = {
    VerificarToken: UserActions.VerificarToken
}
 */
export default connect(mapStateToProps,/*  mapDispatchToProps */ null)(LikeButton);
