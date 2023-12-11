import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { GET_PEOPLE_DETAIL } from "../redux/actions";

export const DetailPeople = () => {
  const { id } = useParams();

  console.log(id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GET_PEOPLE_DETAIL({ personId: id }));
  }, []);

  const people = useSelector((state) => state.movies.detailPeople);

  return (
    <>
      <div className="container mt-3">
        <div className="row">
          <div className="col-4">
            <div className="card">
              <img
                src={"https://image.tmdb.org/t/p/w300" + people.profile_path}
                className="card-img-top"
              />
            </div>
          </div>

          <div className="col-8">

        <div className="row">
            <div className="col">
            <h2 class="card-title mb-2">{people.name}</h2>
            </div>
        </div>

            <table class="table table-bordered">
              <tbody>
                <tr>
                  <th scope="col">Id</th>
                  <td>{people.id}</td>
                </tr>
                <tr>
                  <th scope="col">Fecha Nacimiento</th>
                  <td>{people.birthday}</td>
                </tr>
                <tr>
                  <th scope="col">Genero</th>
                  <td>{people.gender == 1 ? "FEMENINO" : "MASCULINO"}</td>
                </tr>
                <tr>
                  <th scope="col">Popularidad</th>
                  <td>{people.popularity}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
