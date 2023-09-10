import { cloudinary_upload_preset } from "../../config.js";
import {openUploadWidget} from "../../utils/CloudinaryService";


const CloudinaryUpload = ({setUrl,setName}) => {
    const uploadImageWidget = () => {
        let myUploadWidget = openUploadWidget(
            {
                cloudName: "dcswinzu2",
                uploadPreset:cloudinary_upload_preset ,
                sources: ["local","url"],
            },
            function (error, result) {
                if (!error && result.event === "success") {
                    setUrl(result.info.secure_url);
                    setName(result.info.original_filename);
                    // setUrl(result.info.secure_url);
                    // setName(result.info.original_filename);
                } else {
                    if (error) {
                        console.log(error);
                    }
                }
            }
        );
        myUploadWidget.open();
    };

    return (
        <button
            className="bg-white text-black  rounded-full p-3 font-semibold"
            onClick={uploadImageWidget}
        >
            Select Track
        </button>
    );
};

export default CloudinaryUpload;