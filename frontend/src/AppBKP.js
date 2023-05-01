import React from "react";
import ReactPlayer from "react-player";
import VideoUploadForm from "./components/VideoUploadForm";
function App() {
	return (
		<div>
			{/* <video src="https://www.youtube.com/watch?v=f14WNsvi5to&t=14s" /> */}
			<ReactPlayer
				url="http://res.cloudinary.com/personalprojectaswins/video/upload/v1682846970/vedios/rn5rbadhril25swk9hfn.mp4"
				controls
			/>
			{/* <VideoUploadForm /> */}
		</div>
	);
}

export default App;
