import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className="header">
      <Link to="/">
      <img
        className="header_logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
        alt="amazon"
      />
</Link>
      <div className="header_search">
        <input className="header_searchInput" type={"text"} />
        <SearchIcon className="header_searchIcon" />
      </div>

      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionOne">Hello Guest</span>
          <span className="header_lineTwo">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_optionOne">Returns</span>
          <span className="header_lineTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionOne">Your</span>
          <span className="header_lineTwo">Prime</span>
        </div>
      </div>
      <Link to="/checkout">
      <div className="header_optionBasket">
        <ShoppingBasketIcon />
        <span className="header_optionTwo header_optionCount">0</span>
      </div>
      </Link>
    </div>
  );
};
