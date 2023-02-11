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

type Props = {};

const ExperienceCard = (props: Props) => {
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
            src={bridge}
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
        <h1 className="text-2xl font-semibold mt-6">
          MERN FULLSTACK DEVELOPER
        </h1>
        <h3 className="text-1xl mt-4 mb-3">Company: Bridge 360</h3>
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
              src={mongodb}
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
              src={expressIcon}
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
              src={ReactIcon}
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
              src={nodeIcon}
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
              src={reduxIcon}
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
              src={awsIcon}
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
              src={muiIcon}
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
          Description: Development of a MERN fullstack web based ERP system for
          school administration
        </p>
      </div>
    </article>
  );
};

export default ExperienceCard;
