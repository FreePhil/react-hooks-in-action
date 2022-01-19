import {useState, Fragment} from 'react';
import {days, sessions, users} from "../../static.json";

export default function UsersList () {
  const [userIndex, setUserIndex] = useState(0);
  const [hasDetails, setHasDetails] = useState(false);
  const user = users[userIndex];

  return (
    <Fragment>
      <div>
        <ul className="users items-list-nav">
          {users.map((u, i) => (
            <li
              key={u.id}
              className={i === userIndex ? "selected" : null}
            >
              <button
                className="btn"
                onClick={() => setUserIndex(i)}
              >
                {u.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
      {user && (
        <div className="bookable-details">
          <div className="item">
            <div className="item-header">
              <h2>
                {user.name}
              </h2>
              <span className="controls">
                <label>
                  <input
                    type="checkbox"
                    checked={hasDetails}
                    onChange={() => setHasDetails(has => !has)}
                  />
                  Show Details
                </label>
              </span>
            </div>

            <p>{user.title}</p>

            {hasDetails && (
              <div className="item-details">
                <hr/>
                <div className="bookable-availability">
                  {user.notes}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </Fragment>

  );
}
