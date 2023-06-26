import { useGoogleLogin } from "@react-oauth/google";
import Google from "../assets/Google.jsx";
import apple from "../assets/apple.png";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => {
      console.log(codeResponse.scope.profile);
      navigate("/dashboard");
    },
    onError: (error) => console.log("Login Failed:", error),
  });

  return (
    <div className="flex">
      <div className="w-[41%] h-screen bg-black text-white flex justify-center items-center">
        <h1
          style={{ fontFamily: "Montserrat", fontWeight: "700" }}
          className="text-7xl leading-[88px]"
        >
          Board.
        </h1>
      </div>
      <div className="flex bg-[#f5f5f5] w-full flex-col justify-center items-center">
        <div>
          <div
            className=""
            style={{ display: "flex", flexDirection: "column" }}
          >
            <p
              className="text-3xl leading-[44px] text-start"
              style={{ fontFamily: "Montserrat" }}
            >
              Sign In
            </p>

            <p
              style={{ fontFamily: "Lato" }}
              className="text-[] leading-[19px] "
            >
              Sign in to your account
            </p>
          </div>
          <div className="flex pt-6 pb-4 gap-6">
            <button
              onClick={(e) => {
                login();
                console.log(e);
              }}
              type="submit"
              className="bg-white w-[] rounded-lg flex  flex-row justify-center items-center gap-4 p-2 px-4"
            >
              <Google />
              <p
                className="text-[#858585]  text-[12px]  font-thin leading-[14px]"
                style={{ fontFamily: "Montserrat" }}
              >
                Sign in with Google
              </p>
            </button>
            <button className="bg-white  rounded-lg flex  flex-row justify-center items-center gap-4 p-2 px-4 ">
              <img src={apple} alt="" />
              <p
                className="text-[#858585]  text-[12px]  font-thin leading-[14px]"
                style={{ fontFamily: "Montserrat" }}
              >
                Sign in with Apple
              </p>
            </button>
          </div>
          <div className="bg-white w-[385px] h-[318px] rounded-[20px] p-[20px]">
            <form>
              <p
                style={{ fontFamily: "Lato" }}
                className="text-base text-black "
              >
                Email Address
              </p>

              <input
                type="email "
                className="rounded-[10px] bg-[#f5f5f5] w-full h-[40px] "
                required
              />
              <p
                style={{ fontFamily: "Lato" }}
                className="text-base text-black pt-[15px] "
              >
                Password
              </p>

              <input
                type="password "
                className="rounded-[10px] bg-[#f5f5f5] w-full h-[40px] "
                required
              />
              <p className="text-[#346BD4] text-base cursor-pointer leading-[19px] pt-[15px] ">
                Forgot Password?
              </p>
              <br />
              <button
                className="bg-black w-full text-white rounded-[10px] text-center p-[9px] "
                style={{ fontFamily: "Montserrat" }}
              >
                Sign In
              </button>
            </form>
          </div>
          <p
            className=" text-[#858585] p-2 text-[16px] text-center"
            style={{ fontFamily: "Lato" }}
          >
            Don’t have an account?
            <a
              className="cursor-pointer  text-[#346BD4]"
              style={{ fontFamily: "Lato" }}
            >
              {" "}
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
