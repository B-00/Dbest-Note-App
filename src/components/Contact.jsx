import React, {useReducer} from 'react'

const ACTIONS = {
  USERNAME: 'userName',
  USEREMAIL: 'userEmail',
  USERTITLE: 'userTitle',
  USERMSG: 'userMSG',
  CLEAR: 'clear'
}

const reducer = (contactInfo, action) => {
  switch (action.type) {
    case ACTIONS.USERNAME:
      return {...contactInfo, name: action.payload};
    case ACTIONS.USEREMAIL:
      return {...contactInfo, email: action.payload};
    case ACTIONS.USERTITLE:
      return {...contactInfo, title: action.payload};
    case ACTIONS.USERMSG:
      return {...contactInfo, msg: action.payload};
    case ACTIONS.CLEAR:
      return {name: '', email: '', title: '', msg: ''};
    default:
      return contactInfo;
  }
}

function Contact() {
  const [contactInfo, dispatch] = useReducer(reducer, {name: '', email: '', title: '', msg: ''})

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(contactInfo);
    dispatch({type: ACTIONS.CLEAR})
  }

  return (
    <div className="nav-spacing">
      <div className="form-div">
        <form onSubmit={onSubmitHandler}>
          <h3 className="form-fields">Contact</h3>
          <div className="row">
            <div className="form-fields">
              <label htmlFor="name">Name*</label>
              <input
                type="text"
                value={contactInfo.name}
                name="name"
                id="name"
                placeholder="Enter Name"
                required
                onChange={(e) =>
                  dispatch({ type: ACTIONS.USERNAME, payload: e.target.value })
                }
              />
            </div>
            <div className="form-fields">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                value={contactInfo.email}
                name="email"
                id="email"
                placeholder="Enter Email"
                required
                onChange={(e) =>
                  dispatch({ type: ACTIONS.USEREMAIL, payload: e.target.value })
                }
              />
            </div>
          </div>
          <div className="form-fields">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              value={contactInfo.title}
              name="title"
              id="title"
              placeholder="Enter Title"
              required
              onChange={(e) =>
                dispatch({ type: ACTIONS.USERTITLE, payload: e.target.value })
              }
            />
          </div>
          <div className="form-fields">
            <label htmlFor="msg">Your Message</label>
            <textarea
              type="text"
              value={contactInfo.msg}
              name="msg"
              id="msg"
              placeholder="Enter Message..."
              required
              onChange={(e) =>
                dispatch({ type: ACTIONS.USERMSG, payload: e.target.value })
              }
            ></textarea>
          </div>
          <button type="submit">Post Comment</button>
        </form>
      </div>
    </div>
  );
}

export default Contact