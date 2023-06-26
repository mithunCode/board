import { Link } from "react-router-dom";
import dashboardI from "../assets/dashboard_icon.png";
import transI from "../assets/transaction_icon.png";
import scheduleI from "../assets/schedule_icon.png";
import userI from "../assets/user_icon.png";
import settingI from "../assets/setting_icon.png";
import pro from "../assets/profilepic.png";
import bell from "../assets/bell.png";
import AnalyticCard from "./AnalyticCard";
import revenue from "../assets/revenue.png";
import like from "../assets/like.png";
import tag from "../assets/tag.png";
import user from "../assets/people.png";
import LineChart from "./LineChart";
import PieChart from "./PieChart";
import axios from "axios";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [stats, setStats] = useState([]);
  useEffect(() => {
    axios
      .get("src/data.json")
      .then((response) => {
        const data = response.data;
        setStats(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="bg-[#F5F5F5] w-full h-full flex p-4">
      <div className="bg-black w-[20%]  rounded-[30px] ">
        <div className="flex justify-between flex-col gap-48">
          <div>
            <p
              className="text-4xl text-white pt-[60px] pb-[40px] px-[50px]"
              style={{ fontFamily: "Montserrat", fontWeight: "700" }}
            >
              Board.
            </p>
            <nav className="text-white flex flex-col  gap-5 pb-[60px] px-[50px] font-100   text-xs">
              <li className="flex gap-3 ">
                <img src={dashboardI} alt="dashbardIcon" />
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li className="flex gap-3 ">
                <img src={transI} alt="transcationIcon" />
                <Link to="/transactions">Transactions</Link>
              </li>
              <li className="flex gap-3 ">
                <img src={scheduleI} alt="ScheduleIcon" />
                <Link to="/schedules">Schedules</Link>
              </li>
              <li className="flex gap-3 ">
                <img src={userI} alt="UserIcon" />
                <Link to="/user">Users</Link>
              </li>
              <li className="flex gap-3 ">
                <img src={settingI} alt="settingIcon" />
                <Link to="/settings">Settings</Link>
              </li>
            </nav>
          </div>

          <div
            className="flex flex-col justify-center items-start gap-2  text-xs text-white text-[14px] px-[50px]"
            style={{ fontFamily: "Montserrat", fontWeight: "400" }}
          >
            <p>Help</p>
            <p>Contact Us</p>
          </div>
        </div>
      </div>
      <div className="w-full px-[40px] p-[10px]">
        <div className="flex flex-row justify-between">
          <p
            className=""
            style={{ fontFamily: "Montserrat", fontWeight: "700" }}
          >
            Dashboard
          </p>
          <div className="flex gap-7  ">
            <input
              type="text"
              className=" dash-in rounded-[10px]  bg-white placeholder:px-5 placeholder:text-[#B0B0B0] placeholder:text-[14px]"
              placeholder="Search.."
              style={{ fontFamily: "Lato" }}
            />

            <img src={bell} alt="" />
            <img
              src={pro}
              className="acc-img"
              alt=""
              style={{ borderRadius: "50%", height: "25px" }}
            />
          </div>
        </div>
        <div className="flex gap-12 pt-4 pb-4">
          <AnalyticCard
            src={revenue}
            name="Total Revenues"
            num={stats.revenue}
            bg="#DDEFE0"
          />
          <AnalyticCard
            src={tag}
            name="Total Transactions"
            num={stats.transactions}
            bg="#f4ecdd"
          />
          <AnalyticCard
            src={like}
            name="Total Likes"
            num={stats.likes}
            bg="#efdada"
          />
          <AnalyticCard
            src={user}
            name="Total Users"
            num={stats.users}
            bg="#dee0ef"
          />
        </div>
        <div className="bg-white m-2 rounded-[20px] ">
          <div className="p-2">
            <div className="flex justify-between items-center">
              <div>
                <p
                  className=""
                  style={{
                    fontFamily: "Montserrat",
                    fontWeight: "700",
                    fontSize: "18px",
                  }}
                >
                  Activities
                </p>
                <select className="text-xs text-[#858585] ">
                  <option className="text-xs text-[#858585]">
                    May-June 2021
                  </option>
                </select>
              </div>
              <div>
                <div className="flex justify-center items-center gap-2 ">
                  <div className=" bg-[#E9A0A0] rounded-[50%] w-[10px] h-[10px]"></div>
                  <p className="text-xs" style={{ fontFamily: "Lato" }}>
                    Guest
                  </p>
                  <div className=" bg-[#9BDD7C] rounded-[50%] w-[10px] h-[10px]"></div>
                  <p className="text-xs" style={{ fontFamily: "Lato" }}>
                    User
                  </p>
                </div>
              </div>
            </div>
          </div>
          <br />
          <LineChart />
        </div>
        <div className="flex justify-between px-2 pt-4">
          <div className="bg-white rounded-[20px] w-[440px] p-2  ">
            <div className="flex justify-between">
              <p
                className=""
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  fontSize: "18px",
                }}
              >
                Activities
              </p>
              <select className="text-xs text-[#858585] ">
                <option className="text-xs text-[#858585]">
                  May-June 2021
                </option>
              </select>
            </div>
            <div>
              <PieChart />
            </div>
          </div>
          <div className="bg-white rounded-[20px] w-[440px] p-2">
            <div className="flex justify-between">
              <p
                className=""
                style={{
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  fontSize: "18px",
                }}
              >
                Today&apos;s Schedule
              </p>
              <p className="text-xs text-[#858585]">See All &gt;</p>
            </div>
            <div className="flex pt-2">
              <div className="flex flex-row">
                <div className="w-[5px] h-[66px] bg-[#9BDD7C]"></div>
              </div>
              <div className="px-2">
                <p
                  className="text-[#666] text-base"
                  style={{ fontFamily: "Lato" }}
                >
                  Check operation at Giga Factory 1
                </p>
                <p
                  className="text-[#999] text-xs"
                  style={{ fontFamily: "Lato" }}
                >
                  18.00-20.00
                </p>
                <p
                  className="text-[#999] text-xs"
                  style={{ fontFamily: "Lato" }}
                >
                  at Central Jakarta
                </p>
              </div>
            </div>
            <div className="flex pt-2">
              <div className="flex flex-row">
                <div className="w-[5px] h-[66px] bg-[#6972c3]"></div>
              </div>
              <div className="px-2 ">
                <p
                  className="text-[#666] text-base"
                  style={{ fontFamily: "Lato" }}
                >
                  Meeting with suppliers from Kuta Bali
                </p>
                <p
                  className="text-[#999] text-xs"
                  style={{ fontFamily: "Lato" }}
                >
                  14.00-15.00
                </p>
                <p
                  className="text-[#999] text-xs"
                  style={{ fontFamily: "Lato" }}
                >
                  at Sunset Road, Kuta, Bali
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
