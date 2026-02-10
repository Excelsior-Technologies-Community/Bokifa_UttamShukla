import React from 'react'

const Map = () => {
    return (
        <div>
            <div className="w-full h-[500px]">
                <iframe title="Google Map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48353.929707192976!2d-73.985169!3d40.759372!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c256598d232339%3A0xda8b85263f93969e!2sBroadway%2C%20New%20York!5e0!3m2!1sen!2sus!4v1770619002721!5m2!1sen!2sus" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" ></iframe>
            </div>
        </div>
    )
}

export default Map