import React from "react"

const NavBar: React.FC = () => {
	return (
		<nav className="navBar">
			<button className="navBar__hideBtn show-btn">
				<span></span>
				<span></span>
				<span></span>
			</button>
			<div>
				<a className="navBar__home" href="#">
					<img
						src="https://cdn-icons-png.flaticon.com/512/9720/9720379.png"
						alt=""
					/>
				</a>
				<ul>
					<li>
						<a href="#">
							<img src="./assets/img/home.svg" alt="" />
							Home
						</a>
					</li>
					<li>
						<a href="#">
							<img src="./assets/img/book.svg" alt="" />
							Book
						</a>
					</li>
					<li>
						<a href="#">
							<img src="./assets/img/book-open.svg" alt="" />
							Book
						</a>
					</li>
					<li>
						<a href="#">
							<img src="./assets/img/heart.svg" alt="" />
							Favorites
						</a>
					</li>
				</ul>
			</div>

			<div>
				<hr />
				<ul>
					<li>
						<a href="#">
							<img src="./assets/img/home.svg" alt="" />
							Home
						</a>
					</li>
				</ul>
			</div>
		</nav>
	)
}

export default NavBar
