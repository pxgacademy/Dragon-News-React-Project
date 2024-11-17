const About = () => {
  return (
    <section className="px-5 mt-16 font-poppins">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center">About Us</h1>
        <p className="text-lg text-gray-600 mt-8">
          Dragon News is a news website dedicated to providing users with the
          latest news from various sources. We aim to keep you informed about
          the worlds most important stories and events.
        </p>
        <h2 className="text-2xl font-bold mt-16">Our Team</h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <div className="flex items-center justify-center">
            <img
              className="w-24 h-24 rounded-full"
              src="https://example.com/user1.jpg"
              alt="User 1"
            />
            <h3 className="text-xl font-bold mt-4">User 1</h3>
            <p className="text-gray-600">Senior Developer</p>
          </div>
          <div className="flex items-center justify-center">
            <img
              className="w-24 h-24 rounded-full"
              src="https://example.com/user2.jpg"
              alt="User 2"
            />
            <h3 className="text-xl font-bold mt-4">User 2</h3>
            <p className="text-gray-600">Frontend Developer</p>
          </div>
          <div className="flex items-center justify-center">
            <img
              className="w-24 h-24 rounded-full"
              src="https://example.com/user3.jpg"
              alt="User 3"
            />
            <h3 className="text-xl font-bold mt-4">User 3</h3>
            <p className="text-gray-600">Backend Developer</p>
          </div>
          <div className="flex items-center justify-center">
            <img
              className="w-24 h-24 rounded-full"
              src="https://example.com/user4.jpg"
              alt="User 4"
            />
            <h3 className="text-xl font-bold mt-4">User 4</h3>
            <p className="text-gray-600">Product Manager</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
