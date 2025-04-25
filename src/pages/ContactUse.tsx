// src/pages/ContactUs.tsx

function ContactUs() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Email</h2>
        <p className="text-gray-400">help@youtube-clone.com</p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold">Location</h2>
        <p className="text-gray-400">852-B Milaad St, Block B Faisal Town, Lahore, 54770, Pakistany</p>
      </div>
      <div className="mb-6">
        <h2 className="text-xl font-semibold pb-3">Find Us Here</h2>
        <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.551346661729!2d74.30043917636607!3d31.48152574905895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903f08ebc7e8b%3A0x47e934f4cd34790!2sFAST%20NUCES%20Lahore!5e0!3m2!1sen!2s!4v1745579611358!5m2!1sen!2s" 
        width="100%" 
        height="450" 
        style={{ border: 0, borderRadius: '8px' }}
        loading="lazy">
        </iframe>
      </div>
    </div>
  );
}

export default ContactUs;