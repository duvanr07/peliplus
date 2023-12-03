import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_PEOPLES } from "../redux/actions";
import { CardPeople } from "../components/CardPeople";

export const Peoples = () => {
  const dispatch = useDispatch();
  const peoples = useSelector((state) => state.movies.peoples);
  useEffect(() => dispatch(GET_PEOPLES()), []);

  return (
    <div className="container contentMovie">
      {peoples.map((people) => (
        <CardPeople key={people.id} people={people} />
      ))}
    </div>
  );
};
