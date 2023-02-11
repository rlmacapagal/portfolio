import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import mongodb from "../public/mongodb.png";
import bridge from "../public/bridge.png";
import ReactIcon from "../public/react.png";
import expressIcon from "../public/express.png";
import nodeIcon from "../public/nodejs.png";
import reduxIcon from "../public/redux.png";
import awsIcon from "../public/aws.png";
import muiIcon from "../public/mui.png";
import v88 from "../public/v88.png";
import htmlIcon from "../public/html.png";
import cssIcon from "../public/css.png";
import jsIcon from "../public/js.png";
import phpIcon from "../public/php.png";
import mysqlIcon from "../public/mySQL.png";
import angularIcon from "../public/angular.png";
import codeIgniter from "../public/codeIgniter.png";

type Props = {};

const ExperienceCard2 = (props: Props) => {
  return (
    <article>
      <div
        style={{
          height: "auto",
          backgroundColor: "#292929",
          marginTop: "12%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          borderRadius: "20px",
          minHeight: "60vh",
          paddingBottom: "3vh",
        }}
        className="md:mt-5 px-0 md:px-10 md:w-fit w-80 mb-0"
      >
        <div>
          <Image
            src={v88}
            alt="Image"
            className="relative rounded-full mx-auto object-cover"
            style={{
              height: "auto",
              width: "6vw",
              marginTop: "5vh",
              minWidth: "10vh",
            }}
          />
        </div>
        <h1 className="text-2xl font-semibold mt-6">BOOTCAMP TRAINEE</h1>
        <h3 className="text-1xl mt-4 mb-3">Company: Village 88</h3>
        <div className="flex flex-row flex-wrap" style={{ width: "auto" }}>
          <div
            className="rounded-full"
            style={{
              height: "45px",
              width: "45px",
              marginTop: "1vh",
              borderRadius: "50%",
              marginRight: "2vh",
            }}
          >
            <Image
              src={htmlIcon}
              alt="Image"
              style={{
                height: "auto",
                objectFit: "cover",
                width: "100%",
              }}
            />
          </div>

          <div
            style={{
              height: "45px",
              width: "45px",
              marginTop: "1vh",
              borderRadius: "50%",
              marginRight: "2vh",
            }}
          >
            <Image
              src={cssIcon}
              alt="Image"
              style={{
                height: "auto",
                objectFit: "cover",
                width: "100%",
              }}
            />
          </div>
          <div
            style={{
              height: "45px",
              width: "45px",
              marginTop: "1vh",
              borderRadius: "50%",
              marginRight: "2vh",
            }}
          >
            <Image
              src={jsIcon}
              alt="Image"
              style={{
                height: "auto",
                objectFit: "cover",
                width: "100%",
              }}
            />
          </div>
          <div
            style={{
              height: "45px",
              width: "45px",
              marginTop: "1vh",
              borderRadius: "50%",
              marginRight: "2vh",
            }}
          >
            <Image
              src={phpIcon}
              alt="Image"
              style={{
                height: "auto",
                objectFit: "cover",
                width: "100%",
              }}
            />
          </div>
          <div
            style={{
              height: "45px",
              width: "45px",
              marginTop: "1vh",
              borderRadius: "50%",
              marginRight: "2vh",
            }}
          >
            <Image
              src={mysqlIcon}
              alt="Image"
              style={{
                height: "auto",
                objectFit: "cover",
                width: "100%",
              }}
            />
          </div>
          <div
            style={{
              height: "45px",
              width: "45px",
              marginTop: "1vh",
              borderRadius: "50%",
              marginRight: "2vh",
            }}
          >
            <Image
              src={angularIcon}
              alt="Image"
              style={{
                height: "auto",
                objectFit: "cover",
                width: "100%",
              }}
              className="rounded-full"
            />
          </div>
          <div
            style={{
              height: "45px",
              width: "45px",
              marginTop: "1vh",
              borderRadius: "50%",
              marginRight: "2vh",
            }}
          >
            <Image
              src={codeIgniter}
              alt="Image"
              style={{
                height: "auto",
                objectFit: "cover",
                width: "100%",
              }}
              className="rounded-full"
            />
          </div>
        </div>
        <p className="pt-10">
          Description: Intense 6 month bootcamp training program that covered
          fullstack web development using php, mysql, nodeJs, React and Angular.
        </p>
      </div>
    </article>
  );
};

export default ExperienceCard2;
