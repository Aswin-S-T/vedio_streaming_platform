import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { CloudinaryContext, Video } from "cloudinary-react";
import { BACKEND_URL } from "../constants/ApplicationContants";

function VideoUploadForm() {
	const [videoFile, setVideoFile] = useState(null);
	const [videoUrl, setVideoUrl] = useState(null);

	const handleFileChange = (e) => {
		setVideoFile(e.target.files[0]);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("video", videoFile);
		const res = await fetch(`${BACKEND_URL}/videos`, {
			method: "POST",
			body: formData,
		});
		const data = await res.json();
		setVideoUrl(data.url);
	};

	return (
		<div>
			<Form onSubmit={handleSubmit}>
				<Form.Group>
					<Form.Label>Video</Form.Label>
					<Form.Control
						type="file"
						accept="video/*"
						onChange={handleFileChange}
					/>
				</Form.Group>
				<Button type="submit">Upload</Button>
			</Form>
			{videoUrl && (
				<CloudinaryContext cloudName="YOUR_CLOUD_NAME">
					<Video publicId={videoUrl} controls />
				</CloudinaryContext>
			)}
		</div>
	);
}

export default VideoUploadForm;
