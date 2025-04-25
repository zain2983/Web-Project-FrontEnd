// src/pages/AboutUs.tsx
import SocialMediaButtons from '../components/SocialMediaButtons';

function AboutUs() {
  const member1Url = 'https://medium.com/@zainalabidin'; // Replace with actual URL for Zain
  const member2Url = 'https://medium.com/@hamzaahmad6292'; // Replace with actual URL for Hamza

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Member 1 */}
        <div className="bg-[#272727] rounded-lg p-6">
          <img
            src="https://ugc.production.linktr.ee/2ba38ba9-d1b3-48eb-a8a7-8f5f7dbd3d90_image.jpeg?io=true&size=avatar-v3_0" // Replace with actual image URL
            alt="Zain Al Abidin"
            className="w-full h-350 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold">Zain Al Abidin</h2>
          <p className="text-gray-400">
            Nothing interesting going on for Zain.
          </p>
          <SocialMediaButtons 
            githubUrl="https://github.com/zain2983" // Replace with actual GitHub URL
            linkedinUrl="https://www.linkedin.com/in/zain2983/" // Replace with actual LinkedIn URL
            portfolioUrl="https://zain2983.vercel.app" // Replace with actual portfolio URL
          />
        </div>

        {/* Member 2 */}
        <div className="bg-[#272727] rounded-lg p-6">
          <img
            src="https://avatars.githubusercontent.com/u/139109293?v=4" // Replace with actual image URL
            alt="Hamza Ahmad"
            className="w-full h-350 object-cover rounded-lg mb-4"
          />
          <h2 className="text-xl font-semibold">Hamza Ahmad</h2>
          <p className="text-gray-400">
            Hamza is a veteran in the field of generative AI with almost 2 years of experience. He calls himself the king of PDF files.
          </p>
          <SocialMediaButtons 
            githubUrl="https://github.com/HamzaAhmad6292/" // Replace with actual GitHub URL
            linkedinUrl="https://www.linkedin.com/in/muhammad-hamza-ahmad-49b24124b/" // Replace with actual LinkedIn URL
            portfolioUrl="https://portfolio-git-main-hamzaahmad6292s-projects.vercel.app/" // Replace with actual portfolio URL
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUs;