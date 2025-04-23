export default function StoreMap() {
    return (
      <div className="w-full h-[450px] mt-8 rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3630.048391664523!2d73.69391407504656!3d24.518407858859984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967ef006e1358c1%3A0x604efc5fc9516a91!2sSukoon%20The%20Bliss!5e0!3m2!1sen!2sin!4v1744555732594!5m2!1sen!2sin"
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
  