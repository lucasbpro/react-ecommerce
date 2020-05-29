import React from 'react';

import { ReactComponent as LogoSvg } from "../../assets/img/logo.svg";
import { ReactComponent as SearchIcon} from "../../assets/img/search_icon.svg";
import Cart from "../Cart";

const Topbar = () => (
	<header data-testid="topbar" className="topbar">
	<div className="container">

		<div className="topbar_logo">
			  <a href="/" className="logo">
				<LogoSvg alt="Logo Instagram" />
			  </a>
		</div>

		<div className="topbar_icons">
			<button> <SearchIcon className="topbar_icons--search"/> </button>
			<Cart/>
		</div>
	</div>
  </header>


);

export default Topbar;
