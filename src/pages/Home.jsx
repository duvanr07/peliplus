import { Fragment, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GET_NOW_PLAYING, SEARCH_MOVIES } from "../redux/actions";
import { ContentCardMovie } from "../components/ContentCardMovie";
import { useForm } from "../hooks/useForm";

export const Home = () => {
  const dispatch = useDispatch();

  const { onInputChange, search } = useForm({
    search: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (search.trim().length == 0) return;
    dispatch(SEARCH_MOVIES({ query: search }));
  };

  return (
    <Fragment>
      <header>
        <h2 className="title">📺</h2>
        <h2 className="title">Películas Chigüiro</h2>
      </header>

      <div className="row">
        <div className="col-8 offset-2">
          <form action="" autoComplete="off"  onSubmit={onSubmit}>
            <div className="input-group mb-3">
              <input
                type="text"
                name="search"
                value={search}
                onChange={onInputChange}
                className="form-control"
                placeholder="Buscar películas"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-outline-secondary"
                type="submit"
                id="button-addon2"
              >
                Buscar
              </button>
            </div>
          </form>
        </div>
      </div>

      <ContentCardMovie />
    </Fragment>
  );
};
