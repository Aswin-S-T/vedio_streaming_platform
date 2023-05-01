import React from "react";

function App() {
	return (
		<div>
			<header className="p-2">
				<div class="">
					<nav class="navbar navbar-expand-lg navbar-light">
						<a
							class="navbar-brand"
							href="/"
							style={{ fontSize: "25px", color: "rgb(255 12 242 / 90%)" }}
						>
							<i className="fa fa-film text-white"></i>
							<span className="text-white">video</span>Stream
						</a>
					</nav>
				</div>
			</header>

			<section>
				<div className="container-fluid">
					<div className="row">
						<div className="col-md-2"></div>
					</div>
				</div>
			</section>
			<main></main>
			<footer></footer>
		</div>
	);
}

export default App;
