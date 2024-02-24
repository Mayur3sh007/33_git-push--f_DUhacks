import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaUpload } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUser } from "../../store/userSlice";
import axios from "axios";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "About us",
    link: "/aboutus",
  },
  {
    id: 3,
    name: "Explore",
    link: "/allProducts",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "0% Carbon Footprint",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];



const Navbar = () => {
  const dispatch = useDispatch();



  const user = useSelector(state => state.user.status);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(user);

  useEffect(() => {
    const checkIfUser = async () => {
      try {
        const response = await axios.get("/api/v1/user/getUser");

        dispatch(setUser(response.data))
        setIsUserLoggedIn(response.status === 200)
        console.log("USER LOGGED IN as: ", response.data);
      } catch (error) {
        console.error("User is Not Logged IN:", error);
      }
    };

    checkIfUser();
  }, []);

  console.log(isUserLoggedIn);




  // console.log(user);

  // console.log(isUserLoggedIn);

  const [text, setText] = useState("");
  const navigate = useNavigate();

  const formHandler = (e) => {
    e.preventDefault();
    console.log('Form submitted!');
    navigate(`/search/${text.toLowerCase().replace(/\s+/g, "-")}`);
  }

  const handleUploadClick = async (e) => {
    e.preventDefault();
    navigate('/productform')
  };

  const handleLoginClick = async (e) => {
    e.preventDefault();
    navigate('/user-login')
  };

  const handleLogoutClick = async (e) => {
    e.preventDefault();
    setIsUserLoggedIn(false);
    const response = axios.get("/api/v1/user/logout")
    console.log(response);
    navigate('/')
  };

  return (
    <div className="shadow-md bg-white dark:bg-gray-950 dark:text-white duration-200 relative z-40 px-4">
      {/* upper Navbar */}
      <div className="bg-primary/40 py-3">
        <div className="container flex justify-between items-center">
          <div>
            <Link to="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="w-10" />
              Clean N Green
            </Link>
          </div>

          <div>
            <ul className="sm:flex hidden items-center gap-4">
              {Menu.map((data) => (
                <li key={data.id}>
                  <Link
                    to={data.link}
                    className="inline-block px-4 hover:text-gray-500 active:font-bold duration-200"
                  >
                    {data.name}
                  </Link>
                </li>
              ))}
              {/* Simple Dropdown and Links */}
              {/* <li className="group relative cursor-pointer">
                <a href="#" className="flex items-center gap-[2px] py-2">
                  Trending Products
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>
                <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
                  <ul>
                    {DropdownLinks.map((data) => (
                      <li key={data.id}>
                        <a
                          href={data.link}
                          className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                        >
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </li> */}
            </ul>
          </div>



          {/* search bar */}

          <div className="flex justify-between items-center gap-4">
            <form onSubmit={formHandler}>
              <div className="relative group hidden sm:block">
                <input
                  required
                  type="text"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Search"
                  className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-md border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
                />
                <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
              </div>
            </form>




            {/* order button */}
            <button
              onClick={handleUploadClick}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-green-400  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Upload your product
              </span>
              <FaUpload className="text-xl text-green-400 drop-shadow-sm cursor-pointer" />
            </button>

            {isUserLoggedIn ? (
              <button
                type="button"
                onClick={handleLogoutClick}
                className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded"
              >
                Logout
              </button>
            ) : (
              <button
                type="button"
                onClick={handleLoginClick}
                className="text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded"
              >
                Login
              </button>
            )}

            {/* Darkmode Switch */}
            {/* <div>
              <DarkMode />
            </div> */}
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        {/* <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <Link
                to={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </Link>
            </li>
          ))}
    
        <li className="group relative cursor-pointer">
          <a href="#" className="flex items-center gap-[2px] py-2">
            Trending Products
            <span>
              <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
            </span>
          </a>
          <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
            <ul>
              {DropdownLinks.map((data) => (
                <li key={data.id}>
                  <a
                    href={data.link}
                    className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul> */}
      </div>
    </div >
  );
};

export default Navbar;
