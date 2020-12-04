import React from "react"
import ReactDOM from "react-dom"

import Header from "./components/header"
import Footer from "./components/footer"

import "@fortawesome/fontawesome-free/css/all.min.css"
import "bootstrap-css-only/css/bootstrap.min.css"
import "mdbreact/dist/css/mdb.css"

const App = () => {
	return (
		<div>
			<Header />
			<Footer />
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById("root"))
