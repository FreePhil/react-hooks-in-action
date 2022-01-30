import {useState, Fragment} from "react";

import BookablesList from "./BookablesList";
import BookableDetails from "./BookableDetails";

import reducer from "./reducer";


export default function BookablesView () {
  const [bookable, setBookable] = useState();

  return (
    <Fragment>
      <BookablesList bookable={bookable} setBookable={{setBookable}}/>
      <BookableDetails bookable={bookable}/>
    </Fragment>
  );
}