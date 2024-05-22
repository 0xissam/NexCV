import React from 'react'
import { Link } from 'react-router-dom'

export default function PagesStyle(props) {
  return (
    <div
  className="breadcumb-area clearfix dzsparallaxer auto-init mode-scroll animation-engine-js dzsprx-readyall"
  data-options='{direction: "normal"}'
>
  <div
    className="divimage dzsparallaxer--target"
    style={{
      width: "101%",
      height: "130%",
      backgroundImage: 'url("img/bg-img/bg-2.html")',
      transform: "translate3d(0px, -84.5233px, 0px)"
    }}
  />
  {/* breadcumb content */}
  <div className="breadcumb-content">
    <div className="container h-100">
      <div className="row h-100 align-items-center">
        <div className="col-12">
          <nav aria-label="breadcrumb" className="breadcumb--con text-center">
            <h2
              className="w-text title wow fadeInUp"
              data-wow-delay="0.2s"
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "fadeInUp"
              }}
            >
              {props.title}
            </h2>
            <ol
              className="breadcrumb justify-content-center wow fadeInUp"
              data-wow-delay="0.4s"
              style={{
                visibility: "visible",
                animationDelay: "0.4s",
                animationName: "fadeInUp"
              }}
            >
              <li className="breadcrumb-item">
                <Link to="/">{props.main}</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {props.title}
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
