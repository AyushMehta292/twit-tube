
import { Link } from "react-router-dom";
function Logo({ width = "w-12 sm:w-16", className = "" }) {
  return (
    <Link to={"/"}>
      <div className={`mr-4 ${width} shrink-0 ${className}`}>
        {/* <img src="/logo.svg" alt="twit-tube logo" /> */}
        <svg
          version="1.1"
          viewBox="0 0 896 1152"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            transform="translate(0)"
            d="m0 0h896v1152h-896z"
            fill="#111111"
          />
          <path
            transform="translate(428,330)"
            d="m0 0h31l27 3 24 5 30 10 24 11 15 9 11 7v2l5 2 11 9 13 12 8 7 2 4h2l7 8 8 10 12 17 8 10 7 8 2 5h-2v2l2 1 3 10 8 22 6 26 2 12 2 28v18l-3 28-3 17-6 22-6 17-8 18-9 17-11 17-13 17-12 13-13 13-8 7-16 12-14 9-10 6-16 8-9 4-16 6-19 6-25 5-17 2h-46l-16-2-23-5-14-4-21-7-12-5-8-4-18-5-1-1-7-1-8-4-27-5-17-4-5-1-8-5-15-6-20-11-7-5v-2l-4-2 1-2 22-1 24-3 15-4 3-2-5-5-8-10-11-17-14-27-7-18-5-15-5-24-3-19-7-14-4-13-2-16v-9l1-5 11 2 2-13v-7l-5-13-3-13-1-8v-11l2-18 4-15 7-16 6-11h4l9 11 7 8 3 3h2l8-13 9-12 12-14 17-17 14-11 11-8 9-6 11-6 15-8 24-9 20-6 22-5 15-2z"
            fill="#2BDBFD"
          />
          <path
            transform="translate(428,330)"
            d="m0 0h31l27 3 24 5 30 10 24 11 15 9 11 7v2l5 2 11 9 13 12 8 7 2 4h2l7 8 8 10 12 17 8 10 7 8 2 5h-2v2l2 1 3 10 8 22 6 26 2 12 2 28v18l-3 28-3 17-6 22-6 17-8 18-9 17-11 17-13 17-12 13-13 13-8 7-16 12-14 9-10 6-16 8-9 4-16 6-19 6-25 5-17 2h-46l-16-2-23-5-14-4-21-7-12-5-8-4-18-5-1-1-7-1-8-4-27-5-17-4-5-1-8-5-15-6-20-11-7-5v-2l-4-2 1-2 22-1 24-3 15-4 3-2-5-5-8-10-11-17-14-27-7-18-5-15-5-24-3-19-7-14-4-13-2-16v-9l1-5 11 2 2-13v-7l-5-13-3-13-1-8v-11l2-18 4-15 7-16 6-11h4l9 11 7 8 3 3h2l8-13 9-12 12-14 17-17 14-11 11-8 9-6 11-6 15-8 24-9 20-6 22-5 15-2zm74 55-21 3-17 5-18 8-13 8-11 9-5 4-5 5-11 13-11 19-8 19-3 14-1 11v14l1 7-24-3-22-5-27-9-13-5-20-11-14-9-11-8-10-8-24-24-6-8-2-2-6 9-4 10-4 13-3 17v18l4 18 5 13 7 12 15 16v2h-9l-17-3-6-2h-4v9l2 14 5 15 6 11 6 9 7 7 8 6 14 7 12 4 7 1-13 4-6 1h-20l1 4h2l1 5 8 14 9 11 11 9 5 4 11 6 22 8 13 2 14 1 4 1-13 12-16 11-23 12-17 6-17 4-18 2h-10v3l18 10 11 5 26 8 23 5 10 2 29 2h20l26-1 43-7 30-8 13-5 10-3 10-5 21-10 11-7 14-10 13-10 1-3 4-2 13-13v-2l26-1 14-5 10-6 7-6 9-12 6-12 1-7v-138l-2-9-4-8-4-7h-2l-2-4-7-7-2-13-4-16 1-5 10-15 8-13 3-6v-3l-8 1-28 10h-2l-6-8-11-10-14-8-8-4-8-2-1-4-9-1z"
            fill="#8E0200"
          />
          <path
            transform="translate(502,385)"
            d="m0 0h16l9 1 1 4 13 4 14 8 11 9 8 9 1 2 10-3 23-8h5l-1 4-4 8-10 16-7 10 1 8 3 12v11l-6-1-8-4-8-2h-59l-3 3-6 1-1 7-6 9-8 16-14 16-10 19 3 1-9 1-4-2v2l35 19 18 10 12 8v-25l2-1 9 1 1 23h2l1-3 8-1 5 3 3 9v27l-3 8-6 4-7-1-3-2v-2h-3l-1 4h-8v-39l-8 4-1 2-1 33h-10l-1-4-5 4-7 1-5-3-2-4-1-7-11 7-15 9-10 7 5-1 5-2-1 2 3 2 1 10 7 14 8 10 5 9 9 10v5l7 3 23 3 12 1v1h-16l-12 1-101-1-19-1-3-6-2-22-6-16v-5l-4-2-2-2 1-5 3-5 1-2h-6l-2-3v-3l-2-1-1-3-2 2v2l-6 1v-3l-4-1-1-2 11-1 2-16 2-14h2l4 30h9l2-7 5-28 2-12h-10v9l-2 18-2 4-2-7-2-15v-9h-10l1-3-3-1 1-3h2l4-9h3l2 5 3-1-1-6-2-2-1-16-2-4-2-9-1-5-11 1-7-2v2h5l-3 5-5 5-4-2-1-4 2-4 2-1-1-2 3-2-7-2v3l-4-1-1-2-8-1 1 4-3 1-8-4h-8l-3-4-1-5v-3l1-3 25 9 18 5 19 4 19 2-1-7v-14l2-16 3-11 8-19 11-18 12-14 5-5 13-10 9-6 16-8 13-5 15-4z"
            fill="#76E7FB"
          />
          <path
            transform="translate(420,335)"
            d="m0 0h47l26 4 22 5 17 6 9 3 8 4 5 2 9 5 11 6 10 7 12 8 12 10 8 8-1 3-11 3-12 4-10 4-6 1-3-3-3-5-14-11-12-7-11-4-5-4-5-1h-31l-16 3-15 5-13 6-13 7-15 12-8 7-8 9h-2l-2 5-7 10-8 16-6 14-2 8-2 15-1 20-21-3-30-7-21-8-16-7-5-3-18-11-5-3-10-9-10-8-4-4v-2h-3l1-5 10-16 6-7 4-6 5-5 5-6 8-7 5-5 14-12 24-16 19-10 13-6 19-7 21-6 23-4 10-1z"
            fill="#E00D00"
          />
          <path
            transform="translate(514,472)"
            d="m0 0h59l10 3 8 4 4 1 1-4 2 7 8 8v2h2l5 9 4 10 1 5v138l-1 7-8 15-10 12-10 7-11 5-7 2-27 1-28-1-23-3-8-4v-5l-10-11-5-9-9-12-5-11-1-10-3-2-4 2h-6l4-4 20-12 12-8h3l2 9 2 3 7 1 7-4 2-1v5h10v-33l4-4 6-2v39l8-1 1-3h3v2l6 2 6-1 4-4 2-6v-27l-3-9-4-2-8 1-3 3h-1v-24h-10l-1 25-4-2-14-8-23-13-20-11-5-3 1-3 6 2 4-1 2-6 9-16 11-11 8-17 4-5 4-7v-5l7-2-2-2z"
            fill="#FBFBFB"
          />
          <path
            transform="translate(428,330)"
            d="m0 0h31l27 3 24 5 30 10 24 11 15 9 11 7v2l5 2 11 9 13 12 8 7 2 4h2l7 8 8 10 12 17 8 10 7 8 2 5h-2v2l2 1 3 10 8 22 6 26 2 12 2 28v18l-3 28-3 17-6 22-6 17-8 18-9 17-11 17-13 17-12 13-13 13-8 7-16 12-14 9-10 6-16 8-9 4-16 6-19 6-25 5-17 2h-46l-16-2-23-5-14-4-21-7-12-5-8-4-18-5-1-1-7-1-8-4-27-5-17-4-5-1-8-5-15-6-20-11-7-5v-2l-4-2 1-2 22-1 24-3 15-4 3-2-5-5-8-10-11-17-14-27-7-18-5-15-5-24-3-19-7-14-4-13-2-16v-9l1-5 11 2 2-13v-7l-5-13-3-13-1-8v-11l2-18 4-15 7-16 6-11h4l9 11 7 8 3 3h2l8-13 9-12 12-14 17-17 14-11 11-8 9-6 11-6 15-8 24-9 20-6 22-5 15-2zm-8 5-2 1-21 3-16 3-23 7-20 8-24 12-5 4-11 7-10 7-10 9-6 4-7 8-5 5-6 7-5 5-4 6-7 9-7 12v3h3l2 4 10 9 11 9 3 3 11 6 10 6 16 8 21 8 12 4 28 6 16 2 1-20 3-19 6-16 8-16 7-11 3-4v-2l4-2 11-12 8-6 11-9 12-6 15-7 17-5 12-2h31l7 2 5 4 13 5 12 8 12 10 3 5 3 1 13-4 6-3 9-3 9-2v-4l-6-5-5-5-9-8-14-9-15-10-9-4-4-3-11-4-3-2-27-9-24-5-21-3zm82 50-21 3-17 5-18 8-13 8-11 9-5 4-5 5-11 13-11 19-8 19-3 14-1 11v14l1 7-24-3-22-5-27-9-13-5-20-11-14-9-11-8-10-8-24-24-6-8-2-2-6 9-4 10-4 13-3 17v18l4 18 5 13 7 12 15 16v2h-9l-17-3-6-2h-4v9l2 14 5 15 6 11 6 9 7 7 8 6 14 7 12 4 7 1-13 4-6 1h-20l1 4h2l1 5 8 14 9 11 11 9 5 4 11 6 22 8 13 2 14 1 4 1-13 12-16 11-23 12-17 6-17 4-18 2h-10v3l18 10 11 5 26 8 23 5 10 2 29 2h20l26-1 43-7 30-8 13-5 10-3 10-5 21-10 11-7 14-10 13-10 1-3 4-2 13-13v-2h7l-4 5-2 1v2h-2l-1 4-4 2-5 5-7 6v2l-4 2-8 6-3 1-3 3-10 7-19 10-10 5-18 7-10 4-15 5-40 9-23 3-39 2-1 3 16 8 20 8 21 6 19 4 16 2h48l29-4 26-7 13-5 17-7 17-9 16-10 16-12 11-10 8-7 15-16 7-9 6-8 10-15 9-16 8-18 8-22 8-30 3-38v-20l-4-34-6-24-6-16-5-13-9-17-9-14-7-10-8-10-9-10-7-8h-2l-3 7-2 7-7 12-6 10-5 7v7l3 11 2 16h-2l-2-4-4-21-2-6 1-5 10-15 8-13 3-6v-3l-8 1-28 10h-2l-6-8-11-10-14-8-8-4-8-2-1-4-9-1z"
            fill="#030201"
          />
          <path
            transform="translate(673,464)"
            d="m0 0 7 6 5 5 12 13 7 7 6 7 2 1 1 8 2 1 5 40v38l-1 7-1 16-3 16-6 29-3 8-4 14-3 5-4 8-2 6-4 8h-2l-2 8-2 2-2 5h-2l-5 10-5 9-2 1-1 3-6 5h-2l-5 10-5 5-4 2-2 5-8 7h-2l-2 4-5 4h-2l-2 4h-3l-2 4-9 5-1 2-5 3-8 5h-2l-1 3-10 5h-4v2l-10 4-10 6-8 2-9 3h-3v2l-17 5h-7v2l-16 4-1 1-22 2-25 1h-16l-38-2-28-6-22-5-17-5-11-4-20-6-16-3-6-2-8-7-25-25v-3l25 5 22 4 8 4 7 1 7 3 15 4 10 5 14 5 16 6 25 6 18 3 8 1h46l22-3 23-5 30-10 9-4 16-8 9-5 16-10 10-8 8-6 16-15 11-11 11-14 6-8 7-11 8-13 10-21 7-17 5-17 4-16 3-19 2-22v-18l-2-28-5-25-5-19-7-20-3-9v-2z"
            fill="#C6C6C8"
          />
          <path
            transform="translate(521,386)"
            d="m0 0h6l1 4 13 4 14 8 11 9 8 9 1 2 10-3 23-8h5l-1 4-4 8-10 16-7 10 1 8 3 12v11h-4l-4-4-13-4-6-1h-111l-59 1-4-1-2 6-2-2 1-7 8-16 10-16 11-11h2l1-6 7-2 2-5 8-3 8-5 15-7 1-2 10-2 12-3 19-3 21 2v-2h-5z"
            fill="#2BDBFD"
          />
          <path
            transform="translate(673,464)"
            d="m0 0 7 6 5 5 11 12 3 5v3l1 10 3 15 1 2 2 15 1 22v17l-1 27-1 4-1 13-4 15-3 13-5 15-2 9-5 12-5 9-7 15-5 7-4 8-5 6-6 9-9 10-7 9-13 12-7 7-6 4-4 5-8 4-4 3h-3v2l-8 6-8 4-3 3-17 8-4 3-17 6-8 3-19 5-4 2-17 3-15 3-6 1h-53l-38-6-7-2-11-2-17-4-15-6-12-4-4-2-15-2-6-2-11-1-9-1-1-2-4 2-22-22v-3l25 5 22 4 8 4 7 1 7 3 15 4 10 5 14 5 16 6 25 6 18 3 8 1h46l22-3 23-5 30-10 9-4 16-8 9-5 16-10 10-8 8-6 16-15 11-11 11-14 6-8 7-11 8-13 10-21 7-17 5-17 4-16 3-19 2-22v-18l-2-28-5-25-5-19-7-20-3-9v-2z"
            fill="#858586"
          />
          <path
            transform="translate(441,538)"
            d="m0 0 4 1 11 7 35 19 18 10 12 8v-25l2-1 9 1 1 23h2l1-3 8-1 5 3 3 9v27l-3 8-6 4-7-1-3-2v-2h-3l-1 4h-8v-39l-8 4-1 2-1 33h-10l-1-4-5 4-7 1-5-3-2-4-1-7-11 7-15 9-9 6h-5l-2-4v-12l1-16h-6l-1-1v-8l9-1 8 1v9h-7v20l4-2v2l3 1 1 1 5-1 1-53h-11l-1-8h-1l-1 28h-4v-50z"
            fill="#030201"
          />
          <path
            transform="translate(514,472)"
            d="m0 0h59l10 3 8 4 4 1 1-4 2 8-4 1-1-3-10-4-6-2v2h3v7l-2 4h-7l-6 8-1 12-3 1-2-5-5 1-1 1v8l-2 4-4 3-4-2h-2l-2 6-5 5-2 5-1 1h-5-3l-6 10-5 6-3 5-2 5-4 3h-2v2l-5 1-36-20-5-3 1-3 6 2 4-1 2-6 9-16 11-11 8-17 4-5 4-7v-5l7-2-2-2z"
            fill="#DBF7FD"
          />
          <path
            transform="translate(654,452)"
            d="m0 0 4 2 8 14 6 12 5 14 4 11 6 24 2 15v32l-5-3-14-14-4-5-8-7v-2l-4-2-4-5-5-4-7-8-8-7-2-3v-25l6-11 4-4 3-6h2l2-6z"
            fill="#E10D00"
          />
          <path
            transform="translate(479,613)"
            d="m0 0 2 1 2 9 3 6h3l9 4 2 3 1 8 5 5 5 8 6 4v4l7 14 7 4 8 7 5 3 6 7 1 3-7 1-28-1-23-3-8-4v-5l-10-11-5-9-9-12-5-11-1-10-3-2-4 2h-6l4-4 20-12 12-8z"
            fill="#DBF7FD"
          />
          <path
            transform="translate(696,488)"
            d="m0 0 7 6 2 5 1 8 4 23 2 16v43l-3 32-3 12-3 17-7 20-5 13-6 15-6 9-3 6-7 13-2 1-5 9-3 2-4 7-12 13-7 8-4 4h-2l-1 3-8 7-7 6-3 1-2 3h-2v2l-10 6-10 7-8 5-12 6-15 7-16 7-13 4-32 8-19 3-16 1h-35l-29-3-7-2-10-1-16-4-26-7-24-8-26-6-13-1-5-3-1-4 13 2 11 1 12 3 9 1 9 4 18 6 8 3 16 4 10 2 22 4 21 3h53l17-3 13-3 11-2 5-2 9-2 21-7 12-5 8-5 12-6 5-4 8-4 3-3h2v-2l6-3 7-4 5-5 10-8 12-12 7-6 7-9 10-12 5-8 4-5 3-6 6-10 5-11 6-11 5-14 4-13 4-14 3-14 2-7 1-13 1-4 1-27v-17l-1-22-2-15-3-13-2-13 1-3-3-3z"
            fill="#B2B3B4"
          />
          <path
            transform="translate(691,484)"
            d="m0 0 4 2 4 6v3l1 10 3 15 1 2 2 15 1 22v17l-1 27-1 4-1 13-4 15-3 13-5 15-2 9-5 12-5 9-7 15-5 7-4 8-5 6-6 9-9 10-7 9-13 12-7 7-6 4-4 5-8 4-4 3h-3v2l-8 6-8 4-3 3-17 8-4 3-17 6-8 3-19 5-4 2-17 3-15 3-6 1h-53l-38-6-7-2-11-2-17-4-15-6-12-4-4-2-15-2-6-2-11-1-9-1-1-2-4 2-4-5 5-1 21 3 24 5 24 9 30 8 13 3h6l4 2 27 3h46l23-3 1-1h8v-2l13-3h7l17-5 2 1v-2h2v-2l12-4h2l1-2 5-1 14-7 8-5 4-4 9-4 2-3 4-1 12-9 3-1 2-4 4-4 5-3 6-5 5-7 5-4 1-3h3l6-9 4-5 6-7 7-13h2v-2h2l2-6 5-8 4-10 5-11 5-13 4-17 3-9v-6l1-4 4-10 1-7 1-19v-45l-2-19-4-21-4-22z"
            fill="#929293"
          />
          <path
            transform="translate(200,616)"
            d="m0 0 5 5 1 2 5 3 5 4 4 2 1 3 3 3-15 2-1 1v5l4 9 3 5v2h2l8 11 2 4 4 2 11 11 11 8 8 3 20 7 16 3 2 3-5 5-5 2v2l-14 9-14 7-6 1-10-11-14-20-3-6-9-16-9-24-3-7-5-21-2-9z"
            fill="#DC0D00"
          />
          <path
            transform="translate(241,784)"
            d="m0 0 25 5 22 4 8 4 7 1 7 3 15 4 10 5 14 5 16 6 25 6 18 3 8 1h46l22-3 10-1 1 3h-4v2l-8 1-6 2-19 2h-45l-27-3-6-2-7-1-21-5-19-5-15-6-14-4-24-5-20-2-4-2-15-15z"
            fill="#848485"
          />
          <path
            transform="translate(314,707)"
            d="m0 0 4 1-3 5-5 5-5 4-5 5-12 8-5 3-13 7-7 3h-6l-1 3-21 6-1 4 7 1 1-2 2 1 1 1 15-3 3-2 3 1-1 7h7v-8l4-5h10l1 6v7l1 5-1 1-14-1h-12l2 3 12 2 8 6 4 2 9 2v2l31 1 9 1v1h-20l-29-2-25-5-14-4-22-7-16-8-11-6 1-3h9l18-2 24-6 18-8 17-9 16-12z"
            fill="#36CEF6"
          />
          <path
            transform="translate(710,503)"
            d="m0 0h2l1 8 2 1 5 40v38l-1 7-1 16-3 16-6 29-3 8-4 14-3 5-4 8-2 6-4 8h-2l-2 8-2 2-2 5h-2l-5 10-5 9-2 1-1 3-6 5h-2l-5 10-5 5-4 2-2 5-8 7h-2l-2 4-5 4h-2l-2 4h-3l-2 4-9 5-1 2-5 3-8 5h-2l-1 3-10 5h-4v2l-10 4-10 6-8 2-9 3h-3v2l-17 5h-7v2l-16 4-1 1-22 2-25 1h-16l-38-2-28-6-22-5-17-5-11-4-20-6-16-3-5-1v-2h8l15 3 24 7 11 4 9 3 26 6 12 3 24 3 20 2h24l32-2 16-3 27-7 12-3 8-4 14-5 5-3 10-4 12-6 12-8 14-10 1-2 7-4 8-7 5-5 4-3h2l2-4 7-8 3-1 2-5 3-1 1-4 15-18 7-13 4-5 7-14 4-9 3-6 5-13 5-14 2-10 3-12 3-16 3-31 1-21-1-20-5-36z"
            fill="#D3CFCF"
          />
          <path
            transform="translate(696,488)"
            d="m0 0 5 4 1 4 1 11 5 27 1 15v40l-2 24-3 18-4 18-4 13-2 5-1 5h-2l-1 6-3 7-3 8-5 8-6 12-3 5-5 8-2 1-5 9-3 3-3 5h-2l-2 4-9 10-5 5-5 6-6 5-5 5-9 7-5 4h-2v2l-5 2-5 4-3 1-3 3-9 5h-2v2l-9 4-14 7-16 7-15 5-44 10-16 1h-40l-16-1-31-5-24-5-19-6-7-3-17-5-13-3-23-4h-2l-1-3 9 1 11 1 12 3 9 1 9 4 18 6 8 3 16 4 10 2 22 4 21 3h53l17-3 13-3 11-2 5-2 9-2 21-7 12-5 8-5 12-6 5-4 8-4 3-3h2v-2l6-3 7-4 5-5 10-8 12-12 7-6 7-9 10-12 5-8 4-5 3-6 6-10 5-11 6-11 5-14 4-13 4-14 3-14 2-7 1-13 1-4 1-27v-17l-1-22-2-15-3-13-2-13 1-3-3-3z"
            fill="#A4ADB0"
          />
          <path
            transform="translate(337,578)"
            d="m0 0 9 1 1 1 2 17v14h2v-8l4-24h10l4 30 2-12 2-18h10v9l-5 25-2 13-2 1h-9l-2-7-2-14v-10h-2l-1 14-3 16-3 1h-8l-3-13-5-31z"
            fill="#030201"
          />
          <path
            transform="translate(206,432)"
            d="m0 0 4 5 12 13 17 17-1 2-3-1-6-7-4-3-4 4 1 8-2 4h-5l-2 4v6l2 1-8 10-5-1v-8l-2-6-5-1v33l1 4-2 4-4-16-1-5v-18l5-25 5-11 3-7z"
            fill="#35D1FA"
          />
          <path
            transform="translate(573,577)"
            d="m0 0 10 2 5 6 1 3v16l-18 1v11l7 2 1-8h10v7l-3 6-5 4-9 1-6-2-5-5-2-8v-22l3-8 4-4z"
            fill="#030201"
          />
          <path
            transform="translate(477,564)"
            d="m0 0 5 1 18 10 4 2-3 2v16l-3 3-6 4v-23h-10l-1 30-10 6-4 2v-44l1-1h9z"
            fill="#EFEFEF"
          />
          <path
            transform="translate(304,562)"
            d="m0 0h25l6 1 1 5-1 5h-10v53l-1 1h-10l-1-54h-9z"
            fill="#030201"
          />
          <path
            transform="translate(502,385)"
            d="m0 0h16l8 2v2l-23-1-27 5-4 2h-8l-1 3-15 7-9 6-7 1-1 5-3 2h-5l-1 6-7 6-4 5h-2l-2 5-7 11-8 16-3 7-5 19-1 10v20l-3 2-2-9v-14l2-16 3-11 8-19 11-18 12-14 5-5 13-10 9-6 16-8 13-5 15-4z"
            fill="#D3E5E9"
          />
          <path
            transform="translate(411,566)"
            d="m0 0h9l2 2v10l6 1v8l-6 2v26l2 2 4 1v9h-12l-5-6v-33h-5v-9h4v-11z"
            fill="#030201"
          />
          <path
            transform="translate(188,560)"
            d="m0 0 5 1-1 5 3 1h7l-3 2 5 1 4 1h7l5-1-2 3 7 2-4 6-13 2-8-1 1 5 4 2 1 6-1 1h-5l1 5 9 1 3 6v9l-3 3-9-9-9-16-1-10-3-13z"
            fill="#32D2FC"
          />
          <path
            transform="translate(420,335)"
            d="m0 0h32v1l-32 2-33 6-15 4-20 7-14 6-19 10-16 10-10 8-9 7-10 9-12 12-8 11h-2l-2 4-9 11-7 12h-3l1-5 10-16 6-7 4-6 5-5 5-6 8-7 5-5 14-12 24-16 19-10 13-6 19-7 21-6 23-4 10-1z"
            fill="#D6D5D6"
          />
          <path
            transform="translate(298,560)"
            d="m0 0 3 1-1 9h2v4l11-2 1 1v57h-2v2l-4 1-2-3 1-7v-21l1-10h-2l-1-13-2-1 1 5-2 1-3-3-2-4h-4l-4 5-3-1 1-7 4-3 3-7z"
            fill="#77D6E7"
          />
          <path
            transform="translate(242,691)"
            d="m0 0 5 2 7 6 10 3 17 6 16 3 2 3-5 5-5 2v2l-9 6-4-2-9-10-11-11-6-7-2-1v-2l-5-2z"
            fill="#8E0200"
          />
          <path
            transform="translate(314,707)"
            d="m0 0 4 1-3 5-5 5-5 4-5 5-12 8-5 3-13 7-7 3h-6l-1 3-18 5-9 2-20 1-1 3-5-2-4-2 1-3h9l18-2 24-6 18-8 17-9 16-12z"
            fill="#DDF1F5"
          />
          <path
            transform="translate(390,578)"
            d="m0 0h7l3 2v47h-10l-1-1v-47z"
            fill="#030201"
          />
          <path
            transform="translate(197,478)"
            d="m0 0 4 2 2 6-1 8 5 1 2 2 1 4v10l-3 8-8-3-1-6-2 3-2-1v-30l1-3z"
            fill="#30D2FD"
          />
          <path
            transform="translate(443,563)"
            d="m0 0 2 1v8h11v50l-1 3-5 1v2l-2-1v-2l-3-2-3 1v-20h6l1 3 4-1 1 5 1-38-6 1-1 6-3 1v3h-2v6h-1v-26z"
            fill="#B4B3B4"
          />
          <path
            transform="translate(441,543)"
            d="m0 0 5 1 11 6 11 7 8 3v1l-7 1-21 1-1 1-1 8h-1l-1-8-3 1z"
            fill="#D30E02"
          />
          <path
            transform="translate(403,440)"
            d="m0 0h1l-1 7-10 18-4 10-5 19-1 10v20l-3 2-2-9v-14l2-16 3-11 8-19 9-15z"
            fill="#E8EDEF"
          />
          <path
            transform="translate(200,616)"
            d="m0 0 5 5 1 2 5 3 5 4 4 2 1 3 3 3-15 2-1 1v5l4 9 1 6 2 8-1 4-7-17-5-21-2-9z"
            fill="#D70C00"
          />
          <path
            transform="translate(608,411)"
            d="m0 0h5l-1 4-4 8-10 16-6 9-1-3 4-8 2-1 2-5-2-4-3-1-1-4-9 3-6 1-2-3 9-4z"
            fill="#3ACFF4"
          />
          <path
            transform="translate(297,504)"
            d="m0 0 20 7 19 6-4 2v3l-4-1-1-2-8-1 1 4-3 1-8-4h-8l-3-4-1-5v-3z"
            fill="#6CE3F9"
          />
          <path
            transform="translate(206,432)"
            d="m0 0 4 5 1 2-3 1-5 8-5 16-4 16-2 15v13l-2-4-1-5v-18l5-25 5-11 3-7z"
            fill="#DEF7FC"
          />
          <path
            transform="translate(448,573)"
            d="m0 0h7v40l-3-4 1-3-4 1-1-3 1-10h-7l1-10h2v-3l3-3z"
            fill="#F9F8F9"
          />
          <path
            transform="translate(336,599)"
            d="m0 0 4 1 4 26-2 6-5-2-4-2-1 1h-5l-1-3h2l2-5 1-3v-10l3-2 2 5 1-4-3-3 1-4z"
            fill="#69E2F8"
          />
          <path
            transform="translate(533,587)"
            d="m0 0h7l1 4v24l-4 4-5-2v-28z"
            fill="#EDEDEE"
          />
          <path
            transform="translate(184,555)"
            d="m0 0 6 1 14 3 21 2 2 1v2l-3 1h-13l-16-4-7-1 2 17 2 10 1 6h-2l-5-15-2-14z"
            fill="#CDDBDE"
          />
          <path
            transform="translate(521,386)"
            d="m0 0h6v5h-20l-1 3h2v2l2 1-3 3h-6l-2-1-9-1v-3l1-1h5v-3l-9 2-4 1-6-1v2l3 1-8-1 4-3 28-5 14 1 8 1v-2h-5z"
            fill="#41D4F9"
          />
          <path
            transform="translate(420,335)"
            d="m0 0h32v1l-32 2-33 6-15 4-20 7-12 5-4-2 14-6 14-5 21-6 23-4 10-1z"
            fill="#A0A0A1"
          />
          <path
            transform="translate(619,407)"
            d="m0 0 4 2 10 11 9 11-1 4 2 5-7-6-6-6v-2h-2v-2l-4-2-3-4v-2h-4l1-5z"
            fill="#D30B00"
          />
          <path
            transform="translate(314,707)"
            d="m0 0 4 1-3 5-5 5-5 4-5 5-12 8-10 6-3-1 3-1v-2l5-3 4-5 14-10z"
            fill="#DEF5FA"
          />
          <path
            transform="translate(327,591)"
            d="m0 0 4 2 6 2v3l2 1-4 2 1 4 2 1-1 6-3-3-1-2-1 4v7l-4 8-2-1 1-30-1-2z"
            fill="#2ADBFD"
          />
          <path
            transform="translate(334,634)"
            d="m0 0h2l1 6-1 3h2l4 5 4 7 5 2-1 6 4-1v2h2l1-2 3 2 2 5-1 3-3-1-2 2-4-6-3-2-1-5-5-1-4-7-7-3 1-6z"
            fill="#76E9FD"
          />
          <path
            transform="translate(262,410)"
            d="m0 0h2l-1 5-4 6-5 7h-2l-2 4-9 11-7 12h-3l1-5 10-16 6-7 4-6 5-5z"
            fill="#E5E5E5"
          />
          <path
            transform="translate(298,560)"
            d="m0 0 3 1-1 9h2l1 10v4l-3-1-3-6h-4l-4 5-3-1 1-7 4-3 3-7z"
            fill="#73E8FD"
          />
          <path
            transform="translate(338,575)"
            d="m0 0h4v2l8-1 4 2 1 5-4 28h-2l-3-31-8-2z"
            fill="#79D1E1"
          />
          <path
            transform="translate(254,638)"
            d="m0 0 3 1-1 3-8 3-6 2-10 1h-11l-9-2v-3h20l13-3z"
            fill="#D6EAEF"
          />
          <path
            transform="translate(433,409)"
            d="m0 0h7l-1 2-7 1-1 5-3 2h-5l-1 6-7 6-4 5h-2l-2 5-3 3-1-3-2 1 2-4 11-13 5-5 13-10z"
            fill="#D2E7EC"
          />
          <path
            transform="translate(608,411)"
            d="m0 0h5l-1 4-2 5-2-3-4 1-15 5-7 3-5-1v-3l20-7z"
            fill="#DBEEF2"
          />
          <path
            transform="translate(284,731)"
            d="m0 0 2 1-5 5h-3v2l-9 7-6 2h-6l-1 3-7 1 1-2-2-2 19-8z"
            fill="#DEE9EC"
          />
          <path
            transform="translate(197,478)"
            d="m0 0 4 2 2 6-1 11-2 1-1 8-2-1-2 3v-21l1-8z"
            fill="#2ADCFE"
          />
          <path
            transform="translate(442,607)"
            d="m0 0 1 2h2l5 5 4 5 1 6-5 1v2l-2-1v-2l-3-2-3 1z"
            fill="#918E8F"
          />
          <path
            transform="translate(359,596)"
            d="m0 0h2l3 24v4l-4 1-2-1v2h-2l-1-4z"
            fill="#72D0E2"
          />
          <path
            transform="translate(200,616)"
            d="m0 0 4 4-1 4 2 13 4 10 3 8 1 6 2 8-1 4-7-17-5-21-2-9z"
            fill="#A3A3A4"
          />
          <path
            transform="translate(502,385)"
            d="m0 0h16l8 2v2l-23-1-20 4h-7l1-3 15-3z"
            fill="#C4D7DC"
          />
          <path
            transform="translate(267,488)"
            d="m0 0 8 4 2 4 3 2v2l-3 1-1 2-5 1-3-2 1-6h-2v-2h-8v-3l2-1h3 2v2l2-1z"
            fill="#71E2F6"
          />
          <path
            transform="translate(229,757)"
            d="m0 0h5l-4 2-6 7-5-1-9-1-2-1 1-5z"
            fill="#33DAFD"
          />
          <path
            transform="translate(498,601)"
            d="m0 0h3v13l-3 4h-5l-1-2v-10z"
            fill="#E6E6E6"
          />
          <path
            transform="translate(391,560)"
            d="m0 0h7l3 4v5l-5 4-5-1-2-3v-6z"
            fill="#030201"
          />
          <path
            transform="translate(194,598)"
            d="m0 0 3 1 3 3 6 2 4 5v6h3l-2 5-7-6-4-5z"
            fill="#49CEEA"
          />
          <path
            transform="translate(328,665)"
            d="m0 0 5 2v3l-2 8v6h-4v-8l-6-4v-4z"
            fill="#76E9FD"
          />
          <path
            transform="translate(333,581)"
            d="m0 0h2l2 2 2 15h-2l-1-3-5-1-3-4v-7z"
            fill="#70DFF3"
          />
          <path
            transform="translate(296,594)"
            d="m0 0h7l-1 3 2 1 1 8h-9l-2-1v-10z"
            fill="#76E9FD"
          />
          <path
            transform="translate(590,453)"
            d="m0 0 2 4 3 12-1 3-3-3-2 1-1-3-7-1-3-2-1-7 2-2 4 8 2-3 1 4h2v-2h2l-1-7z"
            fill="#39CAF0"
          />
          <path
            transform="translate(334,553)"
            d="m0 0 4 1 1 9h-2l-1 3-1-3h-12l-1-2-10-1v-1l5-1h9l5 2h4l-2-2z"
            fill="#6AD0E5"
          />
          <path
            transform="translate(314,707)"
            d="m0 0 4 1-3 5-7 7-5 2-5 1v2l-5 1 5-5 11-9z"
            fill="#E5EDEF"
          />
          <path
            transform="translate(442,604)"
            d="m0 0h6l1 3 4-1 1 5 1 2v9l-3-4-5-5-2-4h-2z"
            fill="#C7C5C7"
          />
          <path
            transform="translate(191,560)"
            d="m0 0 8 1 12 3h16v-2l4 1-3 3-5 2h-8l-9-2h-8l3-1v-2l-9 1z"
            fill="#40D7FD"
          />
          <path
            transform="translate(191,570)"
            d="m0 0 4 4 1 3-1 8 2 6 1 2-1 3-5-2-2-12v-5l1-1-1-2z"
            fill="#2CDAFD"
          />
          <path
            transform="translate(195,472)"
            d="m0 0 2 1-2 9v30l1 4-2 4-3-12v-13l3-20z"
            fill="#76E1F4"
          />
          <path
            transform="translate(251,477)"
            d="m0 0 8 5-3 1 3 1 2 4h-3v2l-6-1-4-5-1-6h2v2h2z"
            fill="#6FE1F6"
          />
          <path
            transform="translate(572,586)"
            d="m0 0h5l2 3v7l-1 1h-8v-8z"
            fill="#E4E4E4"
          />
          <path
            transform="translate(197,542)"
            d="m0 0h2v2h2l6 9v3l-7-1-4-2z"
            fill="#B20902"
          />
          <path
            transform="translate(325,576)"
            d="m0 0h2v18l1 1-1 22h-2z"
            fill="#52D1EF"
          />
          <path
            transform="translate(257,748)"
            d="m0 0h6l1 3-16 5-14 3v-3l20-5z"
            fill="#48D9FD"
          />
          <path
            transform="translate(311,576)"
            d="m0 0h1l1 8v43l-2-1v-33l-1-1v-10z"
            fill="#2ED8FD"
          />
          <path
            transform="translate(367,588)"
            d="m0 0 3 3 2-1-1 16-2 4-2-7-1-13z"
            fill="#7CC9D8"
          />
          <path
            transform="translate(554,402)"
            d="m0 0 6 4 9 8-2 2-5-1-3-3-4-1-3-3 4-1z"
            fill="#55CBE4"
          />
          <path
            transform="translate(205,561)"
            d="m0 0h20l2 1v2l-3 1h-13l-5-1z"
            fill="#E9FAFD"
          />
          <path
            transform="translate(193,478)"
            d="m0 0 1 2-2 15v13l-2-4-1-5v-18z"
            fill="#C3D7DB"
          />
          <path
            transform="translate(355,624)"
            d="m0 0 1 2h2v-2h6l-1 3-1 1-4 1v-2l-3 3v2l-6 1v-3l-4-1-1-2 11-1z"
            fill="#5DDFF8"
          />
          <path
            transform="translate(187,560)"
            d="m0 0h1l2 17 2 10 1 6h-2l-5-15v-17z"
            fill="#7EDDEE"
          />
          <path
            transform="translate(378,503)"
            d="m0 0h3l2 21-3 2-2-9z"
            fill="#DFE5E6"
          />
          <path
            transform="translate(195,522)"
            d="m0 0 5 2 5-2v6h-3l3 5v2h-2l-1 2-7-14z"
            fill="#42CAED"
          />
          <path
            transform="translate(275,398)"
            d="m0 0h4l-2 4-6 5-3 5-4 1 1-5 7-8z"
            fill="#D1D1D1"
          />
          <path
            transform="translate(207,646)"
            d="m0 0 2 1 3 8 1 6 2 8-1 4-7-17z"
            fill="#959596"
          />
          <path
            transform="translate(590,417)"
            d="m0 0 3 1-4 5-7 3-5-1v-3z"
            fill="#D7E6EA"
          />
          <path
            transform="translate(308,719)"
            d="m0 0 3 1-7 8-3 1-4 4-4 1-2-2 12-8z"
            fill="#49DAFD"
          />
          <path
            transform="translate(290,385)"
            d="m0 0 2 1 1 3-9 7-5 3-3-2 11-9z"
            fill="#CCCBCC"
          />
          <path
            transform="translate(209,758)"
            d="m0 0h20v1h-5v2l-12 1-2 2-2-1z"
            fill="#77E5F9"
          />
          <path
            transform="translate(196,463)"
            d="m0 0h1l-1 9-3 7-3 1 1-11 1-2h2z"
            fill="#E1F0F3"
          />
          <path
            transform="translate(209,544)"
            d="m0 0 3 1 6 7 4 3v2h2l3 5-7-1v-3l-9-9z"
            fill="#66C8DE"
          />
          <path
            transform="translate(199,755)"
            d="m0 0h16l1 3-7 1-1 3-5-2-4-2z"
            fill="#CFDFE3"
          />
          <path
            transform="translate(205,623)"
            d="m0 0 5 2 6 5 4 2 1 3 3 3h-6l-2-4-7-6v-2h-2l-1 2z"
            fill="#8E0200"
          />
          <path
            transform="translate(262,410)"
            d="m0 0h2l-1 5-4 6-4 4v-3l-3-1 5-5z"
            fill="#C2C1C2"
          />
          <path
            transform="translate(354,351)"
            d="m0 0h4v2l-13 5-7 2-2-2 14-6z"
            fill="#C2C1C2"
          />
          <path
            transform="translate(251,422)"
            d="m0 0h4l-1 6h-2l-2 4h-3l-5 4 2-4 4-5z"
            fill="#D0CFD0"
          />
          <path
            transform="translate(433,409)"
            d="m0 0h7l-1 2-7 1-1 5-3 2h-6l5-5z"
            fill="#D4EAEF"
          />
          <path
            transform="translate(258,744)"
            d="m0 0 5 2v2h-6l-1 3-7 1 1-2-2-2z"
            fill="#D4E9EE"
          />
          <path
            transform="translate(213,621)"
            d="m0 0h4v2h3v-2l6 3v6l-10-5z"
            fill="#44C3E4"
          />
          <path
            transform="translate(569,415)"
            d="m0 0 5 5 4 5 9-1-3 5-4-1-5-2-4-4-2-3z"
            fill="#44D0F3"
          />
          <path
            transform="translate(384,485)"
            d="m0 0 1 4-3 23h-1v-9h-2v-6l3-1 1-8z"
            fill="#DCF8FE"
          />
          <path
            transform="translate(403,440)"
            d="m0 0h1l-1 7-4 7-1-2h-2l1-5 3-5z"
            fill="#E0F0F4"
          />
          <path
            transform="translate(542,703)"
            d="m0 0 3 1-2 4-4 3v-3l-4-1-3-1v-2z"
            fill="#3AC9EE"
          />
          <path
            transform="translate(188,560)"
            d="m0 0 5 1-2 13 1 3h-3l-1-5z"
            fill="#2FD3FD"
          />
          <path
            transform="translate(668,475)"
            d="m0 0 2 1 8 20 1 7-2-2-4-10-2-3-1-8-2-1z"
            fill="#8E0200"
          />
          <path
            transform="translate(403,338)"
            d="m0 0h10l-3 2-21 3-4-2z"
            fill="#A9A9AA"
          />
          <path
            transform="translate(301,378)"
            d="m0 0h3l-2 4-8 6-3-1 1-3z"
            fill="#E0E0E0"
          />
          <path
            transform="translate(608,411)"
            d="m0 0h5l-1 4-2 5-2-3-5-1-1-3z"
            fill="#B8CBD0"
          />
          <path
            transform="translate(464,395)"
            d="m0 0h8l-4 2h-3l-1 3h-3v2l-9 3v-3l11-5z"
            fill="#54DDFD"
          />
          <path
            transform="translate(493,389)"
            d="m0 0 4 1-10 3-4 1-6-1v2l3 1-8-1 4-3z"
            fill="#58DFFD"
          />
          <path
            transform="translate(196,451)"
            d="m0 0 2 3-1 3v6l-2 5-3-1 2-11z"
            fill="#E1E3E3"
          />
          <path
            transform="translate(252,635)"
            d="m0 0h2v2l6 1-1 4-9 4-4-1 3-2 7-2 1-2h-6l-1-3z"
            fill="#77E3F5"
          />
          <path
            transform="translate(445,622)"
            d="m0 0 1 2 3 1-1 5-6 1v-7z"
            fill="#D8180C"
          />
          <path
            transform="translate(338,575)"
            d="m0 0h4v2l8-1 1 2-3 7h-1l-1-5-8-2z"
            fill="#64D8EF"
          />
          <path
            transform="translate(576,441)"
            d="m0 0 4 2 2 4-3 1-1 4h-2l-1-5z"
            fill="#31D2FD"
          />
          <path
            transform="translate(522,724)"
            d="m0 0 4 1-13 10-2-1 2-5 4-1z"
            fill="#45C3E4"
          />
          <path
            transform="translate(236,443)"
            d="m0 0 4 1-6 11h-3l1-5z"
            fill="#BFBDBE"
          />
          <path
            transform="translate(206,432)"
            d="m0 0 4 5 1 2-3 1-2 3-2-1v-3l-2-1z"
            fill="#C2D1D5"
          />
          <path
            transform="translate(504,386)"
            d="m0 0h17l5 1v2l-22-1z"
            fill="#DCF8FE"
          />
          <path
            transform="translate(240,627)"
            d="m0 0m-2 1h2l-1 5 9 1v2l-4 1-9-3z"
            fill="#45C7E9"
          />
          <path
            transform="translate(205,443)"
            d="m0 0 2 4 3 5h-2l-1 2h-3l-2-3 1-5z"
            fill="#47E0FD"
          />
          <path
            transform="translate(191,560)"
            d="m0 0 8 1 12 3v1l-13 1 3-1v-2l-9 1z"
            fill="#55DEFD"
          />
          <path
            transform="translate(257,748)"
            d="m0 0h6l1 3-5 2h-10v-1l7-2z"
            fill="#76E9FD"
          />
          <path
            transform="translate(584,447)"
            d="m0 0 2 2v3h2l1-4 2 1-4 7-3 1-1-2v-7z"
            fill="#33D0F9"
          />
          <path
            transform="translate(334,359)"
            d="m0 0h4l-1 3-9 4-4-2z"
            fill="#D4D4D4"
          />
          <path
            transform="translate(245,776)"
            d="m0 0h9l4 2v2l-4 1-9-3z"
            fill="#50CEEA"
          />
          <path
            transform="translate(213,646)"
            d="m0 0h5l3 9 2 4h-3l-5-8v-4z"
            fill="#6FCBDD"
          />
          <path
            transform="translate(244,749)"
            d="m0 0 4 1-4 1v2l-11 1-2-2z"
            fill="#DFE0E0"
          />
          <path
            transform="translate(315,627)"
            d="m0 0h8l-4 2 1 3h-2l-1 2h5l-4 2h-3z"
            fill="#76E9FD"
          />
          <path
            transform="translate(195,558)"
            d="m0 0 16 2v1l-5 1-3 1-8-2z"
            fill="#C6D7DB"
          />
          <path
            transform="translate(317,558)"
            d="m0 0h9l5 2v1h-13l-6-1v-1z"
            fill="#76E9FD"
          />
          <path
            transform="translate(311,576)"
            d="m0 0h1l1 16h-3v-10z"
            fill="#2ADCFE"
          />
          <path
            transform="translate(301,562)"
            d="m0 0 3 1 1 11h-3v-4h-2z"
            fill="#44C2DB"
          />
          <path
            transform="translate(223,561)"
            d="m0 0 4 1v2l-3 1h-13v-2h12z"
            fill="#DCF8FE"
          />
          <path
            transform="translate(467,557)"
            d="m0 0 9 3v1h-22v-1l12-1z"
            fill="#8D8D8E"
          />
          <path
            transform="translate(202,439)"
            d="m0 0h2l1 3-5 8-3 1 3-10z"
            fill="#EBEBEB"
          />
          <path
            transform="translate(311,637)"
            d="m0 0 5 1-1 3-9 1 1-4z"
            fill="#76E9FD"
          />
          <path
            transform="translate(316,511)"
            d="m0 0 14 4 1 2-9-1-5-2z"
            fill="#52CBE4"
          />
          <path
            transform="translate(336,599)"
            d="m0 0 4 1-1 7h-3l-2-3 1-4z"
            fill="#77DFF2"
          />
          <path
            transform="translate(281,496)"
            d="m0 0 9 4v2h-2v2l-7-2 3-1-3-3z"
            fill="#5DD6EE"
          />
          <path
            transform="translate(232,672)"
            d="m0 0h2v3l4 2 4 4-2 2-9-8z"
            fill="#62C1D7"
          />
          <path
            transform="translate(530,693)"
            d="m0 0 5 1 4 3h-11v-3z"
            fill="#FDFDFD"
          />
          <path
            transform="translate(452,630)"
            d="m0 0 2 1-6 7h-6l4-4z"
            fill="#C5D9DE"
          />
          <path
            transform="translate(474,390)"
            d="m0 0 3 1-3 3-7 1-1-3z"
            fill="#CCE0E5"
          />
          <path
            transform="translate(309,666)"
            d="m0 0 4 2-1 4-5-1v-4z"
            fill="#76E9FD"
          />
          <path
            transform="translate(205,536)"
            d="m0 0 4 2 2 3-5 2-3-5z"
            fill="#45CEF0"
          />
          <path
            transform="translate(597,436)"
            d="m0 0h2l-2 4-5 8-1-3 4-8z"
            fill="#4BBAD8"
          />
          <path
            transform="translate(275,398)"
            d="m0 0h4l-2 4-2 2h-4l1-4z"
            fill="#E5E5E6"
          />
          <path
            transform="translate(390,777)"
            d="m0 0h9v3l-7 1-5-1z"
            fill="#73E8FD"
          />
          <path
            transform="translate(331,516)"
            d="m0 0 5 1-4 2v3l-4-1-1-4z"
            fill="#72D9EC"
          />
          <path
            transform="translate(230,766)"
            d="m0 0 4 2v2h6v2h-7l-2-1v-2l-3-1z"
            fill="#2DDBFD"
          />
          <path
            transform="translate(248,749)"
            d="m0 0 3 1-2 3-7 2-4-1 1-1h5v-2z"
            fill="#DFF8FD"
          />
          <path
            transform="translate(222,661)"
            d="m0 0 6 3 2 5-2 2-6-8z"
            fill="#53C2DE"
          />
          <path
            transform="translate(197,542)"
            d="m0 0h2v12l-3-1z"
            fill="#C2C1C2"
          />
          <path
            transform="translate(388,489)"
            d="m0 0h2v6l-5 1 1-6z"
            fill="#2ADCFE"
          />
          <path
            transform="translate(435,411)"
            d="m0 0 4 1-2 4-6 1 1-5z"
            fill="#70E7FD"
          />
          <path
            transform="translate(230,460)"
            d="m0 0 4 2 5 6h-4l-5-6z"
            fill="#3DC6EA"
          />
          <path
            transform="translate(644,438)"
            d="m0 0h3l3 5-1 3-5-5z"
            fill="#CC0A00"
          />
          <path
            transform="translate(569,428)"
            d="m0 0 4 1-1 4-3 1-2-2v-3z"
            fill="#31D2FD"
          />
          <path
            transform="translate(553,407)"
            d="m0 0 5 1 3 1-1 3-5-1-3-3z"
            fill="#76E9FD"
          />
          <path
            transform="translate(449,403)"
            d="m0 0 3 1-3 3h-2l1 3h-8l4-3z"
            fill="#53DDFD"
          />
        </svg>
      </div>
    </Link>
  );
}

export default Logo;
