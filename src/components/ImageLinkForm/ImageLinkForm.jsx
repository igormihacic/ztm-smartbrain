import React from "react";

const ImageLinkForm = () => {
	return (
		<div>
			<p className="mb-6 text-center">
				{"This magic brain will detect faces in your picture. Give it a try!"}
			</p>
			<div className="mx-auto flex max-w-[600px]">
				<input type="text" className="grow rounded-xl p-2 text-neutral-900" />
				<button className="ml-4 rounded-xl border border-[2px] border-indigo-900 bg-indigo-400 p-2 px-4 text-neutral-900">
					Detect
				</button>
			</div>
		</div>
	);
};

export default ImageLinkForm;
