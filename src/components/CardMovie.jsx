import {Link} from "react-router-dom";
import "./CardMovie.css";
import * as PropTypes from "prop-types";
import {Component} from "react";

export class CardMovie extends Component {
    render() {
        let {movie: {id, poster_path, title}} = this.props;
        const imgUrl = `https://image.tmdb.org/t/p/w300${poster_path}`;

        return (
            <li className="cardMovie">
                <Link to={"/movie/" + id} className="linkable">
                    <img
                        width={230}
                        height={345}
                        src={imgUrl}
                        alt={title}
                        className="imgMovie"
                    />
                    <div>{title}</div>
                </Link>
            </li>
        );
    }
}

CardMovie.propTypes = {movie: PropTypes.any}
