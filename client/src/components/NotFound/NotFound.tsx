import React from 'react';
import "./not_found.scss";

export default function NotFound({statuscode = 404}) {
  let template = <></>
  if(statuscode == 404) {
    return (
      template = <div className='null-state'></div>
    )
  }
  if (statuscode == 500) {
    return (
      template = <div className="empty-state"></div>
    )
  }
  return <>{template}</>
}
