import Image from "next/image";

const ProfileImage: React.FC = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden shadow-lg">
                <Image
                    src="/akash.jpg" // Ensure this file exists in the public folder
                    alt="Profile Image"
                    width={192}
                    height={192}
                    className="object-cover w-full h-full"
                />
            </div>
        </div>
    );
};

export default ProfileImage;
