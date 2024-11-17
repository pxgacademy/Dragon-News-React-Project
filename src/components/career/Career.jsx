import { Link } from "react-router-dom";


const Career = () => {
    return (
        <section className="px-5 mt-16 font-poppins">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900">
                    Career Opportunities
                </h2>
                <p className="text-lg text-gray-600 mt-4">
                    We are always looking for talented individuals who are passionate about technology and want to contribute to our mission. If you are interested in joining our team, please fill out our job application form and we will get back to you soon.
                </p>
                <div className="mt-8">
                    <Link href="https://www.dragonnews.com/careers" className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                        Apply Now
                    </Link>
                </div>
            </div>

        </section>
    );
};

export default Career;