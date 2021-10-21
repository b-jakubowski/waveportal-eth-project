import * as React from "react";
import { ethers } from "ethers";
import "./App.css";

export default function App() {
	const wave = () => {};

	return (
		<div className="mainContainer">
			<div className="dataContainer">
				<div className="header">👋 Hey there, its sample Wave Portal now!</div>

				<div className="bio">
					I am Bartek and I worked on designing buildings and then on VOD apps.
					Connect your Ethereum wallet and wave at me!
				</div>

				<button className="waveButton" onClick={wave}>
					Wave at Me
				</button>
			</div>
		</div>
	);
}
