export default function StoreMap() {
    return (
      <div className="w-full h-[450px] mt-8 rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3613.541271878801!2d76.50041224326094!3d25.083532579210633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDA1JzAwLjciTiA3NsKwMzAnMTkuMCJF!5e0!3m2!1sen!2sin!4v1745731365744!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Store Location"
        ></iframe>
      </div>
    );
  }
  